import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import retrieveMessage from "../request/retrieveMessage";
import DMSend from "./DMSend";
import Avatar from "@mui/material/Avatar";

const DirectMessages = ({ user }) => {

  let messageBody = useRef();

  const [messages, setMessages] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(user).length < 1) {
      return;
    }
    const getMessages = async () => {
      try {
        const { accessToken, client, expiry, uid } = user.headers;

        const userInfo = {
          accessToken,
          client,
          expiry,
          uid,
          sender_id: "",
          receiver_class: "User",
          receiver_id: id,
        };

        const res = await retrieveMessage(userInfo);

        setMessages(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getMessages();
  }, [user, id]);

  useEffect(() => {
    const height = messageBody.current.scrollHeight;
    messageBody.current.scrollTop = height;
  }, [messages]);

  let allmessages = <div>No messages</div>;

  if (messages.length > 0) {
    allmessages = messages.map((e, i) => {
      let month = new Date(e.created_at).getMonth() + 1;
      let year = new Date(e.created_at).getFullYear();
      let days = new Date(e.created_at).getDate();
      let hours = new Date(e.created_at).getHours();
      let AMPM = "AM";
      if (hours > 12) {
        AMPM = "PM";
        hours = hours - 12;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = new Date(e.created_at).getMinutes();

      if (minutes < 10) {
        minutes = `0${minutes}`;

      }

      return (
        <div key={i} style={{ display: 'flex', marginLeft: '10px' }}>
           {user.data.id === e.sender.id   &&
            < Avatar
              alt="Agnes Walker"
              src="https://pbs.twimg.com/profile_images/808810422144999424/H_oVvM7h_400x400.jpg"
            />
          }
        {user.data.id !== e.sender.id  &&
            <Avatar
              alt="Remy Sharp"
              src="https://miro.medium.com/max/3150/1*8OkdLpw_7VokmSrzwXLnbg.jpeg"
            />
          }
          <div  className="single-message">
            <div style={{ display: 'flex', gap: '10px' }}>

              <div>{e.sender.id === user.data.id ? 'Me': e.sender.id}</div>

              <div style={{ color: '#777676', fontSize: '10px' }}>{`${days}-${month}-${year} - ${hours}:${minutes} ${AMPM}`}</div>
            </div>
            <div>{e.body}</div>
          </div>
        </div>

      );
    });

  }

  return (
    <div className="channel-message">
      <div className="channel-name">
        <h2>{id}</h2>
      </div>
      <div className="channel-messages" ref={messageBody}>
        {allmessages}
      </div>
      <div>
        <DMSend user={user} id={id}></DMSend>
      </div>
    </div>

  );
};

const MapToStateProps = (state) => ({
  user: state.user,
});

export default connect(MapToStateProps)(DirectMessages);

