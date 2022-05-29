import { useEffect, useState } from "react";
import "./Allmessages.css";
import { ReactComponent as Avatar } from "./images/avatar.svg";
import { v4 as uuidv4 } from "uuid";
import retreiveMessage from "../request/retreiveMessages";


const Allmessages = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const messages = await retreiveMessage();
      if (messages) {
        // const sorted = messages.sort((a,b) => b.created_at - a.created_at)
        setMessage(messages);
      }
  
    }
  
    fetchData()
    return () => {
      
    }
  }, []);

  return (
    <>
      {message.map((e) => {

      let hour = new Date(e.created_at).getHours()
      let minutes = new Date(e.created_at).getMinutes()

      let fullYear = new Date(e.created_at).getFullYear()
      let month = new Date(e.created_at).getMonth() + 1
      let date = new Date(e.created_at).getDate()

      let AMPM = 'AM'

      if(hour > 12) {
        hour = hour - 12
        AMPM = 'PM'
      }

      if(hour < 10) {
        hour = `0${hour}`
      }

        return (
          <div className="allMessageContainer" key={uuidv4()}>
            <span>
              <Avatar style={{ width: "35px" }} />
            </span>
            <div className="messageInner">
              <div className="nameTime">
                <span style={{ marginRight: "10px" }}>{e.sender.id}</span>
                <span style={{ color: "#b8b5b5" }}>{`${hour}:${minutes} ${AMPM} - ${date}/${month}/${fullYear}`}</span>
              </div>
              <div>{e.body}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Allmessages;
