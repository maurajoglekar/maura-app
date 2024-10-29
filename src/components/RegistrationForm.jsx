import { useState } from "react";
import styled from "styled-components";
import { submitForm } from "../utils/formUtils";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 24px;
  width: 600px;
  gap: 18px;

  button {
    width: 150px;
    height: 50px;
    border-radius: 12px;
    background-color: gray;
    color: white;
    font-size: 18px;
    margin-top: 32px;
  }
`;

const StyledField = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 8px;
    text-align: start;
  }

  sup {
    color: red;
  }

  input {
    height: 40px;
    border-radius: 4px;
  }
`;

const StyledFormError = styled.div`
  position: absolute;
  color: red;
  bottom: -4px;
  font-size: 12px;
`;

const StyledHeader = styled.div`
  position: relative;
  margin-bottom: 1px;
`;
const StyledResponse = styled.div`
  position: absolute;
  top: 90px;
  right: 200px;
  color: ${(props) => (props.status === 200 ? "green" : "red")};
  font-size: 20px;
`;

const emptyForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const RegistrationForm = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState(emptyForm);
  const [submitResponse, setSubmitResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitResponse(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate fields
    const { username, email, password, confirmPassword } = formData;
    const nameRegex = /^[a-zA-Z0-9]+$/;
    let isValid = true;

    if (username.length < 5 && !username.match(nameRegex)) {
      setErrors((prev) => ({ ...prev, username: "invalid username" }));
      isValid = false;
    }

    if (email.length < 4) {
      setErrors((prev) => ({ ...prev, email: "invalid email" }));
      isValid = false;
    }
    if (password.length < 4) {
      setErrors((prev) => ({ ...prev, password: "invalid password" }));
      isValid = false;
    }
    if (confirmPassword.length < 4) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "invalid confirm password",
      }));
      isValid = false;
    }

    if (confirmPassword !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "passwords do not match",
      }));
      isValid = false;
    }

    if (isValid) {
      const response = await submitForm(
        username,
        email,
        password,
        confirmPassword
      );
      setFormData(emptyForm);
      setSubmitResponse(response);
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <StyledFieldSet>
          <StyledHeader>
            <h2>Registration Form</h2>
            {submitResponse && (
              <StyledResponse status={submitResponse.status}>
                {submitResponse.message}
              </StyledResponse>
            )}
          </StyledHeader>
          <StyledField>
            <label htmlFor="username">
              Username<sup>*</sup>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <StyledFormError>{errors.username}</StyledFormError>
            )}
          </StyledField>
          <StyledField>
            <label htmlFor="email">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <StyledFormError>{errors.email}</StyledFormError>}
          </StyledField>
          <StyledField>
            <label htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <StyledFormError>{errors.password}</StyledFormError>
            )}
          </StyledField>
          <StyledField>
            <label htmlFor="confirmPassword">
              Confirm Password<sup>*</sup>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <StyledFormError>{errors.confirmPassword}</StyledFormError>
            )}
          </StyledField>
          <div>
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
        </StyledFieldSet>
      </form>
    </StyledContainer>
  );
};

export default RegistrationForm;
