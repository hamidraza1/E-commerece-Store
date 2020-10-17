/* import React from 'react';
export function RecordContent() {
  return <div>RecordContent</div>; */

import React from 'react';
import firebase from '../Form/firebase';
import {
  RecordContentWrapper,
  RecordInnerContent,
  Header,
  FirstName,
  LastName,
  Email,
  DOB,
  OtherMan,
  SecondName,
  SecondDOB,
  Details,
  Symptoms,
  SymptomsDuration,
  PreviousMedicaton,
  OnGoingMedication,
  Pregnant,
  Date,
  Time,
  Gender,
  FirstContact,
} from './styles';
export function RecordContent() {
  let [Patients, setPatient] = React.useState(null);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('Contacts')
      .orderBy('timestamp', 'desc')
      .get()
      .then(function (querySnapshot) {
        const PatientsData = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.date = doc.data().timestamp.toDate().toDateString();
          data.time = doc.data().timestamp.toDate().toLocaleTimeString();
          PatientsData.push(data);
        });
        setPatient({ Patients: PatientsData });
      });
  }, []);

  return (
    <RecordContentWrapper>
      {Patients?.Patients.map((patient, i) => (
        <RecordInnerContent key={i}>
          <Header>
            <div>
              <FirstName>
                <span>FirstName:</span>
                <span>{patient.firstName}</span>
              </FirstName>
              <LastName>
                <span>LastName:</span>
                <span>{patient.lastName}</span>
              </LastName>
              <Gender>
                <span>Gender:</span>
                <span>{patient.gender}</span>
              </Gender>
            </div>
            <div>
              <Email>
                <span>Email:</span>
                <span>{patient.email}</span>
              </Email>
              <FirstContact>
                <span>Contact:</span>
                <span>{patient.firstContact}</span>
              </FirstContact>
              <DOB>
                <span>DOB:</span>
                <span>{patient.dob}</span>
              </DOB>
            </div>
          </Header>
          <OtherMan>
            <SecondName>
              <span>Who is the medicine for?</span>
              <span>{patient.secondName}</span>
            </SecondName>
            <SecondDOB>
              <span>Contact:</span>
              <span>{patient.secondContact}</span>
            </SecondDOB>
            <SecondDOB>
              <span>DOB:</span>
              <span>{patient.seconddob}</span>
            </SecondDOB>
          </OtherMan>
          <Details>
            <Symptoms>
              <span>Symptoms:</span>
              <span>{patient.symptoms}</span>
            </Symptoms>
            <SymptomsDuration>
              <span>Symptoms Duration:</span>
              <span>{patient.symptomsduration}</span>
            </SymptomsDuration>
            <PreviousMedicaton>
              <span>Previous Medication:</span>
              <span>{patient.previousMedication}</span>
            </PreviousMedicaton>
            <OnGoingMedication>
              <span>OnGoing Medication:</span>
              <span>{patient.onGoingMedication}</span>
            </OnGoingMedication>
            <Pregnant>
              <span>Pregnant?</span>
              <span>{patient.pregnant}</span>
            </Pregnant>
            <Date>
              <span>Date:</span>
              <span>{patient.date}</span>
            </Date>
            <Time>
              <span>Time:</span>
              <span>{patient.time}</span>
            </Time>
          </Details>
        </RecordInnerContent>
      ))}
    </RecordContentWrapper>
  );
}
