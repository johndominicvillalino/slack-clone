import React, { useEffect } from 'react'
import MessageCointaer from '../layouts/MessageContainer/MessageCointaer'
import { sendMessage } from '../request/sendMessage'

const MessageDirect = () => {


  const handleSubmit = async e => {
    
    e.preventDefault()
    const test = await sendMessage()


  } 

  return ( 
    <>
    <MessageCointaer><button onClick={handleSubmit}>
      submit
      </button></MessageCointaer>
    </>
  )
}



export default MessageDirect