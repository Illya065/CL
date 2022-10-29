import React from "react";
import styled from "styled-components";
import { BREACKPOINTS } from "../../constants";
import Text from "../Text";
import { PropsTypes } from "./catList.types";

const CatList = ({ cats, extended_styles }: PropsTypes): JSX.Element => {
  // styled components

  const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    margin-bottom: 2rem;

    @media (min-width: ${BREACKPOINTS.TABLET}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${BREACKPOINTS.DESKTOP}) {
      grid-template-columns: repeat(4, 1fr);
    }

    ${extended_styles}
  `;

  const ListItem = styled.li`
    height: 350px;

    @media (min-width: ${BREACKPOINTS.DESKTOP}) {
      height: 300px;
    }
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  // variables

  const list =
    cats?.length > 0 ? (
      <List>
        {cats.map((cat) => {
          return (
            <ListItem key={cat.id}>
              <Image src={cat.link} alt="cat" />
            </ListItem>
          );
        })}
      </List>
    ) : (
      <Text
        extended_styles={{ "text-align": "center", "margin-bottom": "2rem" }}
      >
        No cats available
      </Text>
    );

  return list;
};

export default CatList;
