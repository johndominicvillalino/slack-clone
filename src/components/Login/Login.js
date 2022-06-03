import login from '../request/login';
import { useState, useEffect } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import listofUsers from '../request/listofUsers'
import autoLoginFunc from "../actions/autoLogin";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import force from '../actions/force';


const Login = ({ login,autoLoginFunc }) => {
const [isError, setIsError] = useState(false);
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

          await autoLoginFunc(checkUser)
          history.push(`/${checkUser.data.id}/client`)



        }

      } catch (err) {
        console.error(err.message)
      }


    }
    autoLogin()
  }, [])

 
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  })

  let history = useHistory()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails(prevData => {
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


      const loginNow = await login(loginDetails)


      if (!loginNow.errors) {
        const user = JSON.stringify(loginNow)
        localStorage.setItem("currentUser", user);
        history.push(`/${loginNow.data.id}/client`)
        
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error(err.message)
    }
    setLoginDetails({
      email:"",
      password:"",
    }) 
  }
  return (
    < >
      <div className='login-container'>
        <img src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" alt="slack logo" height="42" /> <br /> <br />
        <div className="login-heading">Sign in to Slack</div> <br />

        <div className="header-sidelink-container">
          <div className="header-sidelink">No Account Yet?</div>
          <Link to='/register' className="header-sidelink-link">Sign up</Link>
        </div>
        <form>
          <input
            name="email"
            type="email"
            value={loginDetails.email}
            onChange={handleChange}
            placeholder="name@work-email.com"
            className='email-input-login'
          /> <br /> <br />

          <input
            name="password"
            type="password"
            value={loginDetails.password}
            onChange={handleChange}
            className="password-input-login"
            placeholder='Slackpassword123'
          /> <br /> <br />

          <button   
            type='submit'
            onClick={handleSubmit}
            className="login-submit">Sign In with Email</button>
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



export default connect(null, { login, autoLoginFunc, force })(Login);