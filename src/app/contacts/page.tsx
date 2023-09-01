"use client";

import styled from "styled-components";
import SingleSectionPageContainer from "@/lib/components/singleSectionPageContainer";
import SectionHeader from "@/lib/components/sectionHeader/sectionHeader";
import { mohave } from "@/lib/constants/fonts";
import Link from "next/link";

const Contacts = () => {
  return (
    <StyledContainer>
      <StyledHeader>contacts</StyledHeader>
      <ContactList>
        <ContactText className={mohave.className}>
          GENERAL:{" "}
          <MailLinkWrapper>
            <Link href="mailto:info@arkana-gaming.com">
              info@arkana-gaming.com
            </Link>
          </MailLinkWrapper>
        </ContactText>
        <ContactText className={mohave.className}>
          SALES:{" "}
          <MailLinkWrapper>
            <Link href="mailto:sales@arkana-gaming.com">
              sales@arkana-gaming.com
            </Link>
          </MailLinkWrapper>
        </ContactText>
        <ContactText className={mohave.className}>
          MARKETING:{" "}
          <MailLinkWrapper>
            <Link href="mailto:marketing@arkana-gaming.com">
              marketing@arkana-gaming.com
            </Link>
          </MailLinkWrapper>
        </ContactText>
      </ContactList>
    </StyledContainer>
  );
};

const MailLinkWrapper = styled.span`
  transition: 100ms linear;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

const ContactText = styled.p`
  color: #000;
  font-size: 36px;
  font-weight: 500;
  line-height: 158.4%;
  @media screen and (max-width: 1024px) {
    font-size: 34px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1266px;
  row-gap: 48px;
  @media screen and (max-width: 1440px) {
    padding: 0 87px;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 64px;
    row-gap: 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    row-gap: 19px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 22px;
  }
`;

const StyledHeader = styled(SectionHeader)`
  width: 1266px;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

const StyledContainer = styled(SingleSectionPageContainer)`
  row-gap: 40px;
  @media screen and (max-width: 768px) {
    row-gap: 60px;
  }
`;

export default Contacts;
