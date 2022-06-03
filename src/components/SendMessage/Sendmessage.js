import './SendMessage.css'
import { useState } from 'react'
import sendMessage from '../request/sendMessage'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Sendmessage = ({ receiver, user }) => {

    let history = useHistory()

    const [textValue, setTextValue] = useState('')

    const handleChange = e => {
        const { value } = e.target
        setTextValue(value)
    }



    const handleSubmit = async e => {
        e.preventDefault()

        let receiverProcessed = receiver
        let receiver_class = 'User'
        if (receiver[0] === '#' || receiver[0] === '@') {
            receiverProcessed = receiverProcessed.substring(1)
        }

        if (receiver[0] === '#') {
            receiver_class = 'Channel'
        }


        const { accessToken, client, expiry, uid } = user.headers

        const userInfo = {
            accessToken,
            client,
            expiry,
            uid,
            message: textValue,
            receiver_class,
            receiver_id: receiverProcessed
        }

        try {

            await sendMessage(userInfo)

            if (receiver_class === 'User') {

                history.push(`/${user.data.id}/direct/${receiverProcessed}`)
            } else {
                history.push(`/${user.data.id}/channel/${receiverProcessed}`)
            }



        } catch (err) {
            console.error(err.message)
        }

    }

    return (
        <div className='send-form-container'>
            <form className='form-container'>
                <textarea onChange={handleChange} value={textValue} className='textarea-send' row={1} placeholder='Jot something down'></textarea>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

const MaptoStateProps = state => ({
    user: state.user
})

export default connect(MaptoStateProps)(Sendmessage)