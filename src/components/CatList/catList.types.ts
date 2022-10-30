import { ExtendedStyles } from "../../types/generalTypes";

export interface PropsTypes {
  extended_styles?: ExtendedStyles;
  cats: {
    breed_id: string;
    url: string;
  }[];
}
