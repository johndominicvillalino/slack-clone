import register from '../request/register';
import {useState} from 'react'


const Register = () => {
    const [isRegister, setIsRegister] = useState(false); 
    const [registerDetails, setRegisterDetails] =  useState({
        email:"",
        password:"",
        password_confirmation:"",
    })
    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterDetails(prevData => {
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerNow = await register(registerDetails)
        // JSON.stringify(registerNow);
        // const dateCreated = (registerNow.created_at);
        // const email = (registerNow.email);
        // const id = (registerNow.id);
        // user.push(dateCreated);
        // user.push(email);
        // user.push(id);
        const user = JSON.stringify(registerNow);
        localStorage.setItem("currentUser", user)
        alert("Successfully registered!");
        }
    
    return (
        < >
        {isRegister ? (
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
                  value={registerDetails.email}
                  onChange={handleChange}
                /> <br />
    
                <label htmlFor="password">Password:</label> <br />
                <input
                name="password"
                  type="password"
                  value={registerDetails.password}
                  onChange={handleChange}
                /> <br />

                <label htmlFor="password_confirmation">Confirm Password:</label> <br />
                <input
                name="password_confirmation"
                  type="password"
                  value={registerDetails.password_confirmation}
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
    
    export default Register;