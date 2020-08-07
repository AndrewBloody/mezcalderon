import { useState } from "react";
import router from "next/router";
import { auth } from "../firebase";

const withAuth = (Component) => (props) => {
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        this.setState({
          status: "SIGNED_IN",
        });
      } else {
        router.push("/");
      }
    });
  }, []);

  if (status === "Loading") {
    return <h1> Loading </h1>;
  }
  return <Component {...props} />;
};
export default withAuth;
