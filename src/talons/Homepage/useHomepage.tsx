/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../client/client";
import {
  TFunctionFetchCatBreedImages,
  TFunctionHandleCatBreedChange,
  TStateCatBreed,
  TStateCatBreedImages,
  TStateCatBreedsList,
  TStateIsLoading,
  TStatePage,
} from "./types";

export const useHomepage = () => {
  const [catBreedsList, setCatBreedsList] = useState<TStateCatBreedsList>(null);
  const [catBreed, setCatBreed] = useState<TStateCatBreed>(null);
  const [breedImages, setBreedImages] = useState<TStateCatBreedImages>([]);
  const [page, setPage] = useState<TStatePage>(1);
  const [isLoading, setIsLoading] = useState<TStateIsLoading>(false);

  useEffect(() => {
    fetchCatBreeds();
  }, []);

  useEffect(() => {
    if (catBreed) {
      fetchCatBreedImages({ catBreed });
    }
    setPage(1);
  }, [catBreed]);

  useEffect(() => {
    if (catBreed && page > 1) {
      fetchCatBreedImages({ catBreed, page, breedImages });
    }
  }, [page]);

  const fetchCatBreeds = async () => {
    await client
      .get("v1/breeds")
      .then((response) => {
        setCatBreedsList(response?.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const fetchCatBreedImages = async ({
    catBreed: breed_id,
    breedImages: previous_images_array,
    page = 1,
  }: TFunctionFetchCatBreedImages) => {
    setIsLoading(true);

    await client
      .get(`v1/images/search?breed_id=${breed_id}&page=${page}&limit=6`)
      .then((response) => {
        const images_array = response.data.map((item: { url: string }) => {
          return {
            url: item.url,
            breed_id,
          };
        });

        return images_array;
      })
      .then((images) => {
        if (previous_images_array) {
          setBreedImages([...previous_images_array, ...images]);
        } else {
          setBreedImages(images);
        }
      })
      .catch(() => {
        alert(
          "Apologies but we could not load new cats for you at this time! Miau!"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCatBreedChange = useCallback(
    (event: TFunctionHandleCatBreedChange) => {
      if (event?.target?.value) {
        setCatBreed(event.target.value);
      }
    },
    []
  );

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return {
    catBreedsList,
    handleCatBreedChange,
    breedImages,
    handleLoadMore,
    isLoading,
  };
};