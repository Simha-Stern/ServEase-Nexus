import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import menuIcon from "../../../assets/images/menuIcon.png";
import mailIcon from "../../../assets/images/mailIcon.png";
import notificationsIcon from "../../../assets/images/notificationsIcon.png";
import accountCircle from "../../../assets/images/AccountCircle.png";
import moreIcon from "../../../assets/images/MoreIcon.png";
import CustomFont from "../../../assets/fonts/BlackOpsOne-Regular.ttf";
import { user } from "../../../assets/data";
import defultman from "../../../assets/images/defultman.jpg";
import { debt } from "../../../assets/data";
import { createContext, useContext, useState } from "react";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "base";
    src: url(${CustomFont}) format('truetype');
    font-style: italic 
  }
  `;

// Main div for all pages.
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Main div for this page.
const Box = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 1%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  @media screen and (max-width: 576px) {
    padding: 5px;
    width: 100%;
  }
`;

// header of the page.
const AppBar = styled.div`
  background-color: #add8e6;
  color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 10%;
`;

// A shell for the icons in the header.
const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

// Button with an icon.
const IconButton = styled.button`
  background-color: #add8e6;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.6s ease;
  padding: 0.3rem 1rem;
  margin: 0 20px;
  height: 70%;
  &:hover {
    border-color: #42a3db;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

// Site title (text).
const Typography = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
  font-family: "base";
  letter-spacing: 1.5px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 1rem;
    margin-left: 1px;
    letter-spacing: 1px;
    /* padding: 3px; */
  }
`;

// More icon... for small screens.
const MoreIcon = styled.button`
  display: none;
  &:hover {
    border-color: #42a3db;
  }
  @media screen and (max-width: 576px) {
    display: block;
    background-color: #add8e6;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.6s ease;
    padding: 0.3rem 1rem;
    margin: 0 20px;
    height: 70%;
    &:hover {
      border-color: #42a3db;
    }
  }
`;

// Envelope for user private text.
const CustomerDetails = styled.div`
  font-weight: bold;
  margin-bottom: 3%;

  /* font-size: 3dvd; */
  @media screen and (max-width: 576px) {
    margin-bottom: 3%;
    font-size: 3dvw;
  }
`;

// User's photo.
const CustomerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`;

// Frame for the page.
const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0 7px 0;
  width: 100%;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

// Frame for user details.
const RightContent = styled.div`
  flex: 1;
  display: flex;
  margin: 7px 0 7px 0;
`;

// Frame for bebt details.
const LeftContent = styled.div`
  flex: 1;
  display: flex;
  margin: 7px 0 7px 0;
