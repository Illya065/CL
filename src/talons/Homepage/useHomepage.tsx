/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../client/client";

export const useHomepage = () => {
  const [catBreedsList, setCatBreedsList] = useState<
    | {
        name: string;
        id: string | number;
      }[]
    | null
  >(null);
  const [catBreed, setCatBreed] = useState<string | null>(null);
  const [breedImages, setBreedImages] = useState<
    { url: string; breed_id: string }[]
  >([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  }: {
    catBreed: string;
    breedImages?: { url: string; breed_id: string }[];
    page?: number;
  }) => {
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
    (event: React.ChangeEvent<HTMLSelectElement>) => {
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
