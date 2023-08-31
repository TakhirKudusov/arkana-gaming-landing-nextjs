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
      <Link href="https://arkana-gaming.com/frame" target="_blank">
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
`;

export default CrashOnMars;
