import React, {useState } from 'react'
import './NewMessage.css'
import loginFunc from '../request/login'
import To from './To'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Messages from './Messages'

const NewMessage = () => {

    const [receiver,setReceiver] = useState('')

     

    return (
        <>
            <div className='new-message-container'>
                <div style={{borderBottom:'1px solid #cecccc',padding:'9px'}}>
                    <h2>New Message</h2>
                </div>
                <To setReceiver={setReceiver}></To>
                <Messages receiver={receiver}></Messages>
            </div>
        </>
    )
}

NewMessage.propTypes = {
    loginFunc: PropTypes.func.isRequired
}


export default connect(null,{loginFunc})(NewMessage)