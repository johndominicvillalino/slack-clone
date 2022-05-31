import { useEffect } from 'react'
import './App.css'
// import CreateChannel from './components/Create-new-channel/CreateChannel'
import MessageDirect from './components/MessageDirect/MessageDirect'
import retrieveMessage from './components/request/retrieveMessage'

function App() {
  // useEffect(() => {
  //   const test = async () => {
  //     const userInfo = {
  //       accessToken: 'XdA6FGRl6TjQcoRjCffznw',
  //       client: '-z3vCyLz4TRfYIFM6U3Xlg',
  //       expiry: '1655127591',
  //       uid: 'user@example.com',
  //       sender_id: 1,
  //       receiver_class: 'User',
  //       receiver_id: 1,
  //     }

  //     const data = await retrieveMessage(userInfo)
  //     console.log(data)
  //   }

  //   test()
  // }, [])

  return (
    <>
      {/* <CreateChannel /> */}
      {/* <MessageDirect></MessageDirect> */}
    </>
  )
}

export default App
