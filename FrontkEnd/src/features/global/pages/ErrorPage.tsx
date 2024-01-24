import ROUTES from "../../../router/models/routes";
import { useNavigate } from "react-router-dom";
import {
  Heading2,
  Heading5,
  ContentWrapper,
  ReturnButton,
  ImageWrapper,
  Container,
  Divider,
} from "../styleds/errorStyle";
import { useTheme } from "styled-components";

const ErrorPage = () => {
  return (
    <Container>
      <Heading2>Error 404</Heading2>
      <Heading5>Page not found</Heading5>
      <Divider />

      <ContentWrapper>
        <div>
          <Heading5>
            Oops... The requested URL was not found on this server
          </Heading5>
          <ReturnButton onClick={() => navigate(ROUTES.ROOT)}>
            Click here to return to the home page...
          </ReturnButton>
        </div>
        <ImageWrapper>
          <img
            width="100%"
            src={
              theme.palette.mode === "dark"
                ? "/images/broken-robot-wight.png"
                : "/images/broken-robot.png"
            }
            alt="broken robot"
          />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default ErrorPage;
