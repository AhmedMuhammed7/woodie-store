import { useEffect, useState } from "react";

import Unauthenticated from "./views/Unauthenticated";
import Authenticated from "./views/Authenticated";
import { verifyToken, token } from "./Utils/HandelToken";

const adminPage = window.location.href.split("/").includes("admin");

const App = () => {
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    let mounted = true;
    const handelToken = async () =>
      setIsValidToken(token && (await verifyToken()));
    const handelBodyStyle = () => {
      document.body.style.background = adminPage ? "#212529" : "#0e1630";
    };
    if (mounted) {
      handelToken();
      handelBodyStyle();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      {isValidToken ? (
        <Authenticated setIsValidToken={setIsValidToken} />
      ) : (
        <Unauthenticated />
      )}
    </div>
  );
};

export default App;
