
import React, { useState, useEffect } from 'react'
import getAllUsersChannel from '../request/getAllUsersChannel'
import './channel.css'
import { Link } from 'react-router-dom'
import Channeloptions from './Channeloptions'
import { connect } from 'react-redux'
import { FeedTwoTone } from '@mui/icons-material'
import getChannelDetailsViaID from '../request/getChannelDetailsViaID'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


function ChannelList({ user }) {
  const [channelList, setChannelList] = useState([]);
  const [shortenChannel, setShortenChannel] = useState([]);
  const [showChannel, setShowChannel] = useState(false);
  const [id, setId] = useState(undefined);
  const [isChange, setIsChange] = useState(false);

  function changeState() {
    isChange ? setIsChange(false) : setIsChange(true);
  }

  useEffect(() => {
    const channels = async () => {
      if (Object.keys(user).length < 1) {
        return;
      }
      setId(user.data.id);

      const { accessToken, client, expiry, uid } = user.headers;
      const data = {
        accessToken,
        client,
        expiry,
        uid,
      };

      try {
        const fetchChannels = await getAllUsersChannel(data);


        if (!fetchChannels.errors) {
          setChannelList(fetchChannels.data);
          const shorten = fetchChannels.data.slice(0, 3);
          setShortenChannel(shorten);

          setShowChannel(true)
        }

      } catch (err) {
        console.error(err.message);
      }

    }
    channels()



  }, [user])


  return (
    <>
      <div className="channelHeader">
        <button onClick={changeState}>
          {" "}
          {!isChange ? <ArrowRightIcon /> : <ArrowDropDownIcon />}{" "}
        </button>
        <a onClick={changeState}>
          <p>Channels</p>
        </a>
      </div>

      <div className="channelList">
        {showChannel && isChange
          ? channelList.map((channel, index) => (

              <Link

                to={`/${user.data.id}/channel/${channel.id}`}
                className="channels"
                key={index}
              >
                #&nbsp;&nbsp;{channel.name}
              </Link>

            ))
          : shortenChannel.map((channel, index) => (
              <Link
                to={`/${user.data.id}/channel/${channel.id}`}
                className="channels"
                key={index}
              >
                #&nbsp;&nbsp;{channel.name}
              </Link>
            ))}
        {!showChannel && <li>No Channels</li>}
        <Channeloptions />
      </div>
    </>
  );
}

// const MapToStateProp = state => ({
//   user:state.user
// })

// export default connect(MapToStateProp)(ChannelList)
export default ChannelList;
