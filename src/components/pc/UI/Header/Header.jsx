import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import classes from './Header.module.css'
import animationConfig from '/public/configs/animationConfig';


import { AnimatePresence, motion as m } from 'framer-motion'
import { useEffect, useState } from 'react';


import {useTranslation } from 'react-i18next';
import '../../../../assets/locales/config'
import i18next from 'i18next';
import Flag from 'react-world-flags';

import { auth } from '../../../../assets/firebase';


const Header = () =>{
    const {t} = useTranslation();
    const navigate = useNavigate()
    const [loggined, setLoggined] = useState(null);
    const [user, setUser] = useState(null);
    const [isLight, setIsLight] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [settingsDropdown, setSettingsDropdown] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLoggined(true);
                setUser(user);
            } else {
                setLoggined(false);
                setUser(null);
            }
        });                
    },[])

    const navigateLogin = () => {
        navigate('/login');
    }
    const navigateRegister = () => {
        navigate('/register');
    }

    const signOut = () =>{
        auth.signOut().then(() => {
            setLoggined(false);
            setUser(null);
            navigate('/');
        }
        ).catch((error) => {
            console.error('Error signing out:', error);
        });
    }

    const changeMode = () => {
        setIsLight(!isLight);
        document.querySelector('.App').dataset.theme = isLight ? 'dark' : 'light';
    }


    useEffect(()=>{
        checkLanguage();
    },[])

    const checkLanguage = () =>{
        setSelectedLanguage(i18next.language)
    }
    
    const changeLanguage = (language) =>{
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.lang = language;
        }
        i18next.changeLanguage(language);
        setSelectedLanguage(language);
    }

    return (
        <m.header
            initial={{ opacity: animationConfig.main.initialOpacity }}
            animate={{ opacity: animationConfig.main.animateOpacity }}
            exit={{ opacity: animationConfig.main.exitOpacity }}
            transition={{ duration: animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect }}
        >
            <Link to='/' className={classes.logo}>fantqw2g</Link>
            {!loggined ?
                (
                    <div className={classes.buttons_autorization}>
                        <Button onClick={navigateLogin} primary={false}>SignIn</Button>
                        <Button onClick={navigateRegister} primary={true}>SignUp</Button>
                    </div>
                ) : (
                    <div className={classes.account_box}>
                        {user.displayName}
                        {user.photoURL ? 
                            (
                                <img onClick={()=>{setAccountDropdown(!accountDropdown); setSettingsDropdown(false)}} src={user.photoURL} alt="user" className={classes.user_photo} />
                            ) : (
                                <svg onClick={()=>{setAccountDropdown(!accountDropdown); setSettingsDropdown(false)}}  xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
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
                                    <Button primary={false} onClick={signOut}>{t("header.account.signout")}</Button>
                                </m.div>
                            )}
                        </AnimatePresence>
                        <svg onClick={()=>{setSettingsDropdown(!settingsDropdown); setAccountDropdown(false)}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                        <AnimatePresence>
                            {settingsDropdown && (
                                <m.div 
                                    key='settingsDropdown' 
                                    className={classes.settings_dropdown}  
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={animationConfig.move} 
                                >
                                    <Button primary={false} onClick={()=>{setLanguageDropdown(!languageDropdown)}}>{
                                        selectedLanguage == "uk" ? (
                                            <>
                                                Language
                                                <Flag code='ua' className={classes.flag}></Flag>
                                            </>
                                        ) : selectedLanguage == "cz" ? (
                                            <>
                                                Language
                                                <Flag code='cz' className={classes.flag}></Flag>
                                            </>
                                        ) : (
                                            <>
                                                Language
                                                <Flag code='gb' className={classes.flag}></Flag>

                                            </>
                                        )
                                        }
                                    </Button>
                                    <AnimatePresence>
                                        {languageDropdown && ( 
                                            <m.div 
                                                key='languageDropdown' 
                                                className={classes.languages} 
                                                layout                                     
                                                initial={{ opacity: 0, y: -50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={animationConfig.move} 
                                            >
                                                <Button primary={true} onClick={() => {setSelectedLanguage("uk"); changeLanguage('uk')}}>
                                                    <Flag code='ua' className={classes.flag}></Flag>
                                                    Українська
                                                </Button>
                                                <Button primary={true} onClick={() => {setSelectedLanguage("en");  changeLanguage('en')}}>
                                                    <Flag code='gb' className={classes.flag}></Flag>
                                                    English
                                                </Button>
                                                <Button primary={true} onClick={() => {setSelectedLanguage("cz");  changeLanguage('cz')}}>
                                                    <Flag code='cz' className={classes.flag}></Flag>
                                                    Čeština
                                                </Button>
                                            </m.div>
                                        )}
                                    </AnimatePresence>                                
                                    <Button onClick={changeMode} primary={false}>
                                        {isLight ? (
                                            <m.svg layout transition={animationConfig.move} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></m.svg>
                                        ): (
                                            <m.svg layout transition={animationConfig.move} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></m.svg>

                                        )} 
                                        {isLight ? t('header.settings.dark_theme') : t('header.settings.light_theme')}
                                    </Button>
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