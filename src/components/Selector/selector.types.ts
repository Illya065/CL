import { ExtendedStyles } from "../../types/generalTypes";

export interface PropsTypes {
  extended_styles?: ExtendedStyles;
  options: {
    label: string;
    value: string;
  }[];
}
