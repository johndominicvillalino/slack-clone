import React, { useState, useEffect } from 'react'
import getAllUsersChannel from '../request/getAllUsersChannel'
import './channel.css'

function ChannelList() {
  const [channelList, setChannelList] = useState([])

  useEffect(() => {
    const channels = async () => {
      const data = {
        accessToken: '7tREOoeLVJRq4XNO9IvkIQ',
        client: 'BN6ANeIefNoE8NHXldToIw',
        expiry: '1655277946',
        uid: 'user@example.com',
      }

      const fetchChannels = await getAllUsersChannel(data)
      setChannelList(fetchChannels.data)
    }
    channels()
  }, [])

  return (
    <div className="channelList">
      {channelList.map((channel, index) => (
        <li className="channels" key={index}>
          #&nbsp;&nbsp;{channel.name}
        </li>
      ))}
    </div>
  )
}

export default ChannelList
