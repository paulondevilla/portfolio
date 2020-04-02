import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const ContactContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows:
    minmax(calc(50px + 0.5em), 1fr) minmax(calc(50px + 0.5em), 1fr)
    minmax(200px, 4fr) minmax(calc(50px + 0.5em), 1fr);
  grid-template-areas:
    "email   name"
    "subject subject"
    "message message"
    "....... submit";
  gap: 1em;

  & > div:not(:last-of-type) {
    padding: 0.5em 1em;
    border: 2px solid hsl(0, 0%, 67%);
    border-radius: 4px;
    overflow: hidden;
    display: flex;

    label {
      margin-right: 0.5em;
      align-self: center;

      &[for="message"] {
        align-self: flex-start;
      }
    }

    input,
    textarea {
      width: 300px;
      flex: 1;
      overflow: hidden;
    }
  }

  input,
  textarea,
  button {
    border: none;
    font-family: inherit;
    font-size: inherit;
  }
`

const EmailInput = styled.div`
  grid-area: email;
`

const NameInput = styled.div`
  grid-area: name;
`

const SubjectInput = styled.div`
  grid-area: subject;
`

const MessageArea = styled.div`
  grid-area: message;

  textarea {
    resize: none;
  }
`

const SendButton = styled.button`
  grid-area: submit;
  justify-self: end;
  width: 10em;
  border-radius: 4px;
  background-color: hsl(0, 0%, 13%);
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.05), 0 8px 18px hsla(0, 0%, 0%, 0.05),
    0 12px 24px hsla(0, 0%, 0%, 0.05);
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;
  display: inline-block;
`

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
`

const Contact = () => {
  return (
    <ContactContainer
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input hidden name="form-name" value="contact" />
      <input hidden name="bot-field" />
      <EmailInput>
        <label htmlFor="email">Email: </label>
        <input required type="email" name="email" id="email" />
      </EmailInput>
      <NameInput>
        <label htmlFor="name">Name: </label>
        <input required type="text" name="name" id="name" />
      </NameInput>
      <SubjectInput>
        <label htmlFor="subject">Subject: </label>
        <input required type="text" name="subject" id="subject" />
      </SubjectInput>
      <MessageArea>
        <label htmlFor="message">Message: </label>
        <textarea required name="message" id="message"></textarea>
      </MessageArea>
      <div data-netlify-recaptcha="true"></div>
      <SendButton type="submit">
        Send <StyledIcon icon={faPaperPlane} />
      </SendButton>
    </ContactContainer>
  )
}

export default Contact
