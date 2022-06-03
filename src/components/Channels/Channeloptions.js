import React, { useState } from 'react'
import './channel.css'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import styled from 'styled-components'

function Channeloptions({ id }) {
  return (
    <div className="addChannel">
      <Link to={`/${id}/create-channel`}>
        <Icon>
          <AddCircleIcon />
        </Icon>
      </Link>
      <p className="addChannelText">Add channels</p>
    </div>
  )
}

const Icon = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    //Global ClassName in MUI
    color: blue;
  }
`

export default Channeloptions
