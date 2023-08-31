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
  width: 100%;
  background: url("/images/vertical-banner.webp") center;
  height: 227px;
  background-size: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 105px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 40px;
  margin-bottom: 156px;
`;

export default TopBlock;
