import React from "react";
import "./Allmessages.css";
import { ReactComponent as Avatar } from "./images/avatar.svg";

const message = [
  {
    fullName: "Receiver Full Name",
    message: "Hi, This is a sample message",
    time: "2:47 PM",
  },
  {
    fullName: "User Full Name",
    message: "Hi, This is a response sample message",
    time: "3:42 PM",
  },
];



const Allmessages = () => {
  return (
    <>
        {message.map(e => {
           return <div className="allMessageContainer">
            <span>
              <Avatar style={{ width: "35px" }} />
            </span>
            <div className="messageInner">
              <div clasName='nameTime'>
                <span style={{marginRight: '10px'}}>{e.fullName}</span>
                <span style={{color:'#b8b5b5'}}>{e.time}</span>
              </div>
              <div>{e.message}</div>
            </div>
            </div>
        })}
    </>
  );
};

export default Allmessages;
