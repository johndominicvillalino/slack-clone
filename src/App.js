import './App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './components/layouts/Header/Header'
import styled from 'styled-components'
import SideBarNav from './components/layouts/SideBarNav/SideBarNav'
import NewMessage from './components/NewMessage/NewMessage'

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
      <Header />
      <AppBody>
        <SideBarNav />
        <Switch>
          <Route path="/" exact>
            {/* Main Chat Here */}
            asdasdas
          </Route>
          <Route path="/test" exact>
            <NewMessage></NewMessage>
          </Route>
        </Switch>
      </AppBody>
    </>
  )
}

export default App

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
