import React from "react";
import styled from "styled-components";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants";
import Label from "./label";
import { PropsTypes } from "./selector.types";

const Selector = ({ options, extended_styles }: PropsTypes): JSX.Element => {
  // styled components
  const Wrapper = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
    ${extended_styles}
  `;

  const StyledSelect = styled.select`
    display: block;
    width: 100%;
    font-family: ${FONT_FAMILY.PRIMARY};
    font-weight: ${FONT_WEIGHT.FW_400};
    font-size: ${FONT_SIZE.FS_400};
    line-height: ${LINE_HEIGHT.LH_1_25};
    color: ${COLORS.BLACK};
    padding: 0.5rem 1rem;
    border: 1px solid ${COLORS.BLACK};
    border-radius: 0.25rem;
    outline: none;
    background-color: ${COLORS.WHITE};
  `;

  // variables

  const options_list = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <Wrapper>
      <Label label="Breed" label_id="breed" />
      <StyledSelect>{options_list}</StyledSelect>
    </Wrapper>
  );
};

export default Selector;
