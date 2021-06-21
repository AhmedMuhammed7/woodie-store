import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Signup";
import Landing from "./Landing";
import Login from "./Login";

const Unauthenticated = () => {
  useEffect(() => {
      const nav = document.querySelector("nav");
      document.body.style.paddingTop = nav ? `${nav.clientHeight}px` : "";
    return () => {
      document.body.style.paddingTop = '0'
    };
  });

  return (
    <div className="w-100">
      <Router >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route render={() => <div>not found</div>} />
        </Switch>
      </Router>
    </div>
  );
};

export default Unauthenticated;
