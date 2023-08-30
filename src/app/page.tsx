"use client";

import styled from "styled-components";
import FirstSection from "@/components/home/firstSection";
import DescriptionSection from "@/components/home/descriptionSection";
import { mainPageDescription } from "@/lib/constants/mainPageDescription";
import GameSection from "@/components/home/gameSection";

export default function Home() {
  return (
    <StyledMain>
      <FirstSection />
      <DescriptionSection
        header="about us"
        text={mainPageDescription.aboutUs}
        imagePath="/images/space-cover-2.webp"
      />
      <DescriptionSection
        header="what we do"
        text={mainPageDescription.whatWeDo}
        imagePath="/images/space-cover.webp"
      />
      <GameSection />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 149px;
  padding-bottom: 151px;
  @media screen and (max-width: 1024px) {
    row-gap: 120px;
    padding-bottom: 135px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 48px;
    padding-bottom: 118px;
  }
`;
