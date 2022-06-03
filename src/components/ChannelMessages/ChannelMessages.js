import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ChannelMessage.css";
import { connect } from "react-redux";
import retrieveMessage from "../request/retrieveMessage";
import { v4 as uuidv4 } from "uuid";
import SendMessageChannel from "./SendMessageChannel";
import getChannelDetails from "../request/getChannelDetailsViaID";
import addMembersToChannel from "../request/addMembersToChannel";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const ChannelMessages = ({ user, nameOfChannel }) => {
  const [messages, setMessages] = useState([]);
  const [channelName, setChannelName] = useState([]);
  const [addMember, setAddMember] = useState("");
  const [channelMembers, setChannelMembers] = useState([]);

  const messageBody = useRef();

  let { id } = useParams();

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
          receiver_class: "Channel",
          receiver_id: id,
        };

        const channelInfo = await getChannelDetails({
          accessToken,
          client,
          expiry,
          uid,
          channelID: id,
        });

        setChannelName(channelInfo.data.name);

        const res = await retrieveMessage(userInfo);

        setMessages(res.data);
        setChannelMembers(channelInfo.data.channel_members);
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
    allmessages = messages.map((e) => {
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
        <div key={uuidv4()} className="single-message">
          <div>
            <div>{e.sender.id ? e.sender.id : ""}</div>
            <div>{`${days}-${month}-${year} - ${hours}:${minutes} ${AMPM}`}</div>
          </div>
          <div>{e.body}</div>
        </div>
      );
    });
  }

  function handleChange(event) {
    setAddMember(event.target.value);
  }

  function setMember() {
    const fetch = async () => {
      try {
        const { accessToken, client, expiry, uid } = user.headers;

        const fetched = await addMembersToChannel({
          accessToken: accessToken,
          client: client,
          expiry: expiry,
          uid: uid,
          id: id,
          member_id: addMember,
        });
        console.log(fetched);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetch();

    setAddMember("");
  }

  return (
    <div className="channel-message">
      <div className="channel-name">
        <h2>{channelName}</h2>

        <AvatarGroup total={channelMembers.length}>
          <Avatar
            alt="Remy Sharp"
            src="https://miro.medium.com/max/3150/1*8OkdLpw_7VokmSrzwXLnbg.jpeg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.koreatraveleasy.com/wp-content/uploads/2020/04/24162750/time-on-me-studio-customer-photo2-442x590.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/originals/31/af/88/31af882efb16e3f8f589ccf0afa2354a.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://pbs.twimg.com/profile_images/808810422144999424/H_oVvM7h_400x400.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.shopify.com/s/files/1/0261/5318/9479/products/JapanVisa_1024x1024@2x.jpg"
          />
        </AvatarGroup>
        <div>
          {/* <input
            value={addMember}
            onChange={handleChange}
            placeholder="Input member ID"
            type="number"
          ></input> */}
          <Input
            value={addMember}
            onChange={handleChange}
            placeholder="Input member ID"
            type="number"
          />
          {/* <button onClick={setMember}>add member</button> */}
          <Button
            size="small"
            onClick={setMember}
            variant="contained"
            endIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="channel-messages" ref={messageBody}>
        {allmessages}
      </div>
      <div>
        <SendMessageChannel user={user} channelId={id}></SendMessageChannel>
      </div>
    </div>
  );
};

const MapToStateProps = (state) => ({
  user: state.user,
});

export default connect(MapToStateProps, {})(ChannelMessages);
