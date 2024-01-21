// CustomerProfileCard.js
import React from 'react';
import styled from 'styled-components';
import { CustomerProfileCardContainer, Title, CustomerImage } from '../../../styled-components/styled-components';
import {userIF} from '../interfaces/debtInterface';
import { UserContextType } from '../hooks/userContext';
interface CustomerProfileCardProps {
  user: userIF;
}
const CustomerProfileCard: React.FC<CustomerProfileCardProps > = ({ user }) => {
  return (
    <CustomerProfileCardContainer>
      <Title>Service provider details</Title>
      <CustomerImage src={user.image.url /*|| defultman*/} alt={user.image.alt || "Customer"} />
      {/* ... Other customer details */}
    </CustomerProfileCardContainer>
  );
};

export default CustomerProfileCard;
