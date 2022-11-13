import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #edf0f5;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: space-between;
  flex-direction: column;
  justify-content: space-between;
  width: 650px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;

export const FormInput = styled.input`
  margin: 10px;
  border-radius: 5px;
  height: 40px;
  width: 400px;

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

export const FormButton = styled.button`
  width: 40%;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "violet")};
  color: ${(props) => (props.fontColor ? props.fontColor : "white")};
  height: 40px;
  font-weight: bold;
  border: 0;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

export const FormInputLabel = styled.span`
  margin: 10px;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const FormHead = styled.h1`
  color: #4267b2;
  align-self: center;
  border-bottom: 5px solid #dadde1;
`;
