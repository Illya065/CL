import React from "react";
import styled from "styled-components";
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants";
import { PropsTypes } from "./text.types";

const Text = ({ children, extended_styles }: PropsTypes): JSX.Element => {
  // styled components

  const StyledText = styled.p`
    font-family: ${FONT_FAMILY.PRIMARY};
    font-weight: ${FONT_WEIGHT.FW_400};
    font-size: ${FONT_SIZE.FS_300};
    line-height: ${LINE_HEIGHT.LH_1_25};
    ${extended_styles}
  `;

  return <StyledText>{children}</StyledText>;
};

export default Text;
