"use client";

import { slide as Menu } from "react-burger-menu";
import { useAppDispatch, useAppSelector } from "@/redux/utils/hooks";
import { SlicerName } from "@/redux/slicers/utils/enums/slicerName";
import { MobileMenuState } from "@/redux/slicers/utils/types/mobileMenuState";
import { closeMenu } from "@/redux/slicers/mobileMenuStateSlicer";
import styled from "styled-components";
import Logo from "@/components/layout/logo";
import { Close } from "@styled-icons/material/Close";
import { mohave } from "@/lib/constants/fonts";
import Link from "next/link";
import { Route } from "@/lib/enums/route";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const dispatch = useAppDispatch();

  const pathname = usePathname();

  const { isOpened } = useAppSelector<MobileMenuState>(
    (state) => state[SlicerName.MOBILE_MENU_STATE],
  );

  useEffect(() => {
    handleMenuClose();
  }, [pathname]);

  const handleMenuClose = () => {
    dispatch(closeMenu());
  };

  return (
    <Menu
      isOpen={isOpened}
      customBurgerIcon={false}
      customCrossIcon={false}
      onClose={handleMenuClose}
      width={320}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
    >
      <Container>
        <MenuHeader>
          <Logo />
          <CloseButton onClick={handleMenuClose}>
            <CloseIcon />
          </CloseButton>
        </MenuHeader>
        <MenuLinksContainer>
          <Link href={Route.home}>
            <MenuItem className={mohave.className}>home</MenuItem>
          </Link>
          <Link href={Route.games}>
            <MenuItem className={mohave.className}>games</MenuItem>
          </Link>
          <Link href={Route.contacts}>
            <MenuItem className={mohave.className}>contacts</MenuItem>
          </Link>
        </MenuLinksContainer>
      </Container>
    </Menu>
  );
};

const MenuItem = styled.p`
  color: #fff;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  transition: 100ms linear;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media screen and (max-width: 375px) {
    row-gap: 20px;
  }
`;

const CloseIcon = styled(Close)`
  color: white;
`;

const CloseButton = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  transition: 100ms linear;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
  @media screen and (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex !important;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  background-color: black;
  row-gap: 36px;
  padding: 26px 26px 0 50px;
  @media screen and (max-width: 425px) {
    padding: 22px 26px 17px 26px;
  }
`;

export default MobileMenu;
