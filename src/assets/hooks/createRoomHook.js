import { collection, doc, setDoc } from 'firebase/firestore';


import { db } from '../firebase';


function createRoomHook(url) {

    const roomRef = doc(collection(db, 'rooms'));
    const roomInfoRef = doc(collection(db, 'roomsInfo'), roomRef.id);
    const roomData = {
        url: url,
        timing: 0,
        play: false,
        users: [],
    };
    const roomInfoData = {
        name: url,
    };
    setDoc(roomRef, roomData)
        .then(() => {
            console.log("Room created successfully");
            console.log("Room ID: ", roomRef.id);
        })
        .catch((error) => {
            console.error("Error creating room: ", error);
        });
    setDoc(roomInfoRef, roomInfoData)
        .then(() => {
            console.log("Room info created successfully");
        })
        .catch((error) => {
            console.error("Error creating room info: ", error);
        });

}
export default createRoomHook