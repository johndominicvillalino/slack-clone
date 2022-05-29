
import './App.css';
// import MessageDirect from './components/MessageDirect/MessageDirect';
import {useState} from "react";


function App() {

  //LOGIN
//   const [isLogin, setIsLogin] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//  const login = (event) => {
//     event.preventDefault();

//     let data = {
//       email: email,
//       password: password,
//   };

//   let requestOptions = {
//       method: 'POST',
//       body: JSON.stringify(data),
//       redirect: 'follow',
//       headers: {
//           'Content-Type': 'Application/json'
//       }

//     };
    
//   fetch("http://206.189.91.54//api/v1/auth/sign_in", requestOptions)
//   .then(response => response.text())
//   .then(result => {
//       if(
//           result.data !== undefined
//       ) {
//           setIsLogin(true);
//       } else {
//           setIsLogin(true);
//       }
//       console.log(result);
//   })
//   .catch((error) => {
//       console.log('error', error);
//       setIsLogin(true);
//   });
// }

//REGISTER 

const [isRegister, setIsRegister] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");

const register = (event) => {
  event.preventDefault(); 

  let data = {
    email: email,
    password: password, 
    password_confirmation: passwordConfirmation,
  };

  let requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    redirect: 'follow',
    headers: {
        'Content-Type': 'Application/json'
    }
  };

  fetch("http://206.189.91.54//api/v1/auth/", requestOptions)
  .then(response => response.text())
  .then(result => {
    if(
        result.status === "success"
    ) {
        setIsRegister(true);
        console.log(result);
    } else{
        setIsRegister(false);
        console.log(result);
    } 
})
.catch((error) => {
    console.log('error', error);
    setIsRegister(false);
});
}

  return (
    // < >
    // {isLogin ? (
    //    <>
    //    <h1>hello</h1>
    //    </>
    // ): (
    //   <>
    //   <form onSubmit={login}>
    //     <label htmlFor="email">Email:</label> <br /> 
    //   <input
    //           type="text"
    //           value={email}
    //           onChange={(event) => setEmail(event.target.value)}
    //         /> <br />

    //         <label htmlFor="password">Password:</label> <br />
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //         />
    //         <input type="submit" value="Login" />
    //   </form>
    //   </>
    // )}
    
    // </>

    <>
    {isRegister ? (
      <> 
      <h1>Register</h1>
      </>
    ) : (
      <>
      <form onSubmit={register}>
           <label htmlFor="email">Email:</label> <br /> 
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            /> <br />

            <label htmlFor="password">Password:</label> <br />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            /> <br />

            <label htmlFor="passwordConfirmation">Confirm Password</label> <br/>
            <input 
            type="password"
            value={passwordConfirmation} 
            onChange={(event) => setPasswordConfirmation(event.target.value)}/> <br />
            <input type="submit" value="Register" />
      </form>
      </>
    )}
    </>
  );
}

export default App;


