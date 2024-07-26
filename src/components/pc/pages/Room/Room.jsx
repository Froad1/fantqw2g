import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/database'
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Input from '../../UI/Input/Input';

import classes from './Room.module.css'
import Button from '../../UI/Button/Button';

import { AnimatePresence, motion as m, spring } from 'framer-motion'

import animationConfig from '/public/configs/animationConfig';

function Room(){
    const { roomId } = useParams();
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
    const roomRef = db.collection('rooms').doc(roomId);
    const roomInfoRef = db.collection('roomsInfo').doc(roomId);
    const playerRef = useRef(null);
    const [roomData, setRoomData] = useState([]);
    const [roomInfo, setRoomInfo] = useState([]);
    const [lock, setLock] = useState(true);
    const [passInput, setPassInput] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [currentUrl, setСurrentUrl] = useState(null);
    const [newUrl, setNewUrl] = useState('');

    useEffect(()=>{
        getInfo()
    },[])

    const getData = () =>{
        roomRef.get().then((doc)=>{
            if(doc.exists && doc.data()){
                setRoomData(doc.data());
                setСurrentUrl(doc.data().url);
            }
        })
    }

    useEffect(() => {
        if (roomData.length != 0 && currentUrl) {
          console.log(roomData);
          console.log("data", currentUrl);
          console.log("cur", currentUrl);
          loadPlayerScript().then(() => {
            initializePlayer(currentUrl);
          });
        }
      }, [roomData, currentUrl]);

    const getInfo = () =>{
        roomInfoRef.get().then((doc)=>{
            if(doc.exists){
                setRoomInfo(doc.data());
                if(doc.data().pass){
                    setLock(true)
                    const cachedRoomData = localStorage.getItem(`room-${roomId}`);
                    if (cachedRoomData) {
                        const { password } = JSON.parse(cachedRoomData);
                        console.log(password);
                        if(password || password != ''){
                            if(btoa(password) === doc.data().pass){
                                getData()
                                setLock(false)
                            }
                        }
                    } 
                } else {
                    setLock(false)
                }
            }
        })
    }

    const checkPass = () =>{
        console.log(btoa(passInput) + ' inp');
        console.log(roomInfo.pass + ' inf');
        if(btoa(passInput) === roomInfo.pass){
            getData()
            setLock(false)
            localStorage.setItem(`room-${roomId}`, JSON.stringify({ password: passInput }));
        }
    }

    const loadPlayerScript = () => {
        return new Promise((resolve, reject) => {
          const checkscript = document.querySelector('script[src="https://froad1.github.io/fantqw2g/libs/playerjs.js"]');
          if (checkscript) {
            // Script is already loaded, resolve immediately
            resolve();
            console.log("вже є");
          } else {
            const script = document.createElement('script');
            script.src = '/libs/playerjs.js';
            script.type = 'text/javascript';
            script.onerror = () => reject(new Error('Failed to load the script'));
            document.body.appendChild(script);
            console.log("script");
            script.onload = () => resolve();
          }
        });
      };

    const initializePlayer = (playerurl) =>{
        if (playerurl) {
            playerRef.current = new Playerjs({ id: 'player', file: playerurl });
            console.log("inig");
            trackClientSnapshot();
            trackServerSnapshot();
        }

    }


    const trackClientSnapshot = () =>{
        var playerElement = document.getElementById('player');

        if (playerElement) {
            playerElement.addEventListener("play", () => {
                console.log('play');
                var time = playerRef.current.api('time');
                roomRef.update({
                    play: true,
                    timing: time,

                })
            });
            playerElement.addEventListener("pause", () => {
                console.log('pause');
                var time = playerRef.current.api('time');
                roomRef.update({
                    play: false,
                    timing: time,
                })
            });
            // playerElement.addEventListener("time", () => {
            //     // console.log('pause');
            //     var time = playerRef.current.api('time');
            //     console.log(time);
            // });
        }
    }

    const trackServerSnapshot = () =>{
        roomRef.onSnapshot((doc) =>{
            var data = doc.data();
            data.play ? window.pljssglobal[0].api('play') : window.pljssglobal[0].api('pause'); 
            playerRef.current.api('seek', data.timing);
            console.log(currentUrl, data.url);
            if(currentUrl && data.url != currentUrl){
                // window.location.reload();
            }
        });
    }

    const handleSettingsClick = () => {
        setShowSettings(!showSettings);
    }

    const changeUrl = () => {
        // e.preventDefault()
        // window.pljssglobal[0].api('file', newUrl);
        roomRef.update({
            url: newUrl,
            timing: 0,
        })
    };

    const exitRoom = () =>{
        roomRef.update({
            users: firebase.firestore.FieldValue.arrayRemove(user.uid)
        })
        navigate('/')
    }

    const deleteRoom = () =>{
        roomRef.delete();
        navigate('/')
    }

    return (
        <m.div 
            className={classes.room_container}
            initial={{opacity:animationConfig.main.initialOpacity}}
            animate={{opacity:animationConfig.main.animateOpacity}}
            exit={{opacity:animationConfig.main.exitOpacity}}
            transition={{duration:animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect}}
        >
            {lock ? (
                <>
                    <div>ХУЙ</div>
                    <Input value={passInput} onChange={e => setPassInput(e.target.value)} className={classes.secondary_inpt + ` ${classes.inpt}`}/>
                    <Button onClick={() => checkPass()} primary={false}>XUI</Button> 
                </>
            ) : (
                <>
                    <m.div className={classes.player_container} layout transition={animationConfig.move} key='player'>
                        <div id="player" className={classes.player}></div>
                    </m.div>
                    <m.div 
                        className={classes.room_title}
                        layout
                        transition={animationConfig.move}
                        key='roomTitle'
                    >
                        <div>Кімната: <span className={classes.room_name}>{roomInfo.name}</span></div>
                        <Button onClick={handleSettingsClick} primary={false}>Налаштування</Button>
                    </m.div>
                    <AnimatePresence>
                        {showSettings && (
                            <m.div 
                                className={classes.settings_block}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={animationConfig.move}
                                key='settings'
                            >
                                <Button onClick={exitRoom} primary={true}>Вийти з кімнати</Button>
                                <div className={classes.change_url}>
                                    <Input value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder={'Новий URL'}/>
                                    <Button onClick={() => changeUrl(newUrl)} primary={true}>Змінити URL</Button>
                                </div>
                                <Button onClick={deleteRoom} primary={true}>Видалити кімнату</Button>
                            </m.div>
                        )}
                    </AnimatePresence>
                </>
            )

            }

        </m.div>
    )
}

export default Room