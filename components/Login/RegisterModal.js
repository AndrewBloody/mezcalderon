import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  NavLink,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { firebase } from "../../firebase";
// import "./register.module.css";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    if (user) {
      setIsOpen(false);
      router.push("/");
    }
  };

  const toggleModal = () => setModal(!modal);
  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}> Registro</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="name">
              <b>Nombre</b>
            </label>
            <input id="name" name="name" ref={register({ required: true })} />
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

            <button>Registrar</button>
          </form>
        </ModalBody>
      </Modal>
      <NavLink onClick={toggleModal}>Registro</NavLink>
    </>
  );
};

export default RegisterModal;
