import React, {useState} from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState('');
    const [historyState, setHistoryState] = useState([]);

    return <div>
        <input onChange={(e) => {
        setInputText(e.target.value);
        setHistoryState([...historyState, e.target.value]);
    }}
    placeholder="Entas something" /><br/>
    {inputText}
    <hr/><br/>
    <ul>
        {historyState.map((el) => {
            return <div>
                {el}
            </div>
        })}
    </ul>
    </div>
};



export default InputElement;