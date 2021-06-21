import { useState } from "react";
import { useHistory } from "react-router";
import { isEmail, isStrongPassword } from "validator";
import Input from "./Input";
import Button from "./Button";
import FeedbackMessage from "./FeedbackMessage";
import Axios from "../Utils/Axios";
import { setToken } from "../Utils/HandelToken";
import swal from "sweetalert";

const LoginForm = ({ className }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const validate = () => {
    let isValid = true;
    if (!isEmail(email)) isValid = false;
    if (!isStrongPassword(password, { minSymbols: 0 })) isValid = false;
    return isValid;
  };
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handelEmail = (e) => setEmail(e.target.value);
  const handelPassword = (e) => setPassword(e.target.value);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Axios.post("/users/login", { email, password })
        .then((res) => res.data)
        .then((data) => {
          setToken(data.body.token);
          setErrorMessage("");
          reset();
          history.push("/");
          swal({
            title: "Login Success",
            icon: "success",
            closeModal: false,
            timer: 500,
          });
        })
        .catch(() => setErrorMessage("Email or password isn't correct"));
    } else {
      setErrorMessage("Email or password isn't correct");
    }
  };

  return (
    <form
      className={`${className} user-form "d-flex justify-content-center align-items-center flex-column flex-wrap"`}
      onSubmit={handelSubmit}
    >
      <h2 className="mb-3">Log In</h2>
      {errorMessage !== "" && (
        <FeedbackMessage type="danger" feedback={errorMessage} />
      )}
      <Input
        name="email"
        placeholder="Email"
        value={email}
        onChanging={handelEmail}
      />
      <Input
        name="password"
        placeholder="Password"
        value={password}
        onChanging={handelPassword}
        type="password"
      />
      <Button type="submit" text="Login" className="user-btn" />
    </form>
  );
};
export default LoginForm;
