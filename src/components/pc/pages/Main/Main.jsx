import classes from './Main.module.css'

import { motion as m } from 'framer-motion'

import animationConfig from '/public/configs/animationConfig';
import Button from '../../UI/Button/Button';
import { useState } from 'react';



function Main() {
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
                Дивіться Разом, Навіть Якщо Ви Далеко
            </m.div>
            <div className={classes.start_button}>
                <Button primary={false}>
                    Почати
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" strokeLinecap="round" strokeLinejoin="round"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> 
                </Button>
                {/* Почати */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg> */}
            </div>
        </m.main>
    )
}

export default Main