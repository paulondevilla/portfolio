import React, { useState } from "react"
import { navigate } from "gatsby"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const ContactForm = styled.form`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, minmax(calc(50px + 0.5em), 1fr));
  gap: 1em;

  & > div {
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
  grid-row: span 1;
  grid-column: 1 / -1;

  @media screen and (min-width: 750px) {
    grid-column: span 1;
  }
`

const NameInput = styled.div`
  grid-area: name;
  grid-row: span 1;
  grid-column: 1 / -1;

  @media screen and (min-width: 750px) {
    grid-column: span 1;
  }
`

const SubjectInput = styled.div`
  grid-area: subject;
  grid-row: span 1;
  grid-column: 1 / -1;
`

const MessageArea = styled.div`
  grid-area: message;
  grid-row: span 4;
  grid-column: 1 / -1;

  textarea {
    resize: none;
  }
`

const SendButton = styled.button`
  grid-area: submit;
  grid-row: span 1;
  grid-column: 1 / -1;
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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setState({
          email: "",
          name: "",
          subject: "",
          message: "",
        })
        navigate(form.getAttribute("action"))
      })
      .catch(error => alert(error))
  }

  return (
    <ContactForm
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input hidden name="form-name" value="contact" />
      <input hidden name="bot-field" onChange={handleChange} />
      <EmailInput>
        <label htmlFor="email">Email: </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={state.email}
          onChange={handleChange}
        />
      </EmailInput>
      <NameInput>
        <label htmlFor="name">Name: </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={handleChange}
        />
      </NameInput>
      <SubjectInput>
        <label htmlFor="subject">Subject: </label>
        <input
          required
          type="text"
          name="subject"
          id="subject"
          value={state.subject}
          onChange={handleChange}
        />
      </SubjectInput>
      <MessageArea>
        <label htmlFor="message">Message: </label>
        <textarea
          required
          name="message"
          id="message"
          value={state.message}
          onChange={handleChange}
        ></textarea>
      </MessageArea>
      <SendButton type="submit">
        Send <StyledIcon icon={faPaperPlane} />
      </SendButton>
    </ContactForm>
  )
}

export default Contact
