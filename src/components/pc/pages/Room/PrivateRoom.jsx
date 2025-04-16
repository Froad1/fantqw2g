import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../../assets/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import '../../../../assets/locales/config';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import classes from './Room.module.css';

import animationConfig from '/public/configs/animationConfig';
import { motion as m } from 'framer-motion';

const PrivateRoom = ({ children }) => {
    const { roomId } = useParams();
    const [roomInfo, setRoomInfo] = useState(null);
    const [passInput, setPassInput] = useState('');
    const [isPassError, setIsPassError] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchRoomInfo = async () => {
            const roomRef = doc(db, 'roomsInfo', roomId);
            const docSnap = await getDoc(roomRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setRoomInfo(data);

                if (!data.pass) {
                    setIsAuthorized(true);
                } else {
                    const cached = localStorage.getItem(`room-${roomId}`);
                    if (cached) {
                        const { password } = JSON.parse(cached);
                        if (btoa(password) === data.pass) {
                            setIsAuthorized(true);
                        }
                    }
                }
            }

            setLoading(false);
        };

        fetchRoomInfo();
    }, [roomId]);

    const checkPass = () => {
        if (btoa(passInput) === roomInfo.pass) {
            localStorage.setItem(`room-${roomId}`, JSON.stringify({ password: passInput }));
            setIsAuthorized(true);
        } else {
            setIsPassError(true);
            setTimeout(() => {
                setIsPassError(false);
            }, 3000);
        }
    };

    if (loading) return <div className={classes.room_container}>Loading...</div>;

    if (!isAuthorized) {
        return (
            <m.div
                className={classes.room_container}
                initial={{ opacity: animationConfig.main.initialOpacity }}
                animate={{ opacity: animationConfig.main.animateOpacity }}
                exit={{ opacity: animationConfig.main.exitOpacity }}
                transition={{ duration: animationConfig.main.transitionDuration, ease: animationConfig.main.easeEffect }}
            >
                <div>{t("room.private.title")}</div>
                {isPassError && 
                    <div className='error'>{t('room.private.password_error')}</div>
                }
                <Input value={passInput} onChange={e => setPassInput(e.target.value)} className={classes.secondary_inpt + ` ${classes.inpt}`} placeholder={t('room.private.password_inpt')}/>
                <Button onClick={() => checkPass()} primary={false}>{t("room.private.check_btn")}</Button>
            </m.div>
        );
    }

    return children;
};

export default PrivateRoom;
