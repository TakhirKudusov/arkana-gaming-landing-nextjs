import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  className?: string;
};

const SingleSectionPageContainer: FC<Props> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 74px 87px 217px;
  row-gap: 50px;
  min-height: calc(100vh - 144px - 119px);
  @media screen and (max-width: 1440px) {
    padding: 74px 0 217px;
  }
  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 123px - 122px);
    padding: 65px 0 170px;
  }
  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 115px - 112px);
    padding: 55px 0 140px;
  }
  @media screen and (max-width: 425px) {
    min-height: calc(100vh - 108px - 104px);
    padding: 48px 0 140px;
    row-gap: 48px;
  }
  @media screen and (max-width: 425px) {
    min-height: calc(100vh - 101px - 104px);
  }
`;

export default SingleSectionPageContainer;
