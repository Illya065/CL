import React from "react";
import styled from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants";
import { PropsTypes } from "./button.types";

const Button = ({ children, extended_styles }: PropsTypes): JSX.Element => {
  // styled components

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
    ${extended_styles}
  `;

  return (
    <Wrapper>
      <StyledButton>{children}</StyledButton>
    </Wrapper>
  );
};

export default Button;