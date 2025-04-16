import { AnimatePresence, motion as m, spring } from 'framer-motion'

import classes from './Home.module.css'

import {useTranslation } from 'react-i18next';
import '../../../../assets/locales/config'
import { useEffect, useState } from 'react';

import createRoomHook from '../../../../assets/hooks/createRoomHook';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';


function Home() {
    const {t} = useTranslation();
    const [showPassInput, setShowPassInput] = useState(false)
    const [inputUrl, setInputUrl] = useState('');
    const [inputId, setInputId] = useState('');
    const [inputPass, setInputPass] = useState('');

    const create = () => {
        createRoomHook(inputUrl)
    }


    return (  
        <div className={classes.home_container}>
            <div className={classes.room_block}>
                <form action="" className={classes.create_room_form}>
                    <Input type="text" onChange={(e)=>(setInputUrl(e.target.value))} value={inputUrl} placeholder={t('home.createroom.input_url')} required/>
                    <Input type="checkbox" id="checkbox_pass" className={classes.checkbox_pass} onChange={(e)=> setShowPassInput(e.target.checked)}/>
                    <label htmlFor="checkbox_pass">{t('home.createroom.checkbox_pass')}</label>
                    {showPassInput && (
                            <Input type='text' className={classes.input_pass} placeholder={t('home.createroom.input_pass')} />
                    )}
                    <Button className={classes.create_room_button} onClick={create}>{t('home.createroom.button')}</Button>
                </form>
                <form action="" className={classes.connect_room_form}>
                    <Input type="text" className={classes.input_id} placeholder={t('home.connectroom.input_id')} required/>
                    <Button className={classes.connect_room_button}>{t('home.connectroom.button')}</Button>
                </form>
            </div>
            <div className={classes.opened_room_block}></div>
        </div>
    );
}

export default Home;