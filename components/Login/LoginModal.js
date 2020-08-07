import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
  ModalFooter,
  Button,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { firebase } from "../../firebase";

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password);
    if (user) {
      setModal(false);
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    if (result.credential.accessToken && result.user) {
      setModal(false);
      router.push("/");
    }
  };

  const toggleModal = () => setModal(!modal);
  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Inicio de sesion</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="email">
              <b>Email</b>
            </label>
            <input id="email" name="email" ref={register({ required: true })} />
            <label for="password">
              <b>Contraseña</b>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <button>Iniciar sesion</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleGoogleLogin}>Iniciar sesion con Google</Button>
        </ModalFooter>
      </Modal>
      <NavLink onClick={toggleModal}>Iniciar sesion</NavLink>
    </>
  );
};

export default LoginModal;
