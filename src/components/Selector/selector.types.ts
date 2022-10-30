import { ExtendedStyles } from "../../types/generalTypes";

export interface PropsTypes {
  extended_styles?: ExtendedStyles;
  value: string | null;
  options:
    | {
        id: string | number;
        name: string;
      }[]
    | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
