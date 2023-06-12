<script>

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getDatabase, ref, set, onValue, update } from "firebase/database";

export default {
  data() {
    return {
      isPlaying: false,
      user: null,
      username: null,
      authorized: false,
      loginPage: true,
      regUsername: null,
      regPassword: null,
      regEmail: null,
      regGooglePage:false,
      url: '',
      player: null,
      RoomUid: null, 
      inRoom: false,
      allrooms: [],
      passwordRoomType: false,
      passwordRoom: '',
      connPasswordRoomType: false,
      connPasswordRoom: '',
      showAllRoomList: false,
      showProfile: false,
      showOverlay: false,
      errorInput:false,
    }
  },

  mounted() {
    const firebaseConfig = {
      apiKey: "AIzaSyCxVh1JsLTRMXSLipjB3QSwRqd2o7N6FaA",
      authDomain: "fantqw2g.firebaseapp.com",
      databaseURL: "https://fantqw2g-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "fantqw2g",
      storageBucket: "fantqw2g.appspot.com",
      messagingSenderId: "1093154126781",
      appId: "1:1093154126781:web:c5624592aa67d6a83df0d4",
      measurementId: "G-VBDDXQSXD4"
    };


    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.authorized = true;

        const dbRealTime = getDatabase();
        const starCountRef = ref(dbRealTime, 'users/' + user.uid);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          this.username = data.username
        });
      }
    });
    this.alredyInRoom();
  },

  methods: {
    togglePlayback() {
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(this.RoomUid);

      document.getElementById("player").addEventListener("play",()=>{
        this.isPlaying = true;
        console.log(this.isPlaying)

        let isPlaying = this.isPlaying;
      
        roomRef.update( {isPlaying} );
      });
      document.getElementById("player").addEventListener("pause",()=>{
        this.isPlaying = false;
        console.log(this.isPlaying)

        let isPlaying = this.isPlaying;
      
        roomRef.update( {isPlaying} );
      });
    },
    initializePlayer(url){
        this.player = new Playerjs({ // Використання this.player замість player
          id: 'player',
          file: url,
      });
    },
    signInEmail(){
      firebase.auth().signInWithEmailAndPassword(this.regEmail, this.regPassword)
      .then(()=>{
        
      })
      .catch((error) => {
          // Виникла помилка реєстрації
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error('Помилка входу', errorCode, errorMessage);
        });
    },
    signInGoogle() {
      const authProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(authProvider)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.authorized = true;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    },
    signOut() {
      firebase.auth().signOut()
        .then(() => {
          this.user = null;
          this.authorized = false;
        })
        .catch((error) => {
          console.log(error);
        });
        this.closeOutOverlay()
    },
    signUpEmail(){
      firebase.auth().createUserWithEmailAndPassword(this.regEmail, this.regPassword)
        .then((userCred)=>{
          this.user = userCred;
          const dbRealTime = getDatabase();
          set(ref(dbRealTime, 'users/' + userCred.user.uid), {
            username: this.regUsername,
            email: this.regEmail,
          });

          const username = this.regUsername;
          update(ref(dbRealTime, 'usernames/'),{
            [username]: userCred.user.uid
          })
        })
        .catch(function(error) {
          // Виникла помилка реєстрації
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error('Помилка реєстрації', errorCode, errorMessage);
        });
    },
    signUpGoogle(){
      const authProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(authProvider)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.authorized = true;

          const dbRealTime = getDatabase();
          set(ref(dbRealTime, 'users/' + userCredential.user.uid), {
            username: this.regUsername,
            email: userCredential.user.email,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    },
    createRoom() {
      this.initializePlayer(this.url);
      const db = firebase.firestore();
      const uid = this.user.uid;
      const roomData = {
        withPassw: this.passwordRoomType,
        password: this.passwordRoomType ? this.passwordRoom : '',
        isPlaying: this.isPlaying,
        users: [uid],
        videoUrl: this.url,
      };
      
      db.collection('rooms').add(roomData)
        .then((docRef) => {
          this.RoomUid = docRef.id;
          console.log('Document written with ID: ', docRef.id);
          console.log(this.RoomUid)

          this.inRoom = true;
          this.roomChanges();
          this.togglePlayback();
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });

    },
    connectToRoom() {
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(this.RoomUid);
      roomRef.get().then((doc) => {
        console.log(this.inRoom)
        if (this.inRoom) {
          this.initializePlayer(doc.data().videoUrl)
          this.inRoom = true;
          this.roomChanges();
          this.togglePlayback();
        } else {
          if (doc.data().withPassw) {
            this.connPasswordRoomType = true;
            if (this.connPasswordRoom == doc.data().password) {
              this.errorInput = false;
              this.initializePlayer(doc.data().videoUrl)
              this.inRoom = true;
              this.roomChanges();
              this.togglePlayback();
            }
            else{
              this.errorInput = true;
            }
          } else {
            this.initializePlayer(doc.data().videoUrl)
            this.inRoom = true;
            this.roomChanges();
            this.togglePlayback();
          }
        }
      })

      roomRef.update({
        users: firebase.firestore.FieldValue.arrayUnion(this.user.uid)
      });


    },
    exitRoom(){
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(this.RoomUid);
      roomRef.update({
        users: firebase.firestore.FieldValue.arrayRemove(this.user.uid)
      })
      document.getElementById('player').innerHTML=''
      document.getElementById('player').style=''
      this.player = null;
      this.RoomUid = null;
      this.inRoom = false;
    },
    deleteRoom(){
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(this.RoomUid);
      roomRef.delete()
      .then(()=>{
        document.getElementById('player').innerHTML=''
        document.getElementById('player').style=''
        this.player = null;
        this.RoomUid = null;
        this.inRoom = false;
      })
    },
    roomChanges(){
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(this.RoomUid);

      roomRef.onSnapshot((snapshot) => {
        const data = snapshot.data();
        
        !data.isPlaying ? this.player.api('pause') : this.player.api('play');

        this.isPlaying = data.isPlaying;
        
        console.log('Changes',this.isPlaying);

        
      })
    },
    changeRoomUrl(){
      const db = firebase.firestore();
      const roomRef = db.collection('rooms').doc(this.RoomUid);
      roomRef.update({
        videoUrl: this.url,
      })
      this.player = null;
      this.initializePlayer(this.url)
    },
    alredyInRoom(){
      if(this.authorized){
        const db = firebase.firestore();
        db.collection('rooms').get().then((query)=>{
          if(!query.empty){
            query.forEach((doc)=>{
              const userRef = db.collection('rooms').doc(doc.id)
              userRef.get().then((docs) =>{
                if (docs.data().users.includes(this.user.uid)){
                  this.inRoom = true
                  this.RoomUid = doc.id;
                  this.connectToRoom();
                }
              })
            })
          }
        })
      }
    },
    showAllRoomsList() {
      const db = firebase.firestore();
      const collectionRef = db.collection('rooms');

      collectionRef.get().then((querySnapshot) => {
        const allrooms = [];
        querySnapshot.forEach((doc) => {
          var docdata = doc.data();
          allrooms.push({
            id: doc.id,
            withpassw: docdata.withPassw,
            users: docdata.users.length,
          });
        });
        this.allrooms = allrooms;
      }).catch((error) => {
        console.log('Помилка отримання документів:', error);
      });
      this.showProfile ? this.showProfile = !this.showProfile : '';
      this.showAllRoomList = !this.showAllRoomList;
      this.showOverlay = !this.showOverlay;
    },
    showProfileInfo(){
      this.showAllRoomList ? this.showAllRoomList = !this.showAllRoomList : '';
      this.showProfile = !this.showProfile;
      this.showOverlay = !this.showOverlay;
    },
    closeOutOverlay(){

      // const outElementAllRooms = this.$refs.allRooms;
      // const outElementProfile = this.$refs.profileInfo;

      // if (outElementAllRooms && !outElementAllRooms.contains(event.target)) {
      //   this.showAllRoomList = false;
      // }
      // if (outElementProfile && !outElementProfile.contains(event.target)) {
      //   this.showAllRoomList = false;
      // }

      this.showProfile = false;
      this.showAllRoomList = false;
      this.showOverlay = false;
    }
  },
}

</script>

<template>
  <div v-if="showOverlay" class="overlay" @click="closeOutOverlay"></div>
  <header class="header">
    <div class="logo">
      <a href="" class="logo__1">fantq</a>
      <span class="logo__2">w2g</span>
    </div>
    <div class="right">
      <div class="theme__change">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" class="icon dark_mode">
          <path
            d="M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444 396q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480 936Zm0-80q88 0 158-48.5T740 681q-20 5-40 8t-40 3q-123 0-209.5-86.5T364 396q0-20 3-40t8-40q-78 32-126.5 102T200 576q0 116 82 198t198 82Zm-10-270Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" class="icon light_mode"
          style="display: none;">
          <path
            d="M480 696q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM80 616q-17 0-28.5-11.5T40 576q0-17 11.5-28.5T80 536h80q17 0 28.5 11.5T200 576q0 17-11.5 28.5T160 616H80Zm720 0q-17 0-28.5-11.5T760 576q0-17 11.5-28.5T800 536h80q17 0 28.5 11.5T920 576q0 17-11.5 28.5T880 616h-80ZM480 296q-17 0-28.5-11.5T440 256v-80q0-17 11.5-28.5T480 136q17 0 28.5 11.5T520 176v80q0 17-11.5 28.5T480 296Zm0 720q-17 0-28.5-11.5T440 976v-80q0-17 11.5-28.5T480 856q17 0 28.5 11.5T520 896v80q0 17-11.5 28.5T480 1016ZM226 378l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226 378Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734 774l43 42q12 11 11.5 28T777 873q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678 322l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183 873q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282 830l-42 43q-11 12-28 11.5T183 873Zm297-297Z" />
        </svg>
      </div>
      <img v-if="user" :src="user.photoURL" class="avatar" @click="showProfileInfo"/>
    </div>
    <Transition name="profile">
      <div class="profile_info" v-if="showProfile">
        <div class="profile_info_container">
          <div v-if="username" style="font-size: 1.2rem;">{{ username }}</div>
          <div>Ваш UID:</div>
          <p v-if="user" style="font-size: 0.8rem;">{{ user.uid }}</p>
          <button v-if="authorized" class="signOut" @click="signOut">SignOut</button>
        </div>
      </div>
    </Transition>
  </header>
  <main>
    <div v-if="authorized" class="all_rooms">
      <svg @click="showAllRoomsList" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="icon all_rooms_button"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
      <Transition name="allRoom">
        <div class="all_room_list" v-if="showAllRoomList">
          <p>Всі кімнати:</p>
          <div>
            <div v-for="room in allrooms" :key="room.id" class="room-id">
              <div class="all_rooms_id">{{ room.id }}</div>
              <span>
                <svg v-if="room.withpassw" class="icon roomlock" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-80q-24.75 0-42.375-17.625T160-140v-434q0-24.75 17.625-42.375T220-634h70v-96q0-78.85 55.606-134.425Q401.212-920 480.106-920T614.5-864.425Q670-808.85 670-730v96h70q24.75 0 42.375 17.625T800-574v434q0 24.75-17.625 42.375T740-80H220Zm0-60h520v-434H220v434Zm260.168-140Q512-280 534.5-302.031T557-355q0-30-22.668-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350-634h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426-860 388-822.083 350-784.167 350-730v96ZM220-140v-434 434Z"/></svg>
              </span>
              <div class="users_circle_count" v-for="index in room.users" :key="index"></div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div v-if="!authorized && loginPage" class="login_container">
      <div class="login">
        <form @submit.prevent="signInEmail" class="signIn_form">
          <input type="text" placeholder="E-mail" v-model="regEmail" required>
          <input type="text" placeholder="Пароль" v-model="regPassword" required>
          <button>Ввійти</button>
        </form>
        <button class="signIn" @click="signInGoogle">Увійти через Google</button>
        <button class="signUpEmail" @click="()=>{this.loginPage = !this.loginPage}">Зареєструватися</button>
      </div>
    </div>
    <div v-if="!authorized && !loginPage" class="registration_container">
      <div class="registration">
        <form v-if="!regGooglePage" @submit.prevent="signUpEmail" class="registration_form">
          <input type="text" placeholder="Нікнейм" v-model="regUsername" required>
          <input type="text" placeholder="E-mail" v-model="regEmail" required>
          <input type="text" placeholder="Пароль" v-model="regPassword" required>
          <button>Зареєструватися</button>
        </form>
        <form v-if="regGooglePage" @submit.prevent="signUpGoogle">
          <input type="text" placeholder="Нікнейм" v-model="regUsername" required>
          <button>Зареєструватися</button>
        </form>
        <button v-if="regGooglePage" class="signUpGoogle" @click="()=>{this.regGooglePage = !this.regGooglePage}">Зареєструватися через E-mail</button>
        <button v-if="!regGooglePage" class="signUpGoogle" @click="()=>{this.regGooglePage = !this.regGooglePage}">Зареєструватися через Google</button>
        <button class="signUpEmail" @click="()=>{this.loginPage = !this.loginPage}">Увійти</button>
      </div>
    </div>

    <div v-if="authorized" class="player_container">
      <div id="player"></div>
    </div>

    <div  v-if="authorized && !inRoom" class="main_page">
      <div class="main_page_container">
        <form  @submit.prevent="createRoom" class="creat_room-form">
          <button class="createRoom">Cтворити кімнату</button>
          <input type="text" placeholder="Посилання на відео" v-model="url" required>
          <div class="password">
            <label for="with_passw">З паролем</label>
            <input id="with_passw" type="radio" name="passwordType" v-model="passwordRoomType" :value="true" required>
            <label for="without_passw">Без пароля</label>
            <input id="without_passw" type="radio" name="passwordType" v-model="passwordRoomType" :value="false" required>
          </div>
          <input v-if="passwordRoomType" type="password" placeholder="Пароль" v-model="passwordRoom" required>
        </form>
        <form @submit.prevent="connectToRoom" class="connect_room-form">
          <button class="createRoom">Підʼєднатися до кімнати</button>
          <input type="text" placeholder="ID кімнати" v-model="RoomUid" required>
          <input v-if=" connPasswordRoomType" type="text" placeholder="Пароль" v-model="connPasswordRoom" :style="{ border: errorInput ? '1px solid rgba(255, 0, 0, 0.6)' : ' 1px solid transparent' }" required>
        </form>
      </div>
    </div>

    <div class="room_info" v-if="inRoom && RoomUid">
      <div>ID кімнати: </div><div>{{ this.RoomUid }}</div>
    </div>

    <div v-if="authorized && inRoom" class="room_buttons">
      <form @submit.prevent="exitRoom">
        <button class="createRoom">Вийти з кімнати</button>
      </form>
      <form @submit.prevent="changeRoomUrl" class="change_room_url">
        <input class="change_room_url_input" type="text" placeholder="Посилання на відео" v-model="url" required>
        <button class="createRoom">Змінити відео</button>
      </form>
      <form @submit.prevent="deleteRoom">
        <button class="createRoom">Видалити кімнату</button>
      </form>
    </div>
  </main>
</template>

<style scoped>

header{
  display: flex;
  background: #383737;
  max-width: 100%;
  height: 8vh;
  padding: 0 1.1rem;
  justify-content: space-between;
  align-items: center;
}

main{
  margin-top: 1.5rem;
  padding: 0 1.1rem;
}

.logo{
  display: flex;
  align-items: flex-end;
}
  .logo__1{
      font-size: 1.2rem;
      color: white;
      text-decoration: none;
  }

.theme__change{
  display: flex;
}
  .icon{
    fill: white;
    cursor: pointer;
  }
  .icon:hover{
      transform: scale(1.2);
      fill: rgb(89, 89, 89);
  }
.right{
  gap: 0.5rem;
  display: flex;
  height: 100%;
  align-items: center;
}
  .avatar{
      border-radius: 50%;
      min-width: 16px;
      min-height: 16px;
      height: 60%;
      z-index: 12;
      cursor: pointer;
    }
    .avatar:hover{
      transform: scale(1.2);
    }

    .profile-enter-active,
    .profile-leave-active {
      transition: opacity 0.3s ease;
    }

    .profile-enter-from,
    .profile-leave-to {
      opacity: 0;
    }
    .profile_info{
      right: 1.1rem;
      border-radius: 1.5rem;
      top: 10vh;
      position: absolute;
      background: #383737;
      width: 25%;
      z-index: 12;
      padding: 1rem;
    }

    .profile_info_container{
      word-wrap: break-word;
      position: relative;
      max-width: 100%;
      height: 100%;
    }
      .signOut{
        margin-top: 1rem;
      }

.login_container{
  width: 100%;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
  .login{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    background: #383737;
    padding: 5rem 2.5rem;
    border-radius: 2rem;
    align-content: center;
  }
  .signIn_form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  
.registration_container{
  width: 100%;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
  .registration{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #383737;
    padding: 6rem 2.5rem;
    border-radius: 2rem;
  }
  .registration_form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }  

.main_page{
  display: flex;
  width: 100%;
  height: 85vh;
  justify-content: center;
  align-items: center;
}
  .main_page_container{
    padding: 3rem 1rem;
    background: #383737;
    display: flex;
    gap: 7vh;
    flex-direction: column;
    border-radius: 2rem;
  }
  .creat_room-form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
  .connect_room-form{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

.player_container{
  padding: 0 7%;
}

.room_buttons{
  width: 100%;
    margin-top: 1.3rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

  .change_room_url{
    display: flex;
    flex-direction: column-reverse;
  }

.all_rooms{
  gap: 0.7rem;
  position: absolute;
  max-width: 250px;
  display: flex;
  right: 1.1rem;
  transition: all 0.5 ease;
  z-index: 11;

}

  .all_rooms_button{
    border-radius: 0.6rem;
    background: #383737;
    width: 2rem;
    height: 2rem;
    transition: right 0.5s;
    padding: 0.2rem;
  }
  .all_room_list{
    display: flex;
    max-width: 200px;
    transition: right 0.5s;
    border-radius: 1rem;
    background: #383737;
    z-index: 11;
    padding: 1rem;
    word-wrap: break-word;
    flex-direction: column;
  }
  .all_rooms_id{
    font-size: 0.8rem;
  } 
  .allRoom-enter-active,
  .allRoom-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .allRoom-enter-from,
  .allRoom-leave-to {
    opacity: 0;
  }

  .room-id{
    padding: 0.3rem;
    border-radius: 0.5rem;
    background: #1a1a1a;
    margin: 0.3rem 0;
  }
  .roomlock{
    width: .8rem;
    height: .8rem;
  }
  .users_circle_count{
    display: inline-block;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: rgb(51, 218, 70);
  }

.overlay{
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100vh;
}

.room_info{
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px){
  .main_page_container{
    width: 80%;
  }
}
</style>
