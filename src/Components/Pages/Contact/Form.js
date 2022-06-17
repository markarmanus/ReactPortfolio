import { motion } from "framer-motion";
import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";
const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  padding: 2%;
`;
const InputGroup = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1.5%;
  flex: ${(props) => props.flex};
`;
const Input = styled.input`
  height: 100%;
  border: 0;
  width: 100%;
  color: white;
  margin: 10px;
  font-size: 1.1vmax;
  font-family: "Poly";
  padding-left: 10px;
  ::placeholder {
    color: white;
    font-size: 1.1vmax;
  }
  background-color: ${COLORS["secondary-blue"]};
`;
const TextArea = styled.textarea`
  height: 90%;
  border: 0;
  resize: none;
  width: 100%;
  color: white;
  margin: 10px;
  font-size: 1.1vmax;
  padding-top: 2.5%;
  font-family: "Poly";
  padding-left: 10px;
  ::placeholder {
    color: white;
    font-size: 1.1vmax;
  }
  background-color: ${COLORS["secondary-blue"]};
`;
const Submit = styled.button`
  height: 100%;
  border: 0;
  width: 25%;
  color: ${COLORS["main-yellow"]};
  font-size: 1vmax;
  margin: 10px;
  border-style: solid;
  cursor: ${(props) => (props.inputsValid ? "pointer" : "no-drop")};
  border-color: ${COLORS["main-yellow"]};
  border-width: 0.13vmax;
  opacity: ${(props) => (props.inputsValid ? 1 : 0.3)};
  background-color: rgba(0, 0, 0, 0);
`;
const toastProps = {
  position: "top-center",
  autoClose: 1000,
  theme: "dark",
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
};
function Form() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const variants = {
    show: (i) => {
      return {
        opacity: [0, 1],
        translateY: ["150%", "0%"],
        transition: {
          duration: 1,
          delay: 0.3 * i,
        },
      };
    },
    hide: (i) => {
      return {
        opacity: [1, 0],
        transition: {
          duration: 0.3,
          delay: 0.2,
        },
      };
    },
  };
  const sendEmail = (e) => {
    if (inputsValid()) {
      toast.info("Trying To Send the Email!", toastProps);
      e.preventDefault();
      const emailData = {
        subject,
        email,
        message,
        name,
      };
      emailjs.send("service_yurinir", "template_ltm5fyi", emailData, "bbL_yI-thngmg5zmg").then(
        () => toast.success(" Email Sent! Thank you 🙏", toastProps),
        () => toast.error("Something went wrong!", toastProps)
      );
    } else {
      showValidationError();
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const isEmpty = (value) => {
    console.log(value !== "" && value.length > 0);

    return value === "" || value.length === 0;
  };
  const showValidationError = () => {
    if (!validateEmail(email)) {
      return toast.error("Email Is Not Valid!", toastProps);
    }
    if (isEmpty(name)) {
      return toast.error("Name Cant be Empty!", toastProps);
    }
    if (isEmpty(subject)) {
      return toast.error("Subject Cant be Empty!", toastProps);
    }
    if (isEmpty(message)) {
      return toast.error("Message Cant be Empty!", toastProps);
    }
  };
  const inputsValid = () => {
    if (validateEmail(email) && !isEmpty(name) && !isEmpty(subject) && !isEmpty(message)) return true;
    return false;
  };

  return (
    <Container>
      <InputGroup variants={variants} custom={0} flex={0.2}>
        <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email"></Input>
        <Input onChange={(e) => setName(e.target.value)} placeholder="Full Name"></Input>
      </InputGroup>
      <InputGroup variants={variants} custom={1} flex={0.2}>
        <Input onChange={(e) => setSubject(e.target.value)} placeholder="Subject"></Input>
      </InputGroup>
      <InputGroup variants={variants} custom={2} flex={1}>
        <TextArea onChange={(e) => setMessage(e.target.value)} placeholder="Message"></TextArea>
      </InputGroup>
      <InputGroup variants={variants} custom={3} style={{ justifyContent: "start" }} flex={0.1}>
        <Submit inputsValid={inputsValid()} onClick={sendEmail}>
          Send
        </Submit>
      </InputGroup>
    </Container>
  );
}
export default Form;
