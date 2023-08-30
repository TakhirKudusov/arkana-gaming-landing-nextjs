import styled, { keyframes } from "styled-components";
import bigLogoPic from "@/../public/images/big-logo.webp";
import Image from "next/image";
import Button from "@/lib/components/button/button";
import Link from "next/link";
import { Route } from "@/lib/enums/route";
import { ButtonType } from "@/lib/components/button/utils/enums/buttonType";
import arrowPic from "@/../public/images/arrow.webp";
import { useWindowSize } from "react-use";
import { useCallback } from "react";

const FirstSection = () => {
  const { height } = useWindowSize();

  const handleArrowClick = useCallback(() => {
    window.scrollTo({
      top: height - 108,
      behavior: "smooth",
    });
  }, [height]);

  return (
    <Container>
      <MainBlock>
        <ImageWrapper>
          <Image src={bigLogoPic} alt="Big logo image" loading="lazy" fill />
        </ImageWrapper>
        <Link href={Route.games}>
          <Button buttonType={ButtonType.unfilled}>games</Button>
        </Link>
      </MainBlock>
      <ArrowImageContainer>
        <ArrowImageWrapper onClick={handleArrowClick}>
          <Image src={arrowPic} alt="Arrow icon" loading="lazy" fill />
        </ArrowImageWrapper>
      </ArrowImageContainer>
    </Container>
  );
};

const upDownAnimation = keyframes`
  0% {
    top: 0
  }
  50% {
    top: 15px
  }
  100% {
    top: 0
  }
`;

const ArrowImageContainer = styled.div`
  height: 0;
  overflow: visible;
  position: absolute;
  bottom: 116px;
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

const ArrowImageWrapper = styled.div`
  position: relative;
  width: 89px;
  height: 102px;
  transition: 0.1s linear;
  cursor: pointer;
  animation: ${upDownAnimation} linear infinite 1000ms;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 446px;
  height: 232px;
  @media screen and (max-width: 1024px) {
    width: 424px;
    height: 220px;
  }
  @media screen and (max-width: 768px) {
    width: 403px;
    height: 209px;
  }
  @media screen and (max-width: 425px) {
    width: 307px;
    height: 159px;
  }
`;

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 46px;
  align-items: center;
  @media screen and (max-width: 425px) {
    row-gap: 73px;
  }
`;

const Container = styled.section`
  min-height: calc(100vh - 144px);
  width: 100%;
  display: flex;
  background: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 123px);
  }
  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 105px);
  }
  @media screen and (max-width: 425px) {
    min-height: calc(100vh - 108px);
    justify-content: flex-start;
    padding-top: 36px;
  }
  @media screen and (max-width: 375px) {
    min-height: calc(100vh - 90px);
  }
`;

export default FirstSection;
