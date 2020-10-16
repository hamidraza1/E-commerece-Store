import React from 'react';
import firebase from './firebase';
import {
  FormWrapper,
  FormInnerContent,
  NameSpan,
  NameInput,
  EmailSpan,
  EmailInput,
  MessageSpan,
  MessageTextArea,
} from './styles';
export function Form() {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Message, setMessage] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('Contacts')
      .add({
        name: Name,
        email: Email,
        message: Message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert('message has been submitted');
      })
      .catch(error => {
        alert(error.message);
      });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <FormInnerContent>
        <NameSpan>Name</NameSpan>
        <NameInput
          placeholder="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <EmailSpan>Email</EmailSpan>
        <EmailInput
          placeholder="Email"
          value={Email}
          onChange={e => setEmail(e.target.value)}
        />
        <MessageSpan>Message</MessageSpan>
        <MessageTextArea
          placeholder="Message"
          value={Message}
          onChange={e => setMessage(e.target.value)}
        ></MessageTextArea>

        <button type="submit">Submit</button>
      </FormInnerContent>
    </FormWrapper>
  );
}
