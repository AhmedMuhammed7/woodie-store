import SignupForm from "../components/SignupForm";
const SignUp = () => (
  <div
    className=" sign-page d-flex justify-content-center align-items-center flex-column flex-wrap"
    style={{ minHeight: `${window.innerHeight}px` }}
  >
    <SignupForm />
  </div>
);



export default SignUp;
