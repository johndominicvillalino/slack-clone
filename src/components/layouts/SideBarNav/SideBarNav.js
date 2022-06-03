import React from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SideBarOption from "./SideBarOption";
import AddIcon from "@mui/icons-material/Add";

function SideBarNav() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Avion School</h2>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      <SideBarOption Icon={ArrowRightIcon} title="Channels" />
      <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      <hr />
      <SideBarOption Icon={ArrowRightIcon} title="Direct Messages" />
      <hr />
    </SideBarContainer>
  );
}

export default SideBarNav;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

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
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
`;
