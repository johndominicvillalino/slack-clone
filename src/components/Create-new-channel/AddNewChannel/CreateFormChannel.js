// import React, { useEffect, useState } from 'react'
// import createChannelMembers from '../../request/createChannelMembers'
// import './temporary.css'

// const CreateForm = ({ setIsFormActive, setActive }) => {
//   const [channelName, setChannelName] = useState({
//     name: '',
//   })

//   function hideCreateForm() {
//     setIsFormActive(false)
//     setActive(false)
//   }

//   // desc: send the userInput to create a channel
//   function createChannel(event) {
//     event.preventDefault()

//     // @required [access-token, client, expiry, uid]

//     setChannelName(() => ({
//       name: '',
//     }))
//   }

//   function channelInput(event) {
//     const { name, value } = event.target
//     setChannelName((channels) => ({
//       ...channels,
//       [name]: value,
//     }))
//   }

//   return (
//     <div className="createForm">
//       <h1>Create a new channel</h1>
//       <button onClick={hideCreateForm}>X</button>
//       <form onSubmit={createChannel}>
//         <input
//           onChange={channelInput}
//           type="text"
//           name="name"
//           value={channelName.name}
//         ></input>
//         <button>Create</button>
//       </form>
//     </div>
//   )
// }

// export default CreateForm
