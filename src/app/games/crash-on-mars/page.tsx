"use client";

import styled from "styled-components";
import TopBlock from "@/components/crashOnMars/topBlock";
import DescriptionBlock from "@/components/crashOnMars/descriptionBlock";
import Link from "next/link";
import Button from "@/lib/components/button/button";

const CrashOnMars = () => {
  return (
    <Section>
      <TopBlock />
      <DescriptionBlock />
      <Link
        href="https://webapp.arkana-gaming.com/crash-on-mars"
        target="_blank"
      >
        <Button>try it</Button>
      </Link>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 74px 87px 284px;
  @media screen and (max-width: 1440px) {
    padding: 74px 0 284px;
  }
  @media screen and (max-width: 1024px) {
    padding: 48px 0 246px;
  }
`;

export default CrashOnMars;
