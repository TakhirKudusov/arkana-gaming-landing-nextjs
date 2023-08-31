"use client";

import styled from "styled-components";
import Link from "next/link";
import { Route } from "@/lib/enums/route";
import { mohave } from "@/lib/constants/fonts";
import { Menu } from "@styled-icons/material/Menu";
import { useAppDispatch } from "@/redux/utils/hooks";
import { openMenu } from "@/redux/slicers/mobileMenuStateSlicer";
import Logo from "@/components/layout/logo";

const StyledHeader = () => {
  const dispatch = useAppDispatch();

  const handleBurgerButtonClick = () => {
    dispatch(openMenu());
  };

  return (
    <Wrapper>
      <Container>
        <Logo />
        <MenuContainer>
          <Link href={Route.home}>
            <MenuItem className={mohave.className}>home</MenuItem>
          </Link>
          <Link href={Route.games}>
            <MenuItem className={mohave.className}>games</MenuItem>
          </Link>
          <Link href={Route.contacts}>
            <MenuItem className={mohave.className}>contacts</MenuItem>
          </Link>
        </MenuContainer>
        <BurgerButton onClick={handleBurgerButtonClick}>
          <MenuIcon />
        </BurgerButton>
      </Container>
    </Wrapper>
  );
};

const MenuIcon = styled(Menu)`
  color: white;
`;

const BurgerButton = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;

const MenuItem = styled.p`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  transition: 100ms linear;
  @media screen and (max-width: 1024px) {
    font-size: 27px;
  }
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  column-gap: 55px;
  @media screen and (max-width: 1024px) {
    column-gap: 47px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 36px 127px 27px 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    padding: 31px 90px 23px 65px;
  }
  @media screen and (max-width: 768px) {
    padding: 26px 65px 20px 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 22px 22px 17px 22px;
  }
`;

const Wrapper = styled.header`
  width: 100%;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export default StyledHeader;
