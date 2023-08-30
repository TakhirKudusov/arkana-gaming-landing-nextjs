import styled from "styled-components";
import { FC, memo } from "react";
import SectionHeader from "@/lib/components/sectionHeader/sectionHeader";
import SectionText from "@/lib/components/sectionText/sectionText";

type Props = {
  header: string;
  text: string;
  imagePath: string;
};

const DescriptionSection: FC<Props> = ({ header, text, imagePath }) => {
  return (
    <Container>
      <SectionHeader>{header}</SectionHeader>
      <ContentContainer>
        <ImageWrapper>
          <ImageBlock imagePath={imagePath} />
        </ImageWrapper>
        <SectionText>{text}</SectionText>
      </ContentContainer>
    </Container>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ImageBlock = styled.div<{ imagePath: string }>`
  width: 1266px;
  height: 139px;
  background: url(${({ imagePath }) => imagePath}) center;
  background-size: cover;
  @media screen and (max-width: 1266px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    height: 120px;
  }
  @media screen and (max-width: 425px) {
    height: 85px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 69px;
  @media screen and (max-width: 1024px) {
    row-gap: 54px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 48px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 43px;
  width: 1266px;
  @media screen and (max-width: 1440px) {
    padding: 0;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    row-gap: 37px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 21px;
  }
`;

export default memo(DescriptionSection);
