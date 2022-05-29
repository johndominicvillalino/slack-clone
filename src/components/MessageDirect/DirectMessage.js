import CreateText from "./CreateText";
import "./DirectMessage.css";
import MessageToName from "./MessageToName";
import Allmessages from "./Allmessages";




const DirectMessage = () => {


  return (
    <>
      <div className="messagesContainer">
        <div className='messageToName'>
          <MessageToName />
        </div>
        <div style={{height: '500px',overflowY:'scroll'}}><Allmessages /></div>
        <CreateText></CreateText>
      </div>
    </>
  );
};

export default DirectMessage;
