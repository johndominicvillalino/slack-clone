import React, { useEffect, useState, useRef } from "react";
import {ReactComponent as SendLogo} from './images/send.svg'
import './CreateText.css'



const CreateText = () => {
  const inputRef = useRef();

  const [textScrollHeight, setTextScrollHeight] = useState("auto");
  const [message,setMessage] = useState('')
  const [sendClass, setSendClass] = useState('disable')
  const [sendClassSpan, setSendClassSpan] = useState('sendMessageBtnDisable')



  useEffect(() => {
    const currHeight = `${inputRef.current.scrollHeight}px`;
    setTextScrollHeight(currHeight);

    return () => {};
  }, [textScrollHeight]);


  useEffect(() => {

    if(message.length === 0) {
      setSendClass('disable')
      setSendClassSpan('sendMessageBtnDisable')
    } else {
      setSendClass('activate')
      setSendClassSpan('sendMessageBtn')
    }

  },[message])

 

  const onChangeHandler = (e) => {
    const height = `${e.target.scrollHeight}px`;
    const {value} = e.target
    setMessage(value)
    setTextScrollHeight(height);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(message.length < 1) {
      return
    }
    console.log(message)
    // const test = await sendMessage();
  };

  return (
    <>
      <div className='messageDirectContainer' >
        <div className="topOptions">
        </div>
        <form>
         <textarea
            className="messageText"
            placeholder="Jot something down"
            rows={1}
            style={{
              height: textScrollHeight,
            }}
            value={message}
            onChange={onChangeHandler}
            ref={inputRef}
          ></textarea> 
    
          <span type='submit' onClick={handleSubmit} className={sendClassSpan}>
             <SendLogo className={sendClass}></SendLogo>
          </span>
        </form>
      </div>
    </>
  );
};

export default CreateText;
