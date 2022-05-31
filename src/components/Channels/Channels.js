import React, { useEffect, useState } from 'react'
import ChannelList from './ChannelList'
import Channeloptions from './Channeloptions'
import './channel.css'

const CreateChannel = () => {
  const [active, setActive] = useState(false)

  function viewOptions() {
    active ? setActive(false) : setActive(true)
  }

  return (
    <div className="channels">
      <div className="channelsPanel">
        <ul>
          Channels
          <ChannelList />
        </ul>
        <div className="addChannels">
          <p onClick={viewOptions}>+ Add Channels</p>
          {active && (
            <div className="channelOptions">
              <Channeloptions />
            </div>
          )}
        </div>
      </div>
      <div className="channelMessageContainer"></div>
    </div>
  )
}

export default CreateChannel
