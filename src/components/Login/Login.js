import login from '../request/login';
import {useState} from 'react'

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
      <form>
        <label htmlFor="email">Email:</label> <br /> 
     <input
            name="email"
              type="text"
              value={loginDetails.email}
              onChange={handleChange}
            /> <br />

            <label htmlFor="password">Password:</label> <br />
            <input
            name="password"
              type="password"
              value={loginDetails.password}
              onChange={handleChange}
            />
            <button 
            type='submit'
            onClick={handleSubmit}>Submit</button>
      </form>
      </>
    )}
    
    </>
  )
}

export default Login;