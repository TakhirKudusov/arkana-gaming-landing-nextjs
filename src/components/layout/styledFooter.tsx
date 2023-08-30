"use client";

import styled from "styled-components";
import { mohave } from "@/lib/constants/fonts";

const StyledFooter = () => {
  return (
    <Container>
      <Text className={mohave.className}>
        &copy;&nbsp;2023 Arkana-gaming.com. All rights reserved.
      </Text>
    </Container>
  );
};

const Text = styled.p`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 27px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

const Container = styled.footer`
  width: 100%;
  background-color: black;
  padding: 37px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 42px 10px;
  }
`;

export default StyledFooter;
