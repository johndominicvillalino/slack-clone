import React, { useEffect } from 'react'
import './NewMessage.css'
import loginFunc from '../request/login'
import retrieveMessageFunc from '../request/retrieveMessage'
import To from './To'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const NewMessage = ({loginFunc}) => {


    useEffect(() => {

        const loginNow = async () => {

            try {
                const loginRes = await loginFunc({
                    email: 'usaaa2@example.com',
                    password: 12345678
                })
                if (loginRes) {
                    // console.log(loginRes)
                }
            } catch (err) {
                console.error(err.message)
            }

        }
        loginNow()
    }, [])

    return (
        <>
            <div className='new-message-container'>
                <div style={{borderBottom:'1px solid #cecccc',padding:'9px'}}>
                    <h2>New Message</h2>
                </div>
                <To></To>
            </div>
        </>
    )
}

NewMessage.propTypes = {
    loginFunc: PropTypes.func.isRequired
}


export default connect(null,{loginFunc})(NewMessage)