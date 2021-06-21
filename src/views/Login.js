import LoginForm from "../components/LoginForm";
const Login = () => (
  <div
    className="d-flex justify-content-center align-items-center flex-column flex-wrap"
    style={{ minHeight: `${window.innerHeight}px` }}
  >
    <LoginForm />
  </div>
);

export default Login;
