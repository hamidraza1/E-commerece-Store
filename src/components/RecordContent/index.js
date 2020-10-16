import React from 'react';
import firebase from '../Form/firebase';
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
    <div>
      {Patients?.Patients.map((patient, i) => (
        <div key={i}>
          <div>{patient.name}</div>
          <div>{patient.email}</div>
          <div>{patient.message}</div>
          <div>{patient.date}</div>
          <div>{patient.time}</div>
        </div>
      ))}
    </div>
  );
}
