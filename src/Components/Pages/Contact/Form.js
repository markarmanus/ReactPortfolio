import { motion } from "framer-motion";
import styled from "styled-components";
import { COLORS } from "../../../Constants/COLOR";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
const Container = styled.div`
  width: 100%;
  height: 300px;
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
  margin: 8px;
  flex: ${(props) => props.flex};
`;
const Input = styled.input`
  height: 100%;
  border: 0;
  width: 100%;
  color: white;
  margin: 10px;
  font-size: 1em;
  font-family: "Poly";
  padding-left: 10px;
  ::placeholder {
    color: white;
    font-size: 15px;
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
  font-size: 1em;
  padding-top: 2.5%;
  font-family: "Poly";
  padding-left: 10px;
  ::placeholder {
    color: white;
    font-size: 15px;
  }
  background-color: ${COLORS["secondary-blue"]};
`;
const Submit = styled.button`
  height: 100%;
  border: 0;
  width: 20%;
  color: ${COLORS["main-yellow"]};
  margin: 10px;
  padding-left: 10px;
  border-style: solid;
  border-color: ${COLORS["main-yellow"]};
  border-width: 2px;
  background-color: rgba(0, 0, 0, 0);
`;
function Form(props) {
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
    e.preventDefault();
    const emailData = {
      subject,
      email,
      message,
      name,
    };
    console.log(emailData);
    const toastProps = {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    };
    emailjs.send("service_yurinir", "template_ltm5fyi", emailData, "bbL_yI-thngmg5zmg").then(
      () => toast.success(" Email Sent! Thank you 🙏", toastProps),
      () => toast.error("Something went wrong!", toastProps)
    );
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
        <Submit onClick={sendEmail}>Send</Submit>
      </InputGroup>
    </Container>
  );
}
export default Form;
