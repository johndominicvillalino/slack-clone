import React, { useEffect, useState } from 'react'
import getAllUsersChannel from '../request/getAllUsersChannel'
import './channel.css'

const CreateChannel = () => {
  const [channelList, setChannelList] = useState([])
  const [active, setActive] = useState(false)

  useEffect(() => {
    const channels = async () => {
      const data = {
        accessToken: 'ELJAM_VwcxNmaGDwLSa6Lw',
        client: 'OrXtsZr8DaXTFP5URe1gMg',
        expiry: '1655204656',
        uid: 'user@example.com',
      }

      const fetchChannels = await getAllUsersChannel(data)
      setChannelList(fetchChannels.data)
    }

    channels()
  }, [])

  function openChannelOptions() {}

  return (
    <div className="channels">
      <div className="channelsPanel">
        <ul>
          Channels
          {channelList.map((channel, index) => (
            <li key={index}>#&nbsp;&nbsp;{channel.name}</li>
          ))}
        </ul>
        <div className="addChannels">
          <button onClick={openChannelOptions}>
            <p>+ Add Channels</p>
          </button>
          {active && (
            <div className="channelOptions">
              <button>Create a new channel</button>
              <button>Browse all channels</button>
            </div>
          )}
        </div>
      </div>
      <div className="channelMessageContainer"></div>
    </div>
  )
}

export default CreateChannel
