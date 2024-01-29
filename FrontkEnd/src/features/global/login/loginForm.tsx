import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  FormTitle,
  FormField,
  Label,
  Input,
  SubmitButton,
  LoginForm,
} from "../../../styled-components/login/styled-components";
import { FormDataInF } from "./formInterface";

const LoginsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataInF>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can make a fetch or axios request to your server with formData
    console.log("Sending request to server:", formData);
    // Add your API request logic here
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <FormTitle>התחברות</FormTitle>
      <FormField>
        <Label htmlFor="username"> אימייל או שם משתמש:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">סיסמא:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </FormField>
      <SubmitButton type="submit">התחבר</SubmitButton>
    </LoginForm>
  );
};

export default LoginsForm;
