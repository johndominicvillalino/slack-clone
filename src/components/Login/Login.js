import login from '../request/login';
import {useState} from 'react'
import "./Login.css";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        email:"", 
        password:"",
    })
  
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginDetails(prevData => {
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginNow = await login(loginDetails)
        if(loginNow) {
            const user = JSON.stringify(loginNow);
            localStorage.setItem("currentUser", user);
            alert("Successfully logged in!")
        }
    }
  return (
    < >
    {isLogin ? (
       <>
       <h1>hello</h1>
       </>
    ): (
      <>
      <img src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" alt="slack logo" height="42" /> <br /> <br /> 
      <div className="sign-in-heading">Sign in to Slack</div> <br />
      <div className="sign-in-sub-heading">
      We suggest using the <strong>email address you use at work.</strong>
      </div> <br />
      <div className="header-sidelink-container">
      <div className="header-sidelink">Already have Slack?</div>
      <div className = "header-sidelink-link">Sign in to your account</div>
      </div>
      <form>
     <input
            name="email"
              type="email"
              value={loginDetails.email}
              onChange={handleChange}
              placeholder ="name@work-email.com"
              className='email-input'
            /> <br /> <br />

            <input
            name="password"
              type="password"
              value={loginDetails.password}
              onChange={handleChange}
              className="password-input"
              placeholder='Slackpassword123'
            /> <br /> <br />
            
            <button 
            type='submit'
            onClick={handleSubmit}
            className="login-submit">Sign In with Email</button>
      </form>
      </>
    )}
    </>
  )
}

export default Login;