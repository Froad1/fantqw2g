import { motion as m } from 'framer-motion'
import animationConfig from '/public/configs/animationConfig';

import classes from './Button.module.css'

const Button = ({primary, children, ...options}) =>{
    return(
        <m.button 
            type='button' {...options} className={primary ? classes.primary_btn + ` ${classes.btn}` : classes.secondary_btn + ` ${classes.btn}`}
            whileHover={animationConfig.hover}
            layout
            transition={animationConfig.move}
        >
            {children}
        </m.button>
    )
}

export default Button