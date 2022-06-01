// import React, { useEffect, useState } from 'react'
// import CreateForm from './CreateFormChannel'
// import './temporary.css'

// const AddNewChannel = () => {
//   const [channelList, setChannelList] = useState([])
//   const [active, setActive] = useState(false)
//   const [isFormActive, setIsFormActive] = useState(false)

//   // BUTTONS
//   function viewChannelOptions() {
//     active ? setActive(false) : setActive(true)
//     setIsFormActive(false)
//   }

//   function viewCreateForm() {
//     setIsFormActive(true)
//     setActive(false)
//   }
//   // BUTTONS END

//   //API
//   useEffect(() => {
//     async function FetchData() {
//       var myHeaders = new Headers()
//       myHeaders.append('access-token', 'RKB9T3XP53hRY_9f6JZ6lA')
//       myHeaders.append('client', 'ghewDFLOrwJEUKwjX7Yg7w')
//       myHeaders.append('expiry', '1655104916')
//       myHeaders.append('uid', 'user@example.com')
//       myHeaders.append('Content-type', 'Application/json')

//       var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow',
//       }

//       const response = await fetch(
//         'http://206.189.91.54//api/v1/channels',
//         requestOptions
//       )
//       const data = await response.json()
//       const value = data.data
//       setChannelList(value)
//     }
//     FetchData()
//   }, [])

//   return (
//     <div>
//       {channelList.map((channel, index) => (
//         <li key={index}>{channel.name}</li>
//       ))}
//       <button onClick={viewChannelOptions}>Add channels</button>
//       {active && (
//         <>
//           <button onClick={viewCreateForm}>Create a new channel</button>
//           <button>Browse all channel</button>
//         </>
//       )}
//       {isFormActive && (
//         <CreateForm setIsFormActive={setIsFormActive} setActive={setActive} />
//       )}
//     </div>
//   )
// }

// export default AddNewChannel
