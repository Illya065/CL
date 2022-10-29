import { ExtendedStyles } from "../../types/generalTypes";

export interface PropsTypes {
  extended_styles?: ExtendedStyles;
  cats: {
    id: string | number;
    link: string;
  }[];
}
