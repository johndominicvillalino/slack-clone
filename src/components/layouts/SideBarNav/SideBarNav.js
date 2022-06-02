import React, { useEffect,useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function SideBarNav({ user }) {


  const [linkicon, setLinkIcon] = useState(false)

  useEffect(() => {

    if(Object.keys(user).length < 1) {
      return
    }

    setLinkIcon(true)

  },[user])


  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Avion School</h2>
        </SideBarInfo>
        { linkicon && <Link to={`/${user.data.id}/new-message/`} style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '50%' }}><CreateIcon /></Link>} 
      </SideBarHeader>
    </SideBarContainer>
  );
}

const MapToStateProp = state => ({
  user: state.user
})

export default connect(MapToStateProp)(SideBarNav);

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  min-width: 300px;
  max-width:300px;
  margin-top: 60px;
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
