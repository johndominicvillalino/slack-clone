import React from 'react'
import './MessageContainer.css'

const MessageCointaer = (props) => {
  return (
    <>
        <div className='MessageCointaner'>
            {props.children}
        </div>
    </>
  )
}

export default MessageCointaer