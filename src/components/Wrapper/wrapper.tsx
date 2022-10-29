import React from "react";
import styled from "styled-components";
import { BREACKPOINTS } from "../../constants/breackpoints";
import { PropsTypes } from "./wrapper.types";

const Wrapper = ({ children, extended_styles }: PropsTypes): JSX.Element => {
    // styled components
  const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 0rem 0.75rem;
    @media (min-width: ${BREACKPOINTS.TABLET}) {
      padding: 0rem 1.25rem;
    }
    ${extended_styles}
  `;

  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
