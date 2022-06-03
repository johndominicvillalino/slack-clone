import React, {useState } from 'react'
import './NewMessage.css'
import loginFunc from '../request/login'
import To from './To'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Messages from './Messages'
import Sendmessage from '../SendMessage/Sendmessage'

const NewMessage = ({user}) => {

    const [receiver,setReceiver] = useState('')

     

    return (
        <>
            <div className='new-message-container'>
                <div style={{borderBottom:'1px solid #cecccc',padding:'9px'}}>
                    <h2>New Message</h2>
                </div>
                <To id={user.data.id} setReceiver={setReceiver}></To>
                <Messages  receiver={receiver}></Messages>
                <Sendmessage receiver={receiver} ></Sendmessage>
            </div>
        </>
    )
}

NewMessage.propTypes = {
    loginFunc: PropTypes.func.isRequired
}

const MaptoStateProp = state => ({
    user: state.user
})


export default connect(MaptoStateProp,{loginFunc})(NewMessage)