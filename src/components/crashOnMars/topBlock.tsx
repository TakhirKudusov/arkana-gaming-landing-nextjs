import SectionHeader from "@/lib/components/sectionHeader/sectionHeader";
import Link from "next/link";
import Button from "@/lib/components/button/button";
import styled from "styled-components";

const TopBlock = () => {
  return (
    <Container>
      <SectionHeader>crash on mars</SectionHeader>
      <ContentContainer>
        <ImageBlock />
        <Link href="https://arkana-gaming.com/frame" target="_blank">
          <Button>try it</Button>
        </Link>
      </ContentContainer>
    </Container>
  );
};

const ImageBlock = styled.div`
  width: 1266px;
  background: url("/images/horizontal-banner.webp") center;
  height: 227px;
  background-size: auto 227px;
  @media screen and (max-width: 1266px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    height: 200px;
    background-size: auto 200px;
  }
  @media screen and (max-width: 768px) {
    height: 180px;
    background-size: auto 180px;
  }
  @media screen and (max-width: 425px) {
    height: 140px;
    background: url("/images/horizontal-banner-mobile.webp") center;
    background-size: auto 140px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 105px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    row-gap: 90px;
  }
  @media screen and (max-width: 768px) {
    row-gap: 75px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1266px;
  row-gap: 40px;
  margin-bottom: 156px;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 120px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 30px;
    margin-bottom: 88px;
  }
`;

export default TopBlock;
