import React, { useState } from "react";
import "./channel.css";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import styled from "styled-components";

function Channeloptions({ id }) {
  return (
    <div className="addChannel">
      <Link to={`/${id}/create-channel`}>
        <Icon>
          <AddBoxIcon />
        </Icon>
      </Link>
      <a href="/${id}/create-channel">
        <p className="addChannelText">Add channels</p>
      </a>
    </div>
  );
}

const Icon = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    //Global ClassName in MUI
    color: #b39fb3;
  }
`;

export default Channeloptions;
