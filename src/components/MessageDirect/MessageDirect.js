import React, { useEffect } from 'react'
import MessageCointaer from '../layouts/MessageContainer/MessageCointaer'
import login from '../request/login'
import { connect } from 'react-redux'

const MessageDirect = ({login}) => {

  useEffect(() => {

    async function test () {
  
      await login({
        email:'usaaa2@example.com',
        password: '12345678'
      })
    }

    test()

  },[])

 
  return ( 
    <>
    <MessageCointaer>MessageDirect</MessageCointaer>
    </>
  )
}


export default connect(null, {login})(MessageDirect);