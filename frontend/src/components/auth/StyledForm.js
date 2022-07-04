import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 350px;
  width: 100%;
  margin: 2rem auto;
  h2 {
    margin-bottom: 1rem;
    font-size: 40px;
  }
  button,
  input {
    height: 45px;
    width: 100%;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #0A1931;
    margin-bottom: 1.5rem;
    font-size: 17px;
    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }
  button {
    cursor: pointer;
    &:focus {
      border: none;
    }
    background-color: #0A1931;
    color: white;
    font-size: 20px;
    border-radius: 5px;
  }
  p {
    font-size: 14px;
    color: red;
  }
  h3 {
    text-align: center;
  }
  h3 a {
    text-decoration: none;
    color: #1363DF;
  }
`;