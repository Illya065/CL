import { ExtendedStyles } from "../../types/generalTypes";

export interface PropsTypes {
  extended_styles?: ExtendedStyles;
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}
