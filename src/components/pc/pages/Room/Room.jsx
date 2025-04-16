import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/database'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../../assets/firebase';
import { collection, doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot, arrayRemove } from 'firebase/firestore';


import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Input from '../../UI/Input/Input';

import classes from './Room.module.css'
import Button from '../../UI/Button/Button';

import { AnimatePresence, motion as m, spring } from 'framer-motion'

import animationConfig from '/public/configs/animationConfig';

import { useTranslation } from 'react-i18next';
import '../../../../assets/locales/config'
import { get } from 'firebase/database';

function Room() {
    const { roomId } = useParams();
    // const firebaseConfig = {
    //     apiKey: "AIzaSyBPqdbyKPq-Ay5J_a2YGwMF-i-m074sBvo",
    //     authDomain: "fantqw2gv3.firebaseapp.com",
    //     projectId: "fantqw2gv3",
    //     storageBucket: "fantqw2gv3.appspot.com",
    //     messagingSenderId: "205303446139",
    //     appId: "1:205303446139:web:46fcfa5c40e03d454b00de",
    //     measurementId: "G-38TSV9FRNG"
    // };

    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // const db = firebase.firestore();
    const roomRef = doc(collection(db, 'rooms'), roomId);

    const playerRef = useRef(null);
    const [roomData, setRoomData] = useState([]);
    const [roomInfo, setRoomInfo] = useState([]);
    const [showSettings, setShowSettings] = useState(false);
    const [currentUrl, setСurrentUrl] = useState(null);
    const [newUrl, setNewUrl] = useState('');
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        getDoc(roomRef).then((doc) => {
            if (doc.exists && doc.data()) {
                setRoomData(doc.data());
                setСurrentUrl(doc.data().url);
                if (!doc.data().users?.includes(auth.currentUser.uid) && auth.currentUser.uid) {
                    updateDoc(roomRef, {
                        users: arrayUnion(auth.currentUser.uid)
                    })
                }
            }
        }
        )
    }

    useEffect(() => {
        if (roomData.length != 0 && currentUrl) {
            loadPlayerScript().then(() => {
                initializePlayer(currentUrl);
            });
        }
    }, [roomData, currentUrl]);


    const loadPlayerScript = () => {
        return new Promise((resolve, reject) => {
            const checkscript = document.querySelector('script[src="../libs/playerjs.js"]');
            if (checkscript) {
                // Script is already loaded, resolve immediately
                resolve();
            } else {

                const script = document.createElement('script');
                script.src = '../libs/playerjs.js';
                script.type = 'text/javascript';
                script.onerror = () => reject(new Error('Failed to load the script'));
                document.body.appendChild(script);
                script.onload = () => resolve();
            }
        });
    };

    const initializePlayer = (playerurl) => {
        if (playerurl) {
            playerRef.current = new Playerjs({ id: 'player', file: playerurl });
            trackClientSnapshot();
            trackServerSnapshot();
        }

    }


    const trackClientSnapshot = () => {
        var playerElement = document.getElementById('player');

        if (playerElement) {
            playerElement.addEventListener("play", () => {
                var time = playerRef.current.api('time');
                updateDoc(roomRef, {
                    play: true,
                    timing: time,
                })
            });
            playerElement.addEventListener("pause", () => {
                var time = playerRef.current.api('time');
                updateDoc(roomRef, {
                    play: false,
                    timing: time,
                })
            });
            playerElement.addEventListener("time", () => {
                var time = playerRef.current.api('time');
            });
        }
    }

    const trackServerSnapshot = () => {
        onSnapshot(roomRef, (doc) => {
            var data = doc.data();
            data.play ? window.pljssglobal[0].api('play') : window.pljssglobal[0].api('pause');
            var time = playerRef.current.api('time');
            if (time - 1 >= data.timing || time + 1 <= data.timing) {
                playerRef.current.api('seek', data.timing);
            }
            if (currentUrl && data.url != currentUrl) {
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
        updateDoc(roomRef, {
            url: newUrl,
            play: false,
            timing: 0,
        })
    };

    const exitRoom = () => {
        updateDoc(roomRef, {
            users: arrayRemove(auth.currentUser.uid)
        })
        localStorage.removeItem(`room-${roomId}`);
        navigate('/home')
    }

    const deleteRoom = () => {
        roomRef.delete();
        navigate('/home')
    }

    return (
        <m.div
            className={classes.room_container}
            initial={{ opacity: animationConfig.main.initialOpacity }}
            animate={{ opacity: animationConfig.main.animateOpacity }}
            exit={{ opacity: animationConfig.main.exitOpacity }}
            transition={{ duration: animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect }}
        >
            <m.div className={classes.player_container} layout transition={animationConfig.move} key='player'>
                <div id="player" className={classes.player}></div>
            </m.div>
            <m.div
                className={classes.room_title}
                layout
                transition={animationConfig.move}
                key='roomTitle'
            >
                <div>{t('room.room_title')} <span className={classes.room_name}>{roomInfo.name}</span></div>
                <Button onClick={handleSettingsClick} primary={false}>{t('room.settings')}</Button>
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
                        <Button onClick={exitRoom} primary={true}>{t('room.exit_btn')}</Button>
                        <div className={classes.change_url}>
                            <Input value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder={t('room.change_url_input')} />
                            <Button onClick={() => changeUrl(newUrl)} primary={true}>{t('room.change_url_btn')}</Button>
                        </div>
                        <Button onClick={deleteRoom} primary={true}>{t('room.delete_btn')}</Button>
                    </m.div>
                )}
            </AnimatePresence>


        </m.div>
    )
}

export default Room
