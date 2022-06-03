import React, { useEffect, useState,useRef } from 'react'
import retrieveMessage from '../request/retrieveMessage'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Messages.css'
import { v4 as uuidv4 } from 'uuid';

const Messages = ({ user, receiver }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [allMessages, setAllMessages] = useState([])

    const messageBody = useRef()

    useEffect(() => {


        if (Object.keys(user).length < 1) {
            return
        }

        setIsLoading(true)
        let receverClass = 'User'

        let receiverProcessed = receiver;

        if (receiver[0] === '#') {
            receverClass = 'Channel'
        }

        if (receiver[0] === '#' || receiver[0] === '@') {
            receiverProcessed = receiverProcessed.substring(1)
        }

        const sender_id = user.data.id

        const { accessToken,
            client,
            expiry,
            uid } = user.headers

        const userInfo = {
            accessToken,
            client,
            expiry,
            uid,
            sender_id,
            receiver_class: receverClass,
            receiver_id: receiverProcessed,
        }

        const getMessage = async () => {
            const messages = await retrieveMessage(userInfo)
            setIsLoading(false)
            if (!messages.errors) {
                if (messages.data.length > 0) {
                    setAllMessages(messages.data)
                } 
            } else {
                setAllMessages([])
            }

        }
        const timeOut = setTimeout(getMessage, 500)
        return () => {
            clearTimeout(timeOut)
          
        }
    }, [receiver,user])

    useEffect(() => {

        const height = messageBody.current.scrollHeight
        messageBody.current.scrollTop = height
        

    },[allMessages])


    let messages = <div></div>

    if(allMessages.length > 0) {
        messages = allMessages.map(e => {
                    
            let month = new Date(e.created_at).getMonth() + 1
            let year = new Date(e.created_at).getFullYear()
            let days = new Date(e.created_at).getDate()
            let hours = new Date(e.created_at).getHours()
            let AMPM = 'AM'
            if(hours > 12) {
                AMPM = 'PM'
                hours = hours - 12;
            }
            if(hours < 10) {
                hours = `0${hours}`
            }
            let minutes = new Date(e.created_at).getMinutes()

            if(minutes < 10) {
                minutes = `0${minutes}`
            }

            return <div key={uuidv4()} className='single-message'>
                <div>
                    <div>{e.sender.id ? e.sender.id : ''}</div>
                    <div>{`${days}-${month}-${year} - ${hours}:${minutes} ${AMPM}`}</div>
                </div>
                <div>
                    {e.body}
                </div>
            </div>
         
        })
    }


    return (
        <>
            <div className='message-container' ref={messageBody} style={{ScrollTop:500}}>
      
                {/* {!isLoading && messages}  */}
                
                </div>
        </>
    )
}


Messages.propTypes = {
    user: PropTypes.object.isRequired
}

const MaptoStateProps = state => ({
    user: state.user
})

export default connect(MaptoStateProps, {})(Messages)
