import registerFunc from '../request/register';
import { useState,useEffect } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import autoLoginFunc from '../actions/autoLogin';
import { useHistory } from 'react-router-dom';
import listofUsers from '../request/listofUsers';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Register = ({ registerFunc, autoLoginFunc }) => {
  const [isError, setIsError] = useState(false);
  let history = useHistory()


  useEffect(() => {

    let checkUser = window.localStorage.getItem('currentUser')
    checkUser = JSON.parse(checkUser)

    if (!checkUser) {
      return
    }
    const autoLogin = async () => {

      try {

        const userInfo = {
          accessToken: checkUser.headers.accessToken,
          client: checkUser.headers.client,
          expiry: checkUser.headers.expiry,
          uid: checkUser.headers.uid,
        }

        const allUsers = await listofUsers(userInfo)
  
          if (!allUsers.errors) {
        
           const test = await autoLoginFunc(checkUser)  
            history.push(`/${checkUser.data.id}/client`)
    
          }
        
      } catch (err) {
        console.error(err.message)
      }

    }
    autoLogin()
  }, [])

  const [isRegister, setIsRegister] = useState(false);
  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterDetails(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
    setIsError(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {


      const registerNow = await registerFunc(registerDetails)
 
      if (!registerNow.errors) {

        const user = JSON.stringify(registerNow)
        localStorage.setItem("currentUser", user)
        console.log(registerNow)
        await autoLoginFunc(registerNow)
  
        history.push(`/${registerNow.data.id}/client`)

      } else {
        setIsError(true);
      }

    } catch (error) {
    }
    setRegisterDetails({
      email:"",
      password:"",
      password_confirmation:"",
    }) 
  }

  return (
    <>
      <div className='register-container' >

        <img src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" alt="slack logo" height="42" /> <br /> <br />
        <div className="register-heading">First, enter your email</div> <br />
        <div className="register-sub-heading">
          We suggest using the <strong>email address you use at work.</strong>
        </div> <br />
        <div className="header-sidelink-container">
          <div className="header-sidelink">Already has an account?</div>
          <Link to='/' className="header-sidelink-link">Sign In</Link>
        </div>
        <form>
          <input
            name="email"
            type="text"
            value={registerDetails.email}
            onChange={handleChange}
            placeholder="name@work-email.com"
            className="email-input-register"
          /> <br /> <br />

          <input
            name="password"
            type="password"
            value={registerDetails.password}
            onChange={handleChange}
            className="password-input-register"
            placeholder='Slackpassword123'
          /> <br /> <br />

          <input
            name="password_confirmation"
            type="password"
            value={registerDetails.password_confirmation}
            onChange={handleChange}
            className="password_confirmation-input-register"
            placeholder='Slackpassword123'
          /> <br /> <br />

          <button
            type='submit'
            onClick={handleSubmit}
            className="register-submit">Sign up</button>
        </form>
        <div className="alert-container">
    { isError && <Stack sx={{ width: '100%' }} spacing={2}> 
      <Alert severity="error">Wrong credentials! Please try again!</Alert>
      </Stack> }
      </div> 
      </div>
    </>

  )
}


export default connect(null, { registerFunc, autoLoginFunc })(Register);