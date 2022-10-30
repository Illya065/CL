/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { client } from "../../client/client";
import {
  TFunctionFetchCatBreedImages,
  TFunctionHandleCatBreedChange,
  TReturnTalon,
  TStateCatBreed,
  TStateCatBreedImages,
  TStateCatBreedsList,
  TStateIsLoading,
  TStatePage,
} from "./types";

export const useHomepage = (): TReturnTalon => {
  // State Hooks
  const [catBreedsList, setCatBreedsList] = useState<TStateCatBreedsList>(null);
  const [catBreed, setCatBreed] = useState<TStateCatBreed>(null);
  const [breedImages, setBreedImages] = useState<TStateCatBreedImages>([]);
  const [page, setPage] = useState<TStatePage>(1);
  const [isLoading, setIsLoading] = useState<TStateIsLoading>(false);

  // Variables
  const detailed_breed_info = sessionStorage.getItem("detailed_breed_info");

  // Effect Hooks
  useEffect(() => {
    // Fetching cat breeds list for select on first page load
    fetchCatBreeds();

    if (
      !catBreed &&
      detailed_breed_info &&
      JSON.parse(detailed_breed_info)?.id
    ) {
      // Set previously selected breed after page reload or browser back
      setCatBreed(JSON.parse(detailed_breed_info)?.id);
    }
  }, []);

  useEffect(() => {
    // Fetching cat breed images after cat breed selection
    if (catBreed) {
      fetchCatBreedImages({ catBreed });
    }
    setPage(1);
  }, [catBreed]);

  useEffect(() => {
    // Fetching cat breed images after page change
    if (catBreed && page > 1) {
      fetchCatBreedImages({ catBreed, page, breedImages });
    }
  }, [page]);

  // Functions
  const fetchCatBreeds = async () => {
    await client
      .get("v1/breeds")
      .then((response) => {
        setCatBreedsList(response?.data);
      })
      .catch(() => {
        alert(
          "Apologies but we could not load breeds for you at this time! Miau!"
        );
      });
  };

  const fetchCatBreedImages = async ({
    catBreed: breed_id,
    breedImages: previous_images_array,
    page = 1,
  }: TFunctionFetchCatBreedImages) => {
    setIsLoading(true);

    await client
      .get(`v1/images/search?breed_id=${breed_id}&page=${page}&limit=12`)
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

        const selectedBreed = catBreedsList?.find(
          (item) => item.id === event.target.value
        );

        if (selectedBreed) {
          document.title = `Cat Breeds - ${selectedBreed.name}`;

          const detailed_breed_info = {
            description: selectedBreed.description,
            temperament: selectedBreed.temperament,
            origin: selectedBreed.origin,
            name: selectedBreed.name,
            id: selectedBreed.id,
          };

          sessionStorage.setItem(
            "detailed_breed_info",
            JSON.stringify(detailed_breed_info)
          );
        } else {
          sessionStorage.removeItem("detailed_breed_info");
        }
      }
    },
    [catBreedsList]
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
    catBreed,
  };
};
