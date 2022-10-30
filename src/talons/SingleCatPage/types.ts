export type TStateBreedInfo = {
  name: string;
  description: string;
  temperament: string;
  origin: string;
  id: string;
} | null;

export type TReturnTalon = {
  breedInfo: TStateBreedInfo;
  img_url: string | null;
};
