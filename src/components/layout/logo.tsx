import Image from "next/image";
import logoPic from "../../../public/images/logo.webp";
import styled from "styled-components";
import Link from "next/link";
import { Route } from "@/lib/enums/route";

const Logo = () => {
  return (
    <Link href={Route.home}>
      <LogoContainer>
        <Image src={logoPic} alt="Arkana Gaming logo" loading="lazy" fill />
      </LogoContainer>
    </Link>
  );
};

const LogoContainer = styled.div`
  width: 168px;
  height: 81px;
  position: relative;
  transition: 100ms linear;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
  @media screen and (max-width: 1024px) {
    width: 143px;
    height: 69px;
  }
  @media screen and (max-width: 375px) {
    width: 129px;
    height: 62px;
  }
`;

export default Logo;
