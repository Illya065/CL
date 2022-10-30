import React from "react";
import styled from "styled-components";

import { BREACKPOINTS, FONT_WEIGHT } from "../../constants";
import Text from "../Text";
import { PropsTypes } from "./breedInfo.types";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${BREACKPOINTS.TABLET}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    height: 600px;
    gap: unset;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (min-width: ${BREACKPOINTS.TABLET}) {
    height: 100%;
    width: 48.5%;
  }
`;

const Info = styled.ul`
  width: 100%;

  & li {
    margin-bottom: 1rem;
  }

  & li strong {
    text-transform: capitalize;
    font-weight: ${FONT_WEIGHT.FW_700};
  }

  @media (min-width: ${BREACKPOINTS.TABLET}) {
    width: 48.5%;
  }
`;

const BreedInfo = ({ img_url, breed_info }: PropsTypes): JSX.Element => {
  const breed_detailed_info_list: React.ReactNode | null =
    breed_info && Object.keys(breed_info).length > 0
      ? Object.keys(breed_info).map((key, index) => {
          // Check key validity
          const isKeyValid =
            key === "origin" ||
            key === "name" ||
            key === "description" ||
            key === "temperament" ||
            key === "id";

          return (
            <li key={index}>
              <Text>
                <strong>{key}</strong>: {isKeyValid ? breed_info[key] : "-"}
              </Text>
            </li>
          );
        })
      : null;

  return (
    <Block>
      <Image src={img_url || ""} alt="No Image" />
      <Info>{breed_detailed_info_list}</Info>
    </Block>
  );
};

export default BreedInfo;
