import React from "react";
import { ReactComponent as Avatar } from "./images/avatar.svg";


const MessageToName = () => {
  return (
    <>        
    <span style={{width: '50px'}}>
          <Avatar />
        </span>
        <div>Receiver Full Name</div>

    </>
  );
};

export default MessageToName;
