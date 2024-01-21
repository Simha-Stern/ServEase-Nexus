// debtPage.js
import { useState } from "react";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import MainContent from "../components/MainContent";
import { Container, Box } from "../../../styled-components/styled-components";
import { userIF } from "../interfaces/debtInterface";
import UserContextProvider from "../hooks/userContext";

const DebtPage = () => {
  // const [MoreIcons, setMoreIcons] = useState(false);

  return (
    <Container>
      <Box>
        <AppBar />
        <UserContextProvider>
          <MainContent />
        </UserContextProvider>
        <Footer />
      </Box>
    </Container>
  );
};

export default DebtPage;
