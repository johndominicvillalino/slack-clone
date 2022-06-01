import React, { useEffect, useState } from 'react'
import ChannelList from './ChannelList'
import Channeloptions from './Channeloptions'
import CreateChannel from './CreateChannel'
import './channel.css'

const Channel = () => {
  const [active, setActive] = useState(false)
  const [create, setCreate] = useState(false)

  function viewOptions() {
    active ? setActive(false) : setActive(true)
    setCreate(false)
  }

  return (
    <div className="channels">
      <ul>
        Channels
        <ChannelList />
      </ul>
      <button onClick={viewOptions} className="addChannel">
        (+) Add Channel
      </button>
      {active && <Channeloptions setCreate={setCreate} setActive={setActive} />}

      {create && <CreateChannel setCreate={setCreate} />}
    </div>
  )
}

export default Channel
