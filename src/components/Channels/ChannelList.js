import React, { useState, useEffect } from 'react'
import getAllUsersChannel from '../request/getAllUsersChannel'
import './channel.css'
import {Link} from 'react-router-dom'
import Channeloptions from './Channeloptions'
import {connect} from 'react-redux'

function ChannelList({ user }) {

  const [channelList, setChannelList] = useState([])
  const [showChannel, setShowChannel] = useState(false)
  const [id, setId] = useState(undefined)

  useEffect(() => {
    const channels = async () => {

      if (Object.keys(user).length < 1) {
        return
      }
      setId(user.data.id)
      
      const { accessToken, client, expiry, uid } = user.headers
      const data = {
        accessToken,
        client,
        expiry,
        uid
      }

      try {
        const fetchChannels = await getAllUsersChannel(data)
        if (!fetchChannels.errors) {
          setChannelList(fetchChannels.data)
          setShowChannel(true)
        }
      } catch (err) {
        console.error(err.message)
      }

    }
    channels()
  }, [user])

  return (
    <div className="channelList">
      {showChannel && channelList.map((channel, index) => (
        <Link  to={`/${user.data.id}/channel/${channel.id}`} className="channels" key={index}>
          #&nbsp;&nbsp;{channel.name}
        </Link>
      ))}
      {
        !showChannel && <li>No Channels</li>
      }
      <Channeloptions id={id}></Channeloptions>
    </div>
  )
}

// const MapToStateProp = state => ({
//   user:state.user
// })

// export default connect(MapToStateProp)(ChannelList)
export default ChannelList
