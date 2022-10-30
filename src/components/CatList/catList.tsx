import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  BREACKPOINTS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from "../../constants";
import { ExtendedStyles } from "../../types/generalTypes";
import Text from "../Text";
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
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${BREACKPOINTS.DESKTOP}) {
    height: 310px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 320px;
  box-sizing: border-box;

  @media (min-width: ${BREACKPOINTS.DESKTOP}) {
    height: 270px;
  }
`;

const LinkText = styled.p`
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
  // Render a list of cats or a message if there are no cats
  const cats_images_list: React.ReactNode =
    cats && cats?.length > 0 ? (
      <List extended_styles={extended_styles}>
        {/* Render cat image items */}
        {cats.map((cat, index) => {
          return (
            <ListItem key={index}>
              <Image src={cat.url} alt="cat" />
              <Link
                to={`/single-cat-page?breed_id=${cat.breed_id}&img_url=${cat.url}`}
              >
                <LinkText>View details</LinkText>
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

  return cats_images_list;
};

export default CatList;
