import styled from "styled-components";

export const Register = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17.5px);
  -webkit-backdrop-filter: blur(17.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const FormLabel = styled.input`
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  border: 1px solid #fff;
`;
export const ButtonSubmit = styled.button`
  background-color: #0091d2;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  color: #fff;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid #fff;
    background-color: #fff;
    color: #0091d2;
  }
`;
export const Error = styled.p`
  color: Red;
  text-shadow: 0.5px 0.5px 0.5px #000;
  font-size: 8px;
  margin: 2px;
`;
