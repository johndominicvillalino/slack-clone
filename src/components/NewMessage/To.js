import {useEffect, useState} from 'react'
import './To.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const To = ({userInfo}) => {

    const [senderInput,setSenderInput] = useState('')
    const [loginData,setLoginData] = useState('')
    

    useEffect(() => {
        setLoginData(userInfo)
    },[userInfo])

    const handleChange = e => {
        setSenderInput(e.target.value)
        console.log(loginData.action)

    }
    
    return (
        <>
            <div style={containerStyle}>
                <h3>To</h3>
                <input onChange={handleChange} value={senderInput} placeholder='#Channel Name, @id or somebody@example.com' className='search-sender' type="text" />
            </div>
        </>
    )
}

To.propTypes = {
    userInfo : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    userInfo: state.user
})
  

export default connect(mapStateToProps)(To)

const containerStyle = {
    borderBottom:'1px solid #cecccc',
    padding:'15px 9px',
    display:'flex',
    gap: '20px'
}


  
