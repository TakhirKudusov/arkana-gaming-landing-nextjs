import styled from "styled-components";
import { mohave, montserrat } from "@/lib/constants/fonts";
import planetPic from "@/../public/images/planet.webp";
import Image from "next/image";
import marsPic from "@/../public/images/mars.png";

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
      <ContentContainer>
        <TextBlock>
          <SubHeader className={mohave.className}>on the board</SubHeader>
          <DescriptionText className={montserrat.className}>
            Climb aboard the spaceship and help the crew get off the red planet,
            but be&nbsp;careful if&nbsp;you feel anything wrong, the eject
            button is&nbsp;under the seat!
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
    </Container>
  );
};

const MarsImageWrapper = styled.div`
  position: relative;
  margin-right: 116px;
  min-width: 430px;
  height: 342px;
  transform: scale(-1, 1);
`;

const PlanetImageWrapper = styled.div`
  position: relative;
  min-width: 433px;
  height: 433px;
  margin-left: 58px;
`;

const DescriptionText = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 500;
  line-height: 158.4%;
  &.reversed {
    text-align: end;
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
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 120px;
  margin-bottom: 74px;
`;

export default DescriptionBlock;
