import React from "react";
import { useHomepage } from "../../talons/Homepage/useHomepage";
import Button from "../Button";
import CatList from "../CatList";
import PageTitle from "../PageTitle";
import Selector from "../Selector";
import Wrapper from "../Wrapper";

const Homepage = (): JSX.Element => {
  const talonProps = useHomepage();
  const {
    catBreedsList,
    handleCatBreedChange,
    breedImages,
    handleLoadMore,
    isLoading,
    catBreed,
  } = talonProps;

  return (
    <Wrapper extended_styles={{ opacity: `${isLoading ? "0.5" : "1"}` }}>
      <PageTitle title="Homepage" />
      <Selector
        value={catBreed}
        onChange={handleCatBreedChange}
        options={catBreedsList}
      />
      <CatList cats={breedImages} />
      {breedImages.length > 0 ? (
        <Button
          disabled={isLoading}
          onClick={handleLoadMore}
          extended_styles={{ "margin-bottom": "2rem" }}
        >
          Load More
        </Button>
      ) : null}
    </Wrapper>
  );
};

export default Homepage;
