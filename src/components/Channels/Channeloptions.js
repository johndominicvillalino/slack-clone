import React, { useState } from 'react'
import './channel.css'
import {Link} from 'react-router-dom'

function Channeloptions({id}) {

  
  return (
    <div className="channelOptions">
      <Link to={`/${id}/create-channel`}>+</Link>
    </div>
  )
}

export default Channeloptions
