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
import { HeaderContext } from "../hooks/HeaderContext";


// Main div for all pages.
const PageContainer = styled.div`

`;

// Main div for this page.


// header of the page.
const AppBar = styled.div`

`;

// A shell for the icons in the header.
const Toolbar = styled.div`

`;

// Button with an icon.
const IconButton = styled.button`

`;

// Site title (text).


// More icon... for small screens.


// Envelope for user private text.
const CustomerDetails = styled.div`

`;

// User's photo.
const CustomerImage = styled.img`

`;

// Frame for the page.
const MainContent = styled.div`

`;

// Frame for user details.
const RightContent = styled.div`

`;

// Frame for bebt details.
const LeftContent = styled.div`

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

export default function DebtPage() {
  const context = useContext(HeaderContext);
  if (!context) return null;
  const { MoreIcons, setMoreIcons } = context;

  return (
    <PageContainer>
      <Box>
        <AppBar>
          <Toolbar>
            <Toolbar>
              <IconButton style={{ display: "block" }}>
                <img src={`${menuIcon}`} style={{ margin: 0, padding: 0 }} />
              </IconButton>
              {MoreIcons ? <Typography>ServEase-Nexus</Typography> :<Toolbar>
              <IconButton style={{display:"block"}}>
                <img src={`${mailIcon}`} style={{ margin: 0, padding: 0 }} />
              </IconButton>
              <IconButton style={{display:"block"}}>
                <img
                  src={`${notificationsIcon}`}
                  style={{ margin: 0, padding: 0 }}
                />
              </IconButton>
              <IconButton style={{display:"block"}}>
                <img
                  src={`${accountCircle}`}
                  style={{ margin: 0, padding: 0 }}
                />
              </IconButton>
              <MoreIcon onClick={() => setMoreIcons(!MoreIcons)}>
                  <img src={`${moreIcon}`} style={{ margin: 0, padding: 0 }} />
                </MoreIcon>
                </Toolbar>}
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
              <MoreIcon onClick={() => setMoreIcons(!MoreIcons)}>
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
