import React, { useState, useEffect } from 'react'
import getAllUsersChannel from '../request/getAllUsersChannel'

function ChannelList() {
  const [channelList, setChannelList] = useState([])

  useEffect(() => {
    const channels = async () => {
      const data = {
        accessToken: 'TP72QNZ9HCPIEqSc--lbUQ',
        client: 'IsjNr3Fp35xmNnApukyIPg',
        expiry: '1655208108',
        uid: 'user@example.com',
      }

      const fetchChannels = await getAllUsersChannel(data)
      setChannelList(fetchChannels.data)
    }

    channels()
  }, [])

  return (
    <div>
      {channelList.map((channel, index) => (
        <li key={index}>#&nbsp;&nbsp;{channel.name}</li>
      ))}
    </div>
  )
}

export default ChannelList