`;

// User private card.
const CustomerProfileCard = styled.div`
  width: 25vw;
  padding: 0.7%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 78vh;
  @media screen and (max-width: 576px) {
    width: 98vw;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// Universal title.
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 10px;
  font-family: "base";
  letter-spacing: 1.5px;
  font-weight: 400;
  /* text-align: center; */
  @media screen and (max-width: 576px) {
    font-size: 1rem;
    margin-left: 0;
    letter-spacing: 1px;
    padding: 0;
  }
`;

// User information.
const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  text-align: center;
  /* height: 40vh; */
`;

// Footer.
const Footer = styled.div`
  background-color: #add8e6;
  color: white;
  /* padding: 15px; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 5vh;
  text-align: center;
  text-overflow: initial;
  align-items: center;
  justify-content: center;
`;

// Email send button.
const EmailSend = styled.a`
  text-decoration: none;
  color: #974ac4;
  font-weight: bold;
  transition: transform 0.3s ease-in-out;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 200px) {
    font-size: 1em;
  }
  @media (max-width: 160px) {
    font-size: 0.7em;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #ff00ff;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::before {
    transform-origin: bottom left;
    transform: scale(1);
  }
`;

// debt details card.
const DebtCard = styled.div`
  width: 70vw;
  padding: 0.7%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 78vh;
  @media screen and (max-width: 576px) {
    width: 98vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const VisibilityContext = createContext({
  visibleComponent: 'toolbar', // Default value for visibility context
  toggleVisibility: () => {}, // Default toggle function
});

const VisibilityController = () => {
  const { visibleComponent, toggleVisibility } = useContext(VisibilityContext);

  return (
    <ThemeProvider theme={{ visibleComponent }}>
      {visibleComponent === 'toolbar' ? (
        <Toolbar>
          {/* Your content for Toolbar */}
          <TypographyContent />
          <ToggleButton onClick={toggleVisibility}>Toggle</ToggleButton>
        </Toolbar>
      ) : (
        <Typography>
          {/* Your content for Typography */}
          <TypographyContent />
          <ToggleButton onClick={toggleVisibility}>Toggle</ToggleButton>
        </Typography>
      )}
    </ThemeProvider>
  );
};

// Component to handle shared content between Toolbar and Typography
const TypographyContent = () => {
  // Place any shared content between Toolbar and Typography here
  return <div>Shared Content</div>;
};

// Component to manage visibility and render Toolbar or Typography
const YourComponent = () => {
  const [visibleComponent, setVisibleComponent] = useState('toolbar');

  const toggleVisibility = () => {
    setVisibleComponent((prev) => (prev === 'toolbar' ? 'typography' : 'toolbar'));
  };

  return (
    <VisibilityContext.Provider value={{ visibleComponent, toggleVisibility }}>
      <div>
        {/* Render the component based on visibility */}
        <VisibilityController />
      </div>
    </VisibilityContext.Provider>
  );
};

export default function DebtPage() {
  return (
    <PageContainer>
      <Box>
        <AppBar>
          <Toolbar>
            <Toolbar>
              <IconButton style={{ display: "block" }}>
                <img src={`${menuIcon}`} style={{ margin: 0, padding: 0 }} />
              </IconButton>
              <Typography>ServEase-Nexus</Typography>
            </Toolbar>
            <Toolbar>
              <IconButton>
                <img src={`${mailIcon}`} style={{ margin: 0, padding: 0 }} />
              </IconButton>
              <IconButton>
                <img
                  src={`${notificationsIcon}`}
                  style={{ margin: 0, padding: 0 }}
                />
              </IconButton>
              <IconButton>
                <img
                  src={`${accountCircle}`}
                  style={{ margin: 0, padding: 0 }}
                />
              </IconButton>
              <div>

              <MoreIcon>
                <img src={`${moreIcon}`} style={{ margin: 0, padding: 0 }} />
              </MoreIcon>
              </div>
            </Toolbar>
          </Toolbar>
        </AppBar>
        <MainContent>
          <RightContent>
            <CustomerProfileCard>
              <CustomerInfo>
                <Title>Service provider details</Title>
                <CustomerImage
                  src={`${user.pupel.image || defultman}`}
                  alt="Customer"
                />
              </CustomerInfo>
              <CustomerInfo>
                <CustomerDetails>
                  Name:{" "}
                  {`${user.pupel.name.first_name} ${user.pupel.name.last_name}`}
                </CustomerDetails>
                <CustomerDetails>
                  Contact info: {`${user.pupel.phone} ${user.pupel.email}`}
                </CustomerDetails>
                <CustomerDetails>
                  Address:{" "}
                  {`${user.pupel.address.streat} ${user.pupel.address.house_number} ${user.pupel.address.city}`}
                </CustomerDetails>
                <CustomerDetails>
                  <EmailSend href={`mailto:${user.pupel.email}`}>
                    Send a mail to {user.pupel.name.first_name}
                  </EmailSend>
                </CustomerDetails>
              </CustomerInfo>
            </CustomerProfileCard>
          </RightContent>
          <LeftContent>
            <DebtCard>hghghghgh</DebtCard>
          </LeftContent>
        </MainContent>
        <Footer>Kodcode Web development</Footer>
      </Box>
    </PageContainer>
  );
}
