import styled from 'styled-components';

export const FormWrapper = styled.form`
  background: white;
  padding: 20px;
  margin-top: 60px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    margin-top: 0px;
  }
  > h1 {
    color: #00b034;
    font-size: 26px;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 36px;
    }
  }
`;

export const FormInnerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

/* ..............Name................ */

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const FirstNameWrapper = styled.span`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const FirstNameSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const FirstNameInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const LastNameWrapper = styled.span`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const LastNameSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const LastNameInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;

/* ..............Email And Date of birth................ */
export const DOBEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const DOBWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const DOBSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const DOBInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const EmailWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const EmailSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const EmailInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;
/* ...........First Contact.............. */
export const FirstContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const FirstContactSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const FirstContactInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  width: 100%;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
/* ..............Second Name and Date of Birth................ */
export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const SecondNameWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const SecondNameSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const SecondNameInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;
export const SecondDOBWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const SecondDobSpan = styled.div`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
  @media (min-width: 768px) {
    width: 80%;
  }
  > span {
    font-size: 12px;
    margin-left: 3px;
  }
`;
export const SecondDobInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 80%;
  }
`;
/* ...........First Contact.............. */
export const SecondContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const SecondContactSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
  > span {
    font-size: 12px;
    margin-left: 3px;
  }
`;
export const SecondContactInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  width: 100%;
  &::placeholder {
    color: #d3d4d5;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
/* ...........Symptoms.............. */
export const SymptomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const SymptomsSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const SymptomsInput = styled.textarea`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  height: 100px;
  &::placeholder {
    color: #d3d4d5;
  }
`;
/*......... Symptoms Duration.............. */
export const SymptomsDurationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const SymptomsDurationSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const SymptomsDurationInput = styled.textarea`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  height: 100px;
  &::placeholder {
    color: #d3d4d5;
  }
`;
/*......... Prvious Medication.............. */
export const PrviousMedicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const PrviousMedicationSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const PreviousMedicationInput = styled.textarea`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  height: 100px;
  &::placeholder {
    color: #d3d4d5;
  }
`;

/*......... Ongoing Medication.............. */
export const OnGoingMedicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const OnGoingMedicationSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const OnGoingMedicationInput = styled.textarea`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  height: 100px;
  &::placeholder {
    color: #d3d4d5;
  }
`;
/*......... Gender.............. */
export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;
export const GenderSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const GenderSelectWrapper = styled.div`
  margin: 4px 0;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  width: 20%;
  > select {
    font-size: 14px;
    background: rgb(231, 234, 236);
    padding: 5px;
    border: none;
    border-radius: 5px;
    width: 150px;
    cursor: pointer;
    > option {
      background: white;
      color: black;
    }
  }
`;
/*......... Pregnant.............. */
export const PregnantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      margin-top: 3px;
      > span {
        font-size: 15px;
      }
    }
  }
`;
export const PregnantSpan = styled.span`
  margin-right: 10px;
  color: rgb(71, 71, 71);
  font-size: 15px;
`;
export const PregnantInput = styled.input`
  border: 1px solid rgb(178, 178, 178);
  padding: 6px;
  border-radius: 5px;
  color: gray;
  margin-top: 3px;
  width: 40%;
  &::placeholder {
    color: ;
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 100%;
  background-color: #00b034;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 3px;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
