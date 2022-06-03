import { useState } from "react";
import sendMessage from "../request/sendMessage";
import { connect } from "react-redux";
import force from "../actions/force";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const DMSend = ({ id, user, force }) => {
  const [textValue, setTextValue] = useState("");
  const ariaLabel = { "aria-label": "description" };

  const handleChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { accessToken, client, expiry, uid } = user.headers;

    const userInfo = {
      accessToken,
      client,
      expiry,
      uid,
      message: textValue,

      receiver_class: "User",
      receiver_id: id,
    };

    try {
      const test = await sendMessage(userInfo);

      await force();
    } catch (err) {
      console.error(err.message);
    }

    setTextValue("");
  };

  return (
    <div className="send-form-container">
      <form className="form-container">
        <Input
          onChange={handleChange}
          value={textValue}
          className="textarea-send"
          row={1}
          placeholder="Jot something down"
          inputProps={ariaLabel}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          endIcon={<SendIcon />}
          color="success"
          size="small"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default connect(null, { force })(DMSend);
