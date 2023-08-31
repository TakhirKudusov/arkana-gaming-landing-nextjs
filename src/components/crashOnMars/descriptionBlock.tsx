import styled from "styled-components";
import { mohave, montserrat } from "@/lib/constants/fonts";
import planetPic from "@/../public/images/planet.webp";
import Image from "next/image";
import marsPic from "@/../public/images/mars.png";
import crashOnMarsLogo from "@/../public/images/crashOnMarsLogo.png";

const DescriptionBlock = () => {
  return (
    <Container>
      <ContentContainer>
        <TextBlock>
          <SubHeader className={mohave.className}>about game</SubHeader>
          <DescriptionText className={montserrat.className}>
            This game is&nbsp;about a&nbsp;brave spaceship crew who take off
            from mars in&nbsp;hopes of&nbsp;reaching other humans. Crash
            on&nbsp;Mars is&nbsp;part of&nbsp;a&nbsp;connected universe where
            Martians are also present, and not all of&nbsp;them are friendly.
          </DescriptionText>
        </TextBlock>
        <PlanetImageWrapper>
          <Image
            src={planetPic}
            alt="Cartoon planet image"
            fill
            loading="lazy"
          />
        </PlanetImageWrapper>
      </ContentContainer>
      <ContentContainer>
        <MarsImageWrapper>
          <Image src={marsPic} alt="Cartoon Mars image" fill loading="lazy" />
        </MarsImageWrapper>
        <TextBlock>
          <SubHeader className={`${mohave.className} reversed`}>
            what to expect?
          </SubHeader>
          <DescriptionText className={`${montserrat.className} reversed`}>
            This is&nbsp;a&nbsp;classic crash game where the player must manage
            to&nbsp;sell their bet before the rocket crashes. Average winnings
            vary between 1.4 and 1.9&nbsp;odds. The maximum possible winnings
            in&nbsp;an&nbsp;individual round is&nbsp;999 times the bet amount.
          </DescriptionText>
        </TextBlock>
      </ContentContainer>
      <ContentContainer className="sm-column">
        <TextBlock>
          <SubHeader className={mohave.className}>on the board</SubHeader>
          <DescriptionText className={montserrat.className}>
            Climb aboard the spaceship and help the crew get off the red planet,
            but be&nbsp;careful if&nbsp;you feel anything wrong, the eject
            button is&nbsp;under the seat!
          </DescriptionText>
        </TextBlock>
        <CrashOnMarsLogoWrapper>
          <Image
            src={crashOnMarsLogo}
            alt="Crash on Mars game logo"
            fill
            loading="lazy"
          />
        </CrashOnMarsLogoWrapper>
      </ContentContainer>
    </Container>
  );
};

const CrashOnMarsLogoWrapper = styled.div`
  position: relative;
  min-width: 320px;
  height: 216px;
  margin-left: 150px;
  @media screen and (max-width: 1440px) {
    margin-left: 75px;
  }
  @media screen and (max-width: 1024px) {
    min-width: 250px;
    height: 168px;
    margin-left: 50px;
  }
  @media screen and (max-width: 768px) {
    min-width: 320px;
    height: 216px;
    margin-left: 0;
  }
`;

const MarsImageWrapper = styled.div`
  position: relative;
  margin-right: 116px;
  min-width: 430px;
  height: 342px;
  transform: scale(-1, 1);
  @media screen and (max-width: 1440px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 55px;
    min-width: 300px;
    height: 239px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PlanetImageWrapper = styled.div`
  position: relative;
  min-width: 433px;
  height: 433px;
  margin-left: 58px;
  @media screen and (max-width: 1440px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 1024px) {
    min-width: 300px;
    height: 300px;
    margin-left: 25px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DescriptionText = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 500;
  line-height: 158.4%;
  &.reversed {
    text-align: end;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

const SubHeader = styled.h3`
  color: #000;
  font-size: 36px;
  font-weight: 500;
  line-height: 158.4%;
  text-transform: uppercase;
  &.reversed {
    text-align: end;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  height: fit-content;
  @media screen and (max-width: 1024px) {
    row-gap: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.sm-column {
    @media screen and (max-width: 768px) {
      flex-direction: column;
      row-gap: 60px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1266px;
  row-gap: 120px;
  margin-bottom: 150px;
  @media screen and (max-width: 1440px) {
    width: 100%;
    padding: 0 87px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 65px;
    margin-bottom: 120px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    row-gap: 103px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 22px;
  }
`;

export default DescriptionBlock;
