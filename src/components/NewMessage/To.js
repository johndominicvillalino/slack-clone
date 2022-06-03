import {useState,useEffect} from 'react'
import './To.css'
import { useHistory } from 'react-router-dom'


const To = ({setReceiver,id}) => {

    let history = useHistory()

    const [senderInput,setSenderInput] = useState('')

    const handleChange = e => {
        setSenderInput(e.target.value)
        setReceiver(e.target.value)

    }
    
    return (

            <div style={containerStyle}>
                <h3>To</h3>
                <input onChange={handleChange} value={senderInput} placeholder='#ChannelId or @id' className='search-sender' type="text" />
            </div>
       
    )
}


export default To

const containerStyle = {
    borderBottom:'1px solid #cecccc',
    padding:'15px 9px',
    display:'flex',
    gap: '20px'
}


  
