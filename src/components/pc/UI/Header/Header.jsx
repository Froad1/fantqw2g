import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import classes from './Header.module.css'
import animationConfig from '/public/configs/animationConfig';


import { AnimatePresence, motion as m } from 'framer-motion'
import { useEffect, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/database'


const Header = () =>{
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
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);
    const [isLight, setIsLight] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const navigate = useNavigate()

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                setAuth(true);
                setUser(user);
            }
            else{
                setAuth(false)
            }
        })
    },[])

    const navigateLogin = () => {
        navigate('/login');
    }
    const navigateRegister = () => {
        navigate('/register');
    }

    const signOut = () =>{
        firebase.auth().signOut()
    }

    const changeMode = () => {
        setIsLight(!isLight);
        document.querySelector('.App').dataset.theme = isLight ? 'dark' : 'light';
    }

    return (
        <m.header
            initial={{ opacity: animationConfig.main.initialOpacity }}
            animate={{ opacity: animationConfig.main.animateOpacity }}
            exit={{ opacity: animationConfig.main.exitOpacity }}
            transition={{ duration: animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect }}
        >
            <Link to='/' className={classes.logo}>fantqw2g</Link>
            {!auth ?
                (
                    <div className={classes.buttons_autorization}>
                        <AnimatePresence>
                            {isLight ? 
                                (
                                    <m.svg onClick={changeMode} layout transition={animationConfig.move} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></m.svg>
                                ):(
                                    <m.svg onClick={changeMode} layout transition={animationConfig.move} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></m.svg>
                                )
                            }
                        </AnimatePresence>
                        <Button onClick={navigateLogin} primary={false}>SignIn</Button>
                        <Button onClick={navigateRegister} primary={true}>SignUp</Button>
                    </div>
                ) : (
                    <div className={classes.account_box}>
                        {isLight ? 
                            (
                                <m.svg onClick={changeMode} layout transition={animationConfig.move} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></m.svg>
                            ):(
                                <m.svg onClick={changeMode} layout transition={animationConfig.move} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></m.svg>
                            )
                        }
                        {user.displayName}
                        {user.photoURL ? 
                            (
                                <img onClick={()=>{setAccountDropdown(!accountDropdown)}} src={user.photoURL} alt="user" className={classes.user_photo} />
                            ) : (
                                <svg onClick={()=>{setAccountDropdown(!accountDropdown)}}  xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                            )
                        }
                        <AnimatePresence>
                            {accountDropdown && (
                                <m.div 
                                    key='accountDropdown' 
                                    className={classes.account_dropdown}  
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={animationConfig.move} 
                                >
                                    ХУЙ
                                    <Button primary={false}>Налаштування</Button>
                                    <Button primary={false} onClick={signOut}>Вийти</Button>
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            }
        </m.header>
    )
}

export default Header