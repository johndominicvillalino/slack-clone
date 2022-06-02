import {useState} from 'react'
import sendMessage from '../request/sendMessage'


const SendMessageChannel = ({channelId,user}) => {

    const [textValue, setTextValue] = useState('')

    const handleChange = e => {
        const { value } = e.target
        setTextValue(value)
    }

    

    const handleSubmit = async e => {
        e.preventDefault()

        const { accessToken, client, expiry, uid } = user.headers

        const userInfo = {
            accessToken,
            client,
            expiry,
            uid,
            message: textValue,
            receiver_class:'Channel',
            receiver_id:channelId
        }

    console.log(userInfo)

        try {

            const send = await sendMessage(userInfo)
            if(send) {
                console.log(send)
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

export default SendMessageChannel