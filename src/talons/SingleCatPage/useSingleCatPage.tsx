import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { client } from "../../client/client";
import { TReturnTalon, TStateBreedInfo } from "./types";

export const useSingleCatPage = (): TReturnTalon => {
  const { search } = useLocation();
  const [breedInfo, setBreedInfo] = useState<TStateBreedInfo>(null);

  const query = new URLSearchParams(search);
  const breed_id = query.get("breed_id");
  const img_url = query.get("img_url");

  const detailed_breed_info = sessionStorage.getItem("detailed_breed_info");

  const fetchBreedInfo = useCallback(async () => {
    await client
      .get(`v1/breeds/search?q=${breed_id}`)
      .then((response) => {
        setBreedInfo(response?.data?.[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }, [breed_id]);

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
