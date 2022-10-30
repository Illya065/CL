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
import { PropsTypes } from "./label.types";

const StyledLabel = styled.label`
  display: block;
  font-family: ${FONT_FAMILY.PRIMARY};
  font-weight: ${FONT_WEIGHT.FW_400};
  font-size: ${FONT_SIZE.FS_400};
  line-height: ${LINE_HEIGHT.LH_1_25};
  color: ${COLORS.BLACK};
  margin-bottom: 0.5rem;
  ${({ extended_styles }: { extended_styles?: ExtendedStyles }) =>
    extended_styles}
`;

const Label = ({
  label,
  label_id,
  extended_styles,
}: PropsTypes): JSX.Element => {
  return (
    <StyledLabel extended_styles={extended_styles} htmlFor={label_id}>
      {label}
    </StyledLabel>
  );
};

export default Label;
