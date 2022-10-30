export type TStateCatBreedsList =
  | {
      name: string;
      id: string | number;
    }[]
  | null;
export type TStateCatBreed = string | null;
export type TStateCatBreedImages = { url: string; breed_id: string }[];
export type TStatePage = number;
export type TStateIsLoading = boolean;

export type TFunctionFetchCatBreedImages = {
  catBreed: string;
  breedImages?: { url: string; breed_id: string }[];
  page?: number;
};
export type TFunctionHandleCatBreedChange =
  React.ChangeEvent<HTMLSelectElement>;
