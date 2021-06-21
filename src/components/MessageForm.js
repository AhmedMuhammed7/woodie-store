import { useState } from "react";
import Cookies from "js-cookie";
import Axios from "../Utils/Axios";
import Input from "./Input";
import Button from "./Button";
import FeedbackMessage from "./FeedbackMessage";
const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState();

  const handelMessage = (e) => setMessage(e.target.value);
  const handelSubject = (e) => setSubject(e.target.value);
  const reset = () => {
    setMessage("");
    setSubject("");
  };
  const validate = () => message !== "";

  const handelSubmit = (e) => {
    e.preventDefault();
    if (validate())
      Axios.put("/users/messages/add", {
        message: {
          subject,
          body: message,
        },
        id: Cookies.getJSON("user").id,
      })
        .then(() => {
          setFeedback({
            type: "success",
            message: "Message Sent",
          });
          reset();
        })
        .catch((err) => err);
      else  setFeedback({
        type: "warning",
        message: "Write Something",
      });
  };
  return (
    <form className="message-form" onSubmit={handelSubmit}>
      {feedback && (
        <FeedbackMessage feedback={feedback.message} type={feedback.type} />
      )}
      <Input
        value={subject}
        onChanging={handelSubject}
        placeholder="Subjects"
      />
      <Input
        type="textarea"
        onChanging={handelMessage}
        placeholder="Message"
        value={message}
      />
      <Button
        text="send message"
        type="submit"
        className="user-btn"
        clicking={handelSubmit}
      />
    </form>
  );
};

export default MessageForm;
