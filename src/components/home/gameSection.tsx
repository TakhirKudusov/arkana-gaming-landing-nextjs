import styled from "styled-components";
import SectionHeader from "@/lib/components/sectionHeader/sectionHeader";
import Image from "next/image";
import posterPic from "@/../public/images/poster.png";
import { mohave } from "@/lib/constants/fonts";
import SectionText from "@/lib/components/sectionText/sectionText";
import Button from "@/lib/components/button/button";
import { ButtonType } from "@/lib/components/button/utils/enums/buttonType";
import Link from "next/link";
import { Route } from "@/lib/enums/route";
import posterMobilePic from "@/../public/images/poster-mobile.png";

const GameSection = () => {
  return (
    <Container>
      <SectionHeader>latest game</SectionHeader>
      <ImageWrapper>
        <LaptopImageContainer>
          <Image
            src={posterPic}
            alt="Nice poster with rocket on mars"
            loading="lazy"
            fill
          />
        </LaptopImageContainer>
        <MobileImageContainer>
          <Image
            src={posterMobilePic}
            alt="Nice poster with rocket on mars"
            loading="lazy"
            fill
          />
        </MobileImageContainer>
      </ImageWrapper>
      <SubHeaderText className={mohave.className}>crash on mars</SubHeaderText>
      <StyledText>
        Welcome to&nbsp;the world of&nbsp;adrenaline-pumping fun and incredible
        explosions in&nbsp;the game &laquo;Crash on&nbsp;Mars&raquo;!
        In&nbsp;this thrilling crash-game, you&rsquo;ll ascend to&nbsp;the skies
        aboard a&nbsp;powerful rocket, preparing for the most spectacular
        explosion of&nbsp;your life. But be&nbsp;cautious: time is&nbsp;against
        you. You&rsquo;ll have to&nbsp;maneuver the rocket with incredible care
        and boldness, or&nbsp;else it&nbsp;will shatter into a&nbsp;fiery ball
        upon the ground.
      </StyledText>
      <ButtonsContainer>
        <Link href={Route.crashOnMars}>
          <Button buttonType={ButtonType.outlined}>read more</Button>
        </Link>
        <Link
          href="https://games.arkana-gaming.com/crash-on-mars"
          target="_blank"
        >
          <Button>try it</Button>
        </Link>
      </ButtonsContainer>
    </Container>
  );
};

const StyledText = styled(SectionText)`
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 65px;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    row-gap: 36px;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    margin-top: 32px;
  }
`;

const SubHeaderText = styled.h3`
  color: #000;
  font-size: 36px;
  font-weight: 500;
  line-height: 158.4%;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const MobileImageContainer = styled.div`
  position: relative;
  width: 302px;
  height: 409px;
  display: none;
  overflow: hidden;
  border-radius: 30px;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

const LaptopImageContainer = styled.div`
  position: relative;
  width: 823px;
  height: 514px;
  border-radius: 50px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    border-radius: 40px;
    width: 617px;
    height: 386px;
  }
  @media screen and (max-width: 768px) {
    width: 412px;
    height: 257px;
    border-radius: 30px;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 43px;
  width: 1266px;
  @media screen and (max-width: 1266px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    row-gap: 37px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 21px;
  }
`;

export default GameSection;
