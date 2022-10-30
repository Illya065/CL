import React from "react";
import { useSingleCatPage } from "../../talons/SingleCatPage/useSingleCatPage";
import BreedInfo from "../BreedInfo";
import PageTitle from "../PageTitle";
import Wrapper from "../Wrapper";

const SingleCatPage = (): JSX.Element => {
  const talonProps = useSingleCatPage();

  const { breedInfo, img_url } = talonProps;

  return (
    <Wrapper>
      <PageTitle
        extended_styles={{ "margin-bottom": "2.5rem" }}
        title={breedInfo?.name || "Single Cat Page"}
      />
      <BreedInfo breed_info={breedInfo} img_url={img_url} />
    </Wrapper>
  );
};

export default SingleCatPage;
