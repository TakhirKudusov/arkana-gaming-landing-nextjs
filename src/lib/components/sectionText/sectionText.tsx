import styled from "styled-components";
import { FC, ReactNode } from "react";
import { montserrat } from "@/lib/constants/fonts";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionText: FC<Props> = ({ children, className }) => {
  return (
    <Text className={`${montserrat.className} ${className}`}>{children}</Text>
  );
};

const Text = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 158.4%;
  @media screen and (max-width: 1440px) {
    padding: 0 87px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 22px;
    padding: 0 64px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 22px;
    font-size: 16px;
    line-height: 180%;
  }
`;

export default SectionText;
