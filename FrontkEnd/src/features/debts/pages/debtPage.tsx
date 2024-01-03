import styled, { createGlobalStyle } from "styled-components";
import menuIcon from "../../../assets/images/menuIcon.png";
import mailIcon from "../../../assets/images/mailIcon.png";
import notificationsIcon from "../../../assets/images/notificationsIcon.png";
import accountCircle from "../../../assets/images/AccountCircle.png";
// import moreIcon from "../../../assets/images/MoreIcon.png";
import CustomFont from "../../../assets/fonts/BlackOpsOne-Regular.ttf";
import { user } from "../../../assets/data";
import man from "../../../assets/images/man.jpg";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "base";
    src: url(${CustomFont}) format('truetype');
    font-style: italic 
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AppBar = styled.div`
  background-color: #add8e6;
  color: white;
  padding: 15px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 10vh;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const IconGrup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const IconButton = styled.button`
  background-color: #add8e6;
  cursor: pointer;
  padding: 5px;
  margin: 5px 15px;
  border: 2px solid transparent;
  transition: border-color 0.6s ease;
  &:hover {
    border-color: #42a3db;
  }
`;

const Typography = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
  font-family: "base";
  letter-spacing: 1.5px;
  font-weight: 400;
`;

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${menuIcon});
  background-size: cover;

  &:hover {
    background-image: url(${menuIcon});
  }
`;
const MailIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${mailIcon});
  background-size: cover;

  &:hover {
    background-image: url(${mailIcon});
  }
`;
const NotificationsIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${notificationsIcon});
  background-size: cover;

  &:hover {
    background-image: url(${notificationsIcon});
  }
`;
const AccountCircle = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${accountCircle});
  background-size: cover;

  &:hover {
    background-image: url(${accountCircle});
  }
`;
// const MoreIcon = styled.div`
//   width: 24px;
//   height: 24px;
//   background-image: url(${moreIcon});
//   background-size: cover;

//   &:hover {
//     background-image: url(${moreIcon});
//   }
// `;

const CustomerDetails = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const CustomerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  margin: 7px 0 7px 0;

`;

const CustomerProfileCard = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 78vh;
`;

const UnderBar = styled.div`
  background-color: #add8e6;
  color: white;
  padding: 15px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 5vh;
`;

export default function DebtPage() {
  return (
    <PageContainer>
      <Box>
        <AppBar>
          <Toolbar>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography>ServEase-Nexus</Typography>
            </Toolbar>
            <Toolbar>
              <IconButton>
                <MailIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <AccountCircle />
              </IconButton>
              {/* <IconButton>
                <MoreIcon />
              </IconButton> */}
            </Toolbar>
          </Toolbar>
        </AppBar>
        <MainContent>
          <CustomerProfileCard>
            <h3>Service provider details</h3>
            <br/>
            <CustomerImage src={`${man}`} alt="Customer" />
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
          </CustomerProfileCard>
        </MainContent>
        <UnderBar>
              Kodcode Web development
        </UnderBar>
      </Box>
    </PageContainer>
  );
}
