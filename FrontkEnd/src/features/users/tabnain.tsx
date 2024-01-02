import React, { useState } from "react";
import styled from "styled-components";

interface User {
  name: string;
  age: number;
  email: string;
}

const UserDetails: React.FC<{ user: User }> = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background-color: lightblue;
    color: white;
    margin-top: 16px;
    cursor: pointer;
  `;

  const Details = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: lightgray;
  `;

  return (
    <Container>
      <h2>{user.name}</h2>
      <Button onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>
      <Details>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </Details>
    </Container>
  );
};

export default UserDetails;