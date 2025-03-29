import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/database'


function createRoomHook(url) {
    const firebaseConfig = {
        apiKey: "AIzaSyBPqdbyKPq-Ay5J_a2YGwMF-i-m074sBvo",
        authDomain: "fantqw2gv3.firebaseapp.com",
        projectId: "fantqw2gv3",
        storageBucket: "fantqw2gv3.appspot.com",
        messagingSenderId: "205303446139",
        appId: "1:205303446139:web:46fcfa5c40e03d454b00de",
        measurementId: "G-38TSV9FRNG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const roomRef = db.collection('rooms').doc();
    const roomInfoRef = db.collection('roomsInfo').doc(roomRef.id);

    roomRef.set({
        url: url,
        timing: 0,
        play: false,
    })

    roomInfoRef.set({
        name: url,
    })
    .then(() => {
        console.log("Room created successfully");
        console.log("Room ID: ", roomRef.id);
    })
    .catch((error) => {
        console.error("Error creating room: ", error);
    });

}
export default createRoomHook