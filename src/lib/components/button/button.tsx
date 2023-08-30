import { FC, memo, ReactNode } from "react";
import styled, { css } from "styled-components";
import { mohave } from "@/lib/constants/fonts";
import { ButtonType } from "@/lib/components/button/utils/enums/buttonType";

type Props = {
  children: ReactNode;
  buttonType?: ButtonType;
};

const Button: FC<Props> = ({ children, buttonType = ButtonType.filled }) => {
  return (
    <StyledButton buttonType={buttonType} className={mohave.className}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ buttonType: ButtonType }>`
  width: 283px;
  height: 83px;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.1s linear;

  ${({ buttonType }) => {
    switch (buttonType) {
      case ButtonType.filled:
        return css`
          background: #000;
          color: white;
          &:hover {
            opacity: 0.9;
          }
          &:active {
            opacity: 0.8;
          }
        `;
      case ButtonType.unfilled:
        return css`
          color: black;
          background-color: white;
          &:hover {
            background: rgba(255, 255, 255, 0.9);
          }
          &:active {
            background: rgba(255, 255, 255, 0.8);
          }
        `;
      case ButtonType.outlined:
        return css`
          color: black;
          background-color: white;
          border: 1px black solid;
          &:hover {
            background: rgba(255, 255, 255, 0.9);
          }
          &:active {
            background: rgba(255, 255, 255, 0.8);
          }
        `;
    }
  }}
`;

export default memo(Button);
