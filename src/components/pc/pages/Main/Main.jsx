import classes from './Main.module.css'

import { motion as m } from 'framer-motion'

import animationConfig from '/public/configs/animationConfig';
import Button from '../../UI/Button/Button';
import { useState } from 'react';

import {useTranslation } from 'react-i18next';
import '../../../../assets/locales/config'



function Main() {
    const {t} = useTranslation();

    // function extractMovieTitle(url) {
    //     // Регулярний вираз для знаходження назви фільму в URL
    //     const regex = /\/(?:new4|films)\/([^\/]+?)_\d{4}/i;
    //     const match = url.match(regex);
        
    //     if (match && match[1]) {
    //         // Заміна підкреслень на пробіли та перетворення на правильний регістр слів
    //         const title = match[1].split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    //         return title;
    //     }
        
    //     return null; // Повертаємо null, якщо не знайдено назву фільму
    // }
    
    // // Приклади використання
    // console.log(extractMovieTitle("https://ashdi.vip/video27/1/new4/shutter_island_2010_bdrip_1080p_4xukr_eng_hurtom_4060/hls/BKuOlHWKkftdnAzhB4kj/index.m3u8")); // Виведе: Shutter Island
    // console.log(extractMovieTitle("https://ashdi.vip/video29/2/films/interstellar_2014_bdrip_1080p_ukr_eng_hurtom_3205/hls/BKuOlHWKkftdnAzhB4kj/index.m3u8")); // Виведе: Interstellar
    // console.log(extractMovieTitle("https://ashdi.vip/video10/1/new4/home_2015_bdrip_1080p_h.265_ukr_eng_hurtom_6535/hls/BKuOlHWKkftdnAzhB4st/index.m3u8")); // Виведе: Interstellar

    
    return(
        <m.main
            initial={{opacity:animationConfig.main.initialOpacity, y: 120}}
            animate={{opacity:animationConfig.main.animateOpacity, y: 0}}
            exit={{opacity:animationConfig.main.exitOpacity, y: 120}}
            transition={{duration:animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect}}
        >
            <m.div 
                className={classes.description}
                layout
            >
                {t('main.main_description')}
            </m.div>
            <div className={classes.start_button}>
                <Button primary={false}>
                    {t('main.start_button')}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" strokeLinecap="round" strokeLinejoin="round"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> 
                </Button>
                {/* Почати */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg> */}
            </div>
        </m.main>
    )
}

export default Main