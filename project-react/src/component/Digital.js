import React , { useState } from 'react';

const Digital = () => {

let time = new Date().toLocaleTimeString();

const [ctime, setsCtime] = useState(time);


const Updatetime = () => {
    time = new Date().toLocaleTimeString();
    setsCtime(time);
}


setInterval(Updatetime,1000);


    return (
        <>
        {time}
        </>
    );
 }

 export default Digital
