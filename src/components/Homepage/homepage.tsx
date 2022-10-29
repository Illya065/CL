import React from "react";
import Button from "../Button";
import CatList from "../CatList";
import PageTitle from "../PageTitle";
import Selector from "../Selector";
import Wrapper from "../Wrapper";

const Homepage = (): JSX.Element => {
  // mock data
  const options = [
    {
      value: "1",
      label: "Option 1",
    },
    {
      value: "2",
      label: "Option 2",
    },
  ];

  const cats = [
    {
      id: 1,
      link: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
    },

    {
      id: 2,
      link: "https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg",
    },

    {
      id: 3,
      link: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
    },

    {
      id: 4,
      link: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    },
    {
      id: 5,
      link: "https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg",
    },

    {
      id: 6,
      link: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
    },
  ];

  return (
    <Wrapper>
      <PageTitle title="Homepage" />
      <Selector options={options} />
      <CatList cats={cats} />
      <Button extended_styles={{ "margin-bottom": "2rem" }}>Load More</Button>
    </Wrapper>
  );
};

export default Homepage;
