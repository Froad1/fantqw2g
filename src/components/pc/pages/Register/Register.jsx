import { auth, db } from '../../../../assets/firebase';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './Register.module.css'

import { motion as m } from 'framer-motion'

import animationConfig from '/public/configs/animationConfig';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {useTranslation } from 'react-i18next';

function Register() {
    const {t} = useTranslation();
    const [login, setLogin] = useState('');
    const [loginError, setLoginError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [seePassword, setSeePassword] = useState(false);
    const [loggined, setLoggined] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) =>{
            user && setLoggined(true);
        })
    },[])

    useEffect(()=>{
        if(loggined){
            navigate('/')
        }
    },[loggined])



    const signUpGoogle = () =>{
        const authProvider = GoogleAuthProvider();
        signInWithPopup(auth, authProvider)
          .then((userCredential) => {
            setAuth(true)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
          });
    }


    const signUpEmail = async () => {
        setLoginError('')
        setEmailError('')
        setPasswordError('')

        if(!login || login == '') {setLoginError(t('register.errors.username_empty')); return;}
        if(login && login != '' && login.length < 3) {setLoginError(t('register.errors.username_invalid')); return;}
        if(!email || email == '') {setEmailError(t('register.errors.email_empty')); return;}
        if(!email.includes('@')) {setEmailError(t('register.errors.email_invalid')); return;}
        if(!password || password == '') {setPasswordError(t('register.errors.password_empty')); return;}
        if(password.length < 6) {setPasswordError(t('register.errors.password_invalid')); return;}

        const usernamesRef = doc(collection(db, 'usernames'), 'allusernames')
        const idUsernamesRef = doc(collection(db, 'usernames'), 'idUsernames')
        const usernamesDoc = await getDoc(usernamesRef)
        const usernames = usernamesDoc.data().allusername
        const loginTaken = usernames.includes(login)

        if(loginTaken) {setLoginError(t('register.errors.username_taken')); return;}


            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                return updateProfile(result.user, {
                    displayName: login
                })
            })
            .then(() => {
                // Update the allusername field in the usernames collection
                updateDoc(usernamesRef, {
                    allusername: [...usernames, login]
                })

                // Add the user to the idUsernames collection
                setDoc(idUsernamesRef, {
                    [login]: {
                        email: email
                    }
                }, { merge: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginError('something went wrong')
                console.error(errorCode, errorMessage);
            });
    }

    return (  
        <m.div 
            className={classes.register_container}
            initial={{opacity:animationConfig.main.initialOpacity}}
            animate={{opacity:animationConfig.main.animateOpacity}}
            exit={{opacity:animationConfig.main.exitOpacity}}
            transition={{duration:animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect}}
        >
            <form className={classes.register_form}>
                <div className={classes.inputs_box}>
                    <div>
                        <Input placeholder={t('register.username_input')} value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
                        <span className={classes.error}>{loginError}</span>
                    </div>
                    <div>
                        <Input placeholder={t('register.email_input')} type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <span className={classes.error}>{emailError}</span>
                    </div>
                    <div>
                        <div className={classes.password_box}>
                            <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder={t('register.password_input')} type={seePassword ? "text" : "password"}/>
                            { seePassword ? (
                                    <svg onClick={()=>{setSeePassword(!seePassword)}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
                                ):(
                                    <svg onClick={()=>{setSeePassword(!seePassword)}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                                )
                            }
                        </div>
                        <span className={classes.error}>{passwordError}</span>
                    </div>
                </div>
                <div className={classes.buttons_box}>
                    <Button onClick={signUpEmail} primary={true}>{t('register.register_btn')}</Button>
                    <Button onClick={signUpGoogle} primary={false}> 
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"></path>
                        </svg>
                        </span>
                        Google
                    </Button>
                </div>
            </form>
        </m.div>
    );
}

export default Register;