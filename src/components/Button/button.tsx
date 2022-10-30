import React from "react";
import styled from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants";
import { ExtendedStyles } from "../../types/generalTypes";
import { PropsTypes } from "./button.types";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: 3px solid ${COLORS.BLACK};
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILY.PRIMARY};
  font-weight: ${FONT_WEIGHT.FW_700};
  font-size: ${FONT_SIZE.FS_500};
  line-height: ${LINE_HEIGHT.LH_1_25};
  padding: 0.5rem 2rem;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ extended_styles }: { extended_styles?: ExtendedStyles }) =>
    extended_styles}
`;

const Button = ({
  children,
  extended_styles,
  onClick,
  disabled,
}: PropsTypes): JSX.Element => {
  return (
    <Wrapper>
      <StyledButton
        disabled={disabled}
        onClick={onClick}
        extended_styles={extended_styles}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
