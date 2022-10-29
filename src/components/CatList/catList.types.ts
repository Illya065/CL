export interface PropsTypes {
  extended_styles?: {
    [key: string]: string;
  };
  cats: {
    id: string | number;
    link: string;
  }[];
}
