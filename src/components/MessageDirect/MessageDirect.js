import React, { useEffect } from 'react'
import MessageCointaer from '../layouts/MessageContainer/MessageCointaer'
import login from '../request/login'
import { connect } from 'react-redux'

const MessageDirect = ({login}) => {

 
  return ( 
    <>
    <MessageCointaer>MessageDirect</MessageCointaer>
    </>
  )
}



export default connect(null, {login})(MessageDirect);