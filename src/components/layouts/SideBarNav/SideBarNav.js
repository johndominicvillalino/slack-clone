import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ChannelList from "../../Channels/ChannelList";
import ChannelContainer from "../../Channels/ChannelContainer";
import DMList from "../../DirectMessages/DMList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import force from "../../actions/force";

function SideBarNav({ user,force }) {
  const [linkicon, setLinkIcon] = useState(false);

  useEffect(() => {
    if (Object.keys(user).length < 1) {
      return;
    }

    setLinkIcon(true);
  }, [user]);


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
    <SideBarContainer md={{ backgroundColor: "red" }}>
      <SideBarHeader>
        <SideBarInfo>
          <h2>
            Avion School
            <KeyboardArrowDownIcon />
          </h2>
        </SideBarInfo>
        {linkicon && (
          <Link
            to={`/${user.data.id}/new-message/`}
            style={{
              backgroundColor: "#fff",
              padding: "5px",
              borderRadius: "50%",
            }}
          >
            <CreateIcon />
          </Link>
        )}
      </SideBarHeader>
      <ChannelContainer>
        <ChannelList user={user}></ChannelList>
      </ChannelContainer>
      <hr />

      <DMList user={user}></DMList>
    </SideBarContainer>
  );
}

const MapToStateProp = (state) => ({
  user: state.user,
});

export default connect(MapToStateProp,{force})(SideBarNav);

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  min-width: 300px;
  max-width: 300px;
  margin-top: 60px;
  @media (max-width: 769px) {
    display: none;
  }

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

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
`;

const SideBarInfo = styled.div`
  flex: 1;
`;

const AppBar = styled(SideBarContainer)`
  background-color: red;
  ${(props) => props.theme.breakpoints.up("sm")} {
    background-color: orange;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    background-color: yellow;
    color: black;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    background-color: green;
    color: white;
  }
`;
