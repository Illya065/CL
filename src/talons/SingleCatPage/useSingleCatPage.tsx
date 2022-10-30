import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { client } from "../../client/client";
import { TReturnTalon, TStateBreedInfo } from "./types";

export const useSingleCatPage = (): TReturnTalon => {
  // Location Hook
  const { search } = useLocation();

  // State Hooks
  const [breedInfo, setBreedInfo] = useState<TStateBreedInfo>(null);

  // Variables
  const query = new URLSearchParams(search);
  const breed_id = query.get("breed_id");
  const img_url = query.get("img_url");

  const detailed_breed_info = sessionStorage.getItem("detailed_breed_info");

  // Functions
  const fetchBreedInfo = useCallback(async () => {
    await client
      .get(`v1/breeds/search?q=${breed_id}`)
      .then((response) => {
        const breed_info: TStateBreedInfo = {
          description: response?.data[0]?.description,
          name: response?.data[0]?.name,
          temperament: response?.data[0]?.temperament,
          origin: response?.data[0]?.origin,
          id: response?.data[0]?.id,
        };
        setBreedInfo(breed_info);
      })
      .catch((error) => {
        alert(error);
      });
  }, [breed_id]);

  // Effect Hooks
  useEffect(() => {
    if (detailed_breed_info) {
      setBreedInfo(JSON.parse(detailed_breed_info));
    } else {
      fetchBreedInfo();
    }
  }, [detailed_breed_info, breed_id, fetchBreedInfo]);

  return {
    img_url,
    breedInfo,
  };
};
