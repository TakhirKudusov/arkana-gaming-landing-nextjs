"use client";

import styled from "styled-components";
import SectionHeader from "@/lib/components/sectionHeader/sectionHeader";
import Button from "@/lib/components/button/button";
import { ButtonType } from "@/lib/components/button/utils/enums/buttonType";
import Image from "next/image";
import bannerPic from "@/../public/images/poster-mobile.png";
import { mohave } from "@/lib/constants/fonts";
import Link from "next/link";
import { Route } from "@/lib/enums/route";
import SingleSectionPageContainer from "@/lib/components/singleSectionPageContainer";

const Games = () => {
  return (
    <SingleSectionPageContainer>
      <StyledHeader>games</StyledHeader>
      <ContentContainer>
        <BannerContainer>
          <ImageWrapper>
            <Image
              src={bannerPic}
              alt="Crash on Mars game banner"
              fill
              loading="lazy"
            />
          </ImageWrapper>
          <SubHeader className={mohave.className}>crash on mars</SubHeader>
        </BannerContainer>
        <Link href={Route.crashOnMars}>
          <Button buttonType={ButtonType.outlined}>read more</Button>
        </Link>
      </ContentContainer>
    </SingleSectionPageContainer>
  );
};

const SubHeader = styled.h3`
  color: #000;
  font-size: 36px;
  font-weight: 500;
  line-height: 158%;
  text-transform: uppercase;
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  width: 324px;
  height: 437px;
  @media screen and (max-width: 425px) {
    width: 302px;
    height: 409px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  @media screen and (max-width: 425px) {
    row-gap: 60px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  align-items: center;
`;

const StyledHeader = styled(SectionHeader)`
  width: 100%;
`;

export default Games;
