import register from '../request/register';
import { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';

const Register = () => {
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
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerNow = await register(registerDetails)
    const user = JSON.stringify(registerNow)
    localStorage.setItem("currentUser", user)
    alert("Successfully registered!");
  }

  return (
    <>
      <div className='register-container' >

        <img src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" alt="slack logo" height="42" /> <br /> <br />
        <div className="sign-in-heading">First, enter your email</div> <br />
        <div className="sign-in-sub-heading">
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
            className="email-input"
          /> <br /> <br />

          <input
            name="password"
            type="password"
            value={registerDetails.password}
            onChange={handleChange}
            className="password-input"
            placeholder='Slackpassword123'
          /> <br /> <br />

          <input
            name="password_confirmation"
            type="password"
            value={registerDetails.password_confirmation}
            onChange={handleChange}
            className="password_confirmation-input"
            placeholder='Slackpassword123'
          /> <br /> <br />

          <button
            type='submit'
            onClick={handleSubmit}
            className="register-submit">Sign up</button>
        </form>
      </div>
    </>

  )
}

export default Register;