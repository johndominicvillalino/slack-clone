import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ChannelList from "../../Channels/ChannelList";
import ChannelContainer from "../../Channels/ChannelContainer";
import DMList from "../../DirectMessages/DMList";
import force from "../../actions/force";

function SideBarNav({ user, force }) {
  const [linkicon, setLinkIcon] = useState(false);

  useEffect(() => {
    if (Object.keys(user).length < 1) {
      return
    }

    setLinkIcon(true)
  }, [user])


  useEffect(() => {
    const forceUpdate = async () => {

      try {
        await force()

      } catch (err) {
        console.error(err.message)
      }

    }

    const id = setInterval(forceUpdate, 1000)

    return () => { clearInterval(id) }
  })


  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Avion School</h2>
        </SideBarInfo>
        {linkicon && (
          <Link
            to={`/${user.data.id}/new-message/`}
            style={{
              backgroundColor: '#fff',
              padding: '5px',
              borderRadius: '50%',
            }}
          >
            <CreateIcon />
          </Link>
        )}
      </SideBarHeader>
      <ChannelContainer>
        <ChannelList user={user}></ChannelList>
      </ChannelContainer>

  
      <DMContainer>
        <DMList user={user}></DMList>
      </DMContainer>
    </SideBarContainer>
  )
}

const MapToStateProp = (state) => ({
  user: state.user,
})

export default connect(MapToStateProp,{force})(SideBarNav);

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
