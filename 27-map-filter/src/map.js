import React, { useState } from 'react';

function Map() {


    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const [info, setInfo] = useState([
        {
            name: '코디',
            email: 'codi@gmail.com',
        },
        {
            name: '윤소희',
            email: 'yoonsohee@gmail.com'
        }
    ]);


    const addInfo = () => {
        const newInfo = info.concat({
            name: inputName,
            email: inputEmail,
        });

        setInfo(newInfo);
        setInputName('');
        setInputEmail('');
    };

    const addEnter = (e) => {
        if(e.key==='Enter'){
            const newInfo = info.concat({
                name: inputName,
                email: inputEmail,
            });

            setInfo(newInfo);
            setInputName('');
            setInputEmail('');
        }
    };





    return(
    <>

        <input type="text" placeholder='이름' value={inputName} onChange={(e)=>{setInputName(e.target.value)}}/>
        <input type="text" placeholder='이메일' value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)}} onKeyDown={addEnter} />

        <button onClick={addInfo}>등록</button>

        <ol>
        {info.map((value) => (
            <li key={value.name}>{value.name} : {value.email}</li>
        ))}
        </ol>


    </>
    )
}

export default Map;