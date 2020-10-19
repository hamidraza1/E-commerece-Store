/* eslint-disable jsx-a11y/no-onchange*/
import React from 'react';
import firebase from './firebase';
import CartContext from 'context/CartContext';
import {
  FormWrapper,
  FormInnerContent,
  NameWrapper,
  FirstNameWrapper,
  FirstNameSpan,
  FirstNameInput,
  LastNameWrapper,
  LastNameSpan,
  LastNameInput,
  DOBEmailWrapper,
  DOBWrapper,
  DOBSpan,
  DOBInput,
  EmailWrapper,
  EmailSpan,
  EmailInput,
  SecondWrapper,
  SecondNameWrapper,
  SecondNameSpan,
  SecondNameInput,
  SecondDOBWrapper,
  SecondDobSpan,
  SecondDobInput,
  SymptomsWrapper,
  SymptomsSpan,
  SymptomsInput,
  SymptomsDurationWrapper,
  SymptomsDurationSpan,
  SymptomsDurationInput,
  PrviousMedicationWrapper,
  PrviousMedicationSpan,
  PreviousMedicationInput,
  OnGoingMedicationWrapper,
  OnGoingMedicationSpan,
  OnGoingMedicationInput,
  PregnantWrapper,
  PregnantSpan,
  GenderWrapper,
  GenderSpan,
  GenderSelectWrapper,
  FirstContactWrapper,
  FirstContactSpan,
  FirstContactInput,
  SecondContactWrapper,
  SecondContactSpan,
  SecondContactInput,
  FormButton,
} from './styles';
export function Form() {
  const { checkout } = React.useContext(CartContext);
  const [FirstName, setFirstName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [firstContact, setFirstContact] = React.useState('');
  const [secondContact, setSecondContact] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [seconddob, setSeconddob] = React.useState('');
  const [symptoms, setSymptoms] = React.useState('');
  const [symptomsduration, setSymptomsduration] = React.useState('');
  const [previousMedication, setPreviousMedication] = React.useState('');
  const [gender, setGender] = React.useState('Male');
  const [pregnant, setPregnant] = React.useState('No');
  const [onGoingMedication, setOnGoingMedication] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('Contacts')
      .add({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        dob: dob,
        firstContact: firstContact,
        secondContact: secondContact,
        secondName: secondName,
        seconddob: seconddob,
        symptoms: symptoms,
        symptomsduration: symptomsduration,
        previousMedication: previousMedication,
        onGoingMedication: onGoingMedication,
        gender: gender,
        pregnant: pregnant,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch(error => {
        alert(error.message);
      });
    setFirstName('');
    setLastName('');
    setDob('');
    setEmail('');
    setFirstContact('');
    setSecondContact('');
    setSecondName('');
    setSeconddob('');
    setSymptoms('');
    setSymptomsduration('');
    setPreviousMedication('');
    setOnGoingMedication('');
    setGender('');
    setPregnant('');
    window.location.href = checkout.webUrl;
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <FormInnerContent>
        {/* ..............Name................ */}
        <NameWrapper>
          <FirstNameWrapper>
            <FirstNameSpan>First Name</FirstNameSpan>
            <FirstNameInput
              placeholder="John"
              value={FirstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </FirstNameWrapper>
          <LastNameWrapper>
            <LastNameSpan>Last Name</LastNameSpan>
            <LastNameInput
              placeholder="Smith"
              value={LastName}
              onChange={e => setLastName(e.target.value)}
            />
          </LastNameWrapper>
        </NameWrapper>
        {/* ..............Email And Date of birth................ */}
        <DOBEmailWrapper>
          <DOBWrapper>
            <DOBSpan>Date Of Birth</DOBSpan>
            <DOBInput
              placeholder="DD-MM-YYYY"
              value={dob}
              onChange={e => setDob(e.target.value)}
            />
          </DOBWrapper>
          <EmailWrapper>
            <EmailSpan>Email</EmailSpan>
            <EmailInput
              placeholder="someone@gmail.com"
              value={Email}
              onChange={e => setEmail(e.target.value)}
            />
          </EmailWrapper>
        </DOBEmailWrapper>

        {/* ...........First Contact.............. */}
        <FirstContactWrapper>
          <FirstContactSpan>Contact</FirstContactSpan>
          <FirstContactInput
            placeholder="+44 1234 5678910"
            value={firstContact}
            onChange={e => setFirstContact(e.target.value)}
          />
        </FirstContactWrapper>
        {/* ..............Second Name and Date of Birth................ */}
        <SecondWrapper>
          <SecondNameWrapper>
            <SecondNameSpan>Who is the medicine for?</SecondNameSpan>
            <SecondNameInput
              placeholder="John Smith"
              value={secondName}
              onChange={e => setSecondName(e.target.value)}
            />
          </SecondNameWrapper>
          <SecondDOBWrapper>
            <SecondDobSpan>
              Date of Birth
              <span>(If deiffrent person from details above)</span>
            </SecondDobSpan>
            <SecondDobInput
              placeholder="DD-MM-YYYY"
              value={seconddob}
              onChange={e => setSeconddob(e.target.value)}
            />
          </SecondDOBWrapper>
        </SecondWrapper>
        {/* ...........Second Contact.............. */}
        <SecondContactWrapper>
          <SecondContactSpan>
            Contact <span>(If deiffrent person from details above)</span>
          </SecondContactSpan>
          <SecondContactInput
            placeholder="+44 1234 5678910"
            value={secondContact}
            onChange={e => setSecondContact(e.target.value)}
          />
        </SecondContactWrapper>
        {/* ...........Symptoms.............. */}
        <SymptomsWrapper>
          <SymptomsSpan>Current Symptoms</SymptomsSpan>
          <SymptomsInput
            placeholder="What symptoms do you got?"
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
        </SymptomsWrapper>
        {/*......... Symptoms Duration.............. */}
        <SymptomsDurationWrapper>
          <SymptomsDurationSpan>
            Duration of These Symptoms
          </SymptomsDurationSpan>
          <SymptomsDurationInput
            placeholder="For how long do you have these symptoms?"
            value={symptomsduration}
            onChange={e => setSymptomsduration(e.target.value)}
          />
        </SymptomsDurationWrapper>

        {/*......... Prvious Medication.............. */}
        <PrviousMedicationWrapper>
          <PrviousMedicationSpan>Previous Medication</PrviousMedicationSpan>
          <PreviousMedicationInput
            placeholder="What Medications have you tried for these medicines?"
            value={previousMedication}
            onChange={e => setPreviousMedication(e.target.value)}
          />
        </PrviousMedicationWrapper>

        {/*......... Ongoing Medication.............. */}
        <OnGoingMedicationWrapper>
          <OnGoingMedicationSpan>
            Current Regular Medications
          </OnGoingMedicationSpan>
          <OnGoingMedicationInput
            placeholder="Are you on any other regular medications at moment?"
            value={onGoingMedication}
            onChange={e => setOnGoingMedication(e.target.value)}
          />
        </OnGoingMedicationWrapper>
        {/*......... Pregnant.............. */}
        <GenderWrapper>
          <GenderSpan>Gender</GenderSpan>
          <GenderSelectWrapper>
            <select onChange={e => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="N/A">N/A</option>
            </select>
          </GenderSelectWrapper>
        </GenderWrapper>

        <PregnantWrapper>
          <PregnantSpan>Are you pregnant?</PregnantSpan>
          <div onChange={e => setPregnant(e.target.value)}>
            <div>
              <input type="radio" value="Yes" name="Pregnant" />
              <span>Yes</span>
            </div>
            <div>
              <input type="radio" value="No" name="Pregnant" defaultChecked />
              <span> No</span>
            </div>
            <div>
              <input type="radio" value="N/A" name="Pregnant" />
              <span> N/A</span>
            </div>
          </div>
        </PregnantWrapper>

        <FormButton type="submit">Submit & Continue to payment</FormButton>
      </FormInnerContent>
    </FormWrapper>
  );
}
