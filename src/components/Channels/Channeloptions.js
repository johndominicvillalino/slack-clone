import React, { useState } from 'react'
import './channel.css'

function Channeloptions({ setActive, setCreate }) {
  function viewCreateChannel() {
    setActive(false)
    setCreate(true)
  }

  return (
    <div className="channelOptions">
      <button onClick={viewCreateChannel}>Create a new channel</button>
      <button>Browse all channels</button>
    </div>
  )
}

export default Channeloptions
