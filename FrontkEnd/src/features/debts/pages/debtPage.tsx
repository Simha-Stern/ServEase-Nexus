import React from "react";
import styled from "styled-components";
import menuIcon from "../../../assets/menuIcon.png";
import mailIcon from "../../../assets/mailIcon.png";
import notificationsIcon from "../../../assets/notificationsIcon.png";
import accountCircle from "../../../assets/AccountCircle.png";
import moreIcon from "../../../assets/MoreIcon.png";


const AppBar = styled.div`
  background-color: #add8e6;
  color: white; /* Text color */
  padding: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconGrup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.button`
  cursor: pointer;
  padding: 5px;
  margin: 5px 20px;
  border: 2px solid transparent; 
  transition: border-color 0.6s ease; 
  &:hover {
    border-color: #87ceeb;
  }
`;

const Typography = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 10px;
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
const MoreIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${moreIcon});
  background-size: cover;

  &:hover {
    background-image: url(${moreIcon});
  }
`;
export default function DebtPage() {
  return (
    <div style={{ padding: 0 }}>
      <Box>
        <AppBar>
          <Toolbar>
            <IconGrup>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography>ServEase-Nexus</Typography>
            </IconGrup>
            <IconGrup>
              <IconButton>
                <MailIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <AccountCircle />
              </IconButton>
              <IconButton>
                <MoreIcon />
              </IconButton>
            </IconGrup>
          </Toolbar>
        </AppBar>
        {/* Other components */}
      </Box>
    </div>
  );
}
