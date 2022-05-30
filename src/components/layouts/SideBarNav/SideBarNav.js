import React from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";

function SideBarNav() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Avion School</h2>
        </SideBarInfo>
        <KeyboardArrowDownIcon />
        <CreateIcon />
      </SideBarHeader>
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
