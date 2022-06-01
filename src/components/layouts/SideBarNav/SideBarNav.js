import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CreateIcon from '@mui/icons-material/Create'
import { Link } from 'react-router-dom'
import ChannelContainer from '../../Channels/ChannelContainer'
import Channels from '../../Channels/Channels'

function SideBarNav() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Avion School</h2>
        </SideBarInfo>
        <Link
          to="/new-message"
          style={{
            backgroundColor: '#fff',
            padding: '5px',
            borderRadius: '50%',
          }}
        >
          <CreateIcon />
        </Link>
      </SideBarHeader>
      <ChannelContainer>
        <Channels />
      </ChannelContainer>
    </SideBarContainer>
  )
}

export default SideBarNav

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  min-width: 300px;
  max-width: 300px;
  margin-top: 60px;
`

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 32px;
    background-color: white;
    border-radius: 999px;
  }
`

const SideBarInfo = styled.div`
  flex: 1;
`
