import { useState, useRef, useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import SelectBox from "./SelectBox";
import ImageInput from "./ImageInput/ImageInput";
import Button from "./Button";
import Axios from "../Utils/Axios";

const SignupForm = () => {
  const history = useHistory();
  const signUpForm = useRef();
  const formData = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const handelFirstName = (e) => setFirstName(e.target.value);
  const handelLastName = (e) => setLastName(e.target.value);
  const handelEmail = (e) => setEmail(e.target.value);
  const handelPassword = (e) => setPassword(e.target.value);
  const handelGender = (e) => setGender(e.target.value);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setAvatar("");
    setEmail("");
    setPassword("");
    setGender("");
    formData.current = new FormData();
  };

  useEffect(() => {
    formData.current = new FormData(signUpForm.current);
    formData.current.append("avatar", avatar);

    return () => {
      formData.current = new FormData();
    };
  }, [avatar, firstName, lastName, gender, password, email]);


  const handelSubmit = (e) => {
    e.preventDefault();
    Axios.post("/users/register", formData.current)
      .then((res) => res.data)
      .then((data) => {
        swal(data.body);
        reset();
        history.push("/login");
      });
  };

  return (
    <form
      className={`user-form my-2 d-flex justify-content-center align-items-center flex-column flex-wrap`}
      ref={signUpForm}
      onSubmit={handelSubmit}
    >
      <h2 className="mb-2 fw-bold">Sign up</h2>
      <Input
        name="first_name"
        placeholder="First Name"
        onChanging={handelFirstName}
        value={firstName}
      />
      <Input
        name="last_name"
        placeholder="Last Name"
        onChanging={handelLastName}
        value={lastName}
      />
      <Input
        name="email"
        placeholder="Email"
        onChanging={handelEmail}
        value={email}
      />
      <SelectBox
        options={["Male", "Female"]}
        value={gender}
        onChanging={handelGender}
        name="gender"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChanging={handelPassword}
        value={password}
      />
      <ImageInput multiple={false} setFunc={setAvatar} images={avatar} />
      <Button text="Sign up" type="submit" className="user-btn" />
    </form>
  );
};


export default SignupForm;
