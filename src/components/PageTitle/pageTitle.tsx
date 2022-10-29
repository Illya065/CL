import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants/";
import { PropsTypes } from "./pageTitle.types";

const PageTitle = ({ title, extended_styles }: PropsTypes): JSX.Element => {
  // styled components
  const Title = styled.h1`
    font-family: ${FONT_FAMILY.PRIMARY};
    font-size: ${FONT_SIZE.FS_1000};
    font-weight: ${FONT_WEIGHT.FW_500};
    line-height: ${LINE_HEIGHT.LH_1_25};
    color: ${COLORS.BLACK};
    text-align: center;
    padding: 1.5rem 0;
    ${extended_styles}
  `;

  return <Title>{title}</Title>;
};

export default PageTitle;
