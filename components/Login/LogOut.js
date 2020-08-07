import { NavLink } from "reactstrap";
import { useRouter } from "next/router";

import { firebase } from "../../firebase";

const LogOut = () => {
  const router = useRouter();
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => router.push("/"));
  };
  return <NavLink onClick={handleLogOut}>Cerrar Sesion</NavLink>;
};

export default LogOut;
