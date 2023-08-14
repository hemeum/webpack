import React, {useState} from "react";

interface HelloInterface {
    name : string
};

export default function Hello({ name } : HelloInterface) {
    const [text, setText] = useState("");
    const [abc, setAbc] = useState('');
    return <>
        <input type="text" onChange={(e) => {setText(e.target.value)}} />
        <button type="button" onClick={()=>{
            setAbc(text);
            setText('');
        }}>눌러바</button>
        <p><b>헬로</b>, {name}</p>
        <p>{abc}</p>
    </>
}
