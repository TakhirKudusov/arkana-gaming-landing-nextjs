import { FC, memo, ReactNode } from "react";
import styled from "styled-components";
import { mohave } from "@/lib/constants/fonts";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionHeader: FC<Props> = ({ children, className }) => {
  return (
    <HeaderText className={`${mohave.className} ${className}`}>
      {children}
    </HeaderText>
  );
};

const HeaderText = styled.h2`
  color: #000;
  font-size: 96px;
  font-weight: 500;
  text-transform: uppercase;
  @media screen and (max-width: 1440px) {
    padding: 0 87px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 70px;
    padding: 0 64px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    font-size: 50px;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    font-size: 40px;
    padding: 0 22px;
  }
`;

export default memo(SectionHeader);
