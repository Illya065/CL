import React from "react";
import styled from "styled-components";
import {
  BREACKPOINTS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants";
import Text from "../Text";
import { ExtendedStyles } from "../../types/generalTypes";
import { PropsTypes } from "./catList.types";

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

  ${({ extended_styles }: { extended_styles?: ExtendedStyles }) =>
    extended_styles}
`;

const ListItem = styled.li`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${BREACKPOINTS.DESKTOP}) {
    height: 300px;
  }
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  display: inline-block;
  font-family: ${FONT_FAMILY.PRIMARY};
  font-weight: ${FONT_WEIGHT.FW_700};
  font-size: ${FONT_SIZE.FS_200};
  line-height: ${LINE_HEIGHT.LH_1_25};
  color: ${COLORS.BLACK};
  text-decoration: none;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
`;

const CatList = ({ cats, extended_styles }: PropsTypes): JSX.Element => {
  const list =
    cats?.length > 0 ? (
      <List extended_styles={extended_styles}>
        {cats.map((cat, index) => {
          console.log(cat);

          return (
            <ListItem key={index}>
              <Image src={cat.url} alt="cat" />
              <Link href={`/single-cat-page/${cat.breed_id}`}>
                View details
              </Link>
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
