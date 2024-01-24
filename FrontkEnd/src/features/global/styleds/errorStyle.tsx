import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Heading2 = styled.h1`
  font-size: 2em;
`;

export const Heading5 = styled.h2`
  font-size: 1.5em;
`;

export const Divider = styled.div`
  margin: 2em 0;
  border-bottom: 1px solid #ccc;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 2em;
`;

export const OopsText = styled.p`
  font-size: 1.5em;
`;

export const ReturnButton = styled.button`
  background-color: transparent;
  color: red; // Assuming red is your error color
  border: none;
  cursor: pointer;
  font-size: 1em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
