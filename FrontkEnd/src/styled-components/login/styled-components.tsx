import styled from "styled-components";

export const LoginPageDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

// export const Label = styled.label<InputTypeProps>`
//   position: absolute;
//   top: 50%;
//   left: ${({ type }) => (type === "date" ? "36px" : "5px")};
//   transform: translateY(-50%);
//   font-size: 16px;
//   color: #6e0082;
//   pointer-events: none;
//   transition: 0.5s;
// `;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  /* box-sizing: border-box; */
  font-size: 16px;
  color: #6e0082;
  padding: 10px;
  background: transparent;
  /* outline: none; */
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;
