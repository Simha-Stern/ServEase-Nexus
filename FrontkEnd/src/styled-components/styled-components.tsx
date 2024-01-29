// styled-components.js

import styled from "styled-components";
import { Link } from "react-router-dom"; // If using React Router
import { darken } from "polished";

export const BoxDiv = styled.div`
  width: 98vw;
  min-height: 98vh;
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`;
export const HomePageDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const HeaderDiv = styled.div`
  padding: 1%;
  background-color: #add8e6;
  color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: #000000 solid 1px; */
`;
export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-height: 100%; */
  border: #000000 solid 1px;
`;
export const FooterDiv = styled.div`
  position: static;
  bottom: 0;
  background-color: #add8e6;
  color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  bottom: 0;
  height: 90px;
  text-align: center;
  /* border: #000000 solid 1px; */
`;
export const SidebarDiv = styled.div`
  /* position: fixed; */
  /* top: 12vh; */
  /* left: 0; */
  height: 50em;
  /* display: block; */
  /* z-index: 10; */
  /* transition: transform 0.3s ease-in-out; */
  width: 30%;
  text-align: center;
  border: #000000 solid 1px;
`;
export const ContentDiv = styled.div`
  text-align: center;
  height: 50em;
  width: 70%;
  border: #000000 solid 1px;
`;
export const DropDownDiv = styled.ul``;
export const DropDownItem = styled.li`
  list-style: none;
`;

export const SideList = styled.ul``;

export const SideListItem = styled.li`
  list-style: none;
`;
export const InfosList = styled.ul``;

export const InfosListItem = styled.li`
  list-style: none;
`;
export const Container = styled.div`
  margin: 0 auto;
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const AppBarContainer = styled.div`
  padding: 10px;
  background-color: #add8e6;
  color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  height: 10%;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const IconButton = styled.button`
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

export const Typography = styled.div`
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

export const MoreIcon = styled.button`
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

export const CustomerProfileCardContainer = styled.div`
  font-weight: bold;
  margin-bottom: 3%;
  /* font-size: 3dvd; */
  @media screen and (max-width: 576px) {
    margin-bottom: 3%;
    font-size: 3dvw;
  }
`;

export const CustomerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.h2`
  /* Add styling for the title */
`;

// Add other styled components as needed

export const MainContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0 7px 0;
  width: 100%;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  margin: 7px 0 7px 0;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  margin: 7px 0 7px 0;
`;

export const FooterContainer = styled.footer`
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
