import {
  AppWrapper,
  FormWrapper,
  FormInput,
  FormButton,
  FormInputWrapper,
  FormInputLabel,
  FormHead,
} from "./styled";

function App() {
  return (
    <AppWrapper>
      <FormWrapper>
        <FormHead>Login</FormHead>
        <FormInputWrapper>
          <FormInputLabel>Username</FormInputLabel>
          <FormInput placeholder="type username" />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInputLabel>Email</FormInputLabel>
          <FormInput placeholder="type email" />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInputLabel>Password</FormInputLabel>
          <FormInput placeholder="type password" />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormButton bgColor="#1877f2">Sign In</FormButton>
          <FormButton bgColor="#42b72a">Sign Up</FormButton>
        </FormInputWrapper>
      </FormWrapper>
    </AppWrapper>
  );
}

export default App;
