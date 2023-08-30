"use client";

import styled, { keyframes } from "styled-components";
import { Spinner3 } from "@styled-icons/icomoon/Spinner3";

const Loading = () => {
  return (
    <Container>
      <StyledSpinner />
    </Container>
  );
};

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  8.33% {
    transform: rotate(30deg);
  }
  16.66% {
    transform: rotate(60deg);
  }
  25% {
    transform: rotate(90deg);
  }
  33.33% {
    transform: rotate(120deg);
  }
  41.66% {
    transform: rotate(150deg);
  }
  50% {
    transform: rotate(180deg);
  }
  58.33% {
    transform: rotate(210deg);
  }
  66.66% {
    transform: rotate(240deg);
  }
  75% {
    transform: rotate(270deg);
  }
  83.33% {
    transform: rotate(300deg);
  }
  91.66% {
    transform: rotate(330deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(Spinner3)`
  width: 75px;
  animation: ${spinAnimation} infinite steps(1) 500ms;
  @media screen and (max-width: 1440px) {
    width: 65px;
  }
  @media screen and (max-width: 1024px) {
    width: 55px;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
  }
  @media screen and (max-width: 375px) {
    width: 45px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

export default Loading;
