export interface DataTypes {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
export interface Type {
  data?: object;
  setArrayLength: React.Dispatch<React.SetStateAction<boolean>>;
  arrayLength: boolean;
  setButtons: any;
  buttons: {
    value: string;
  }[];
}
export interface ButtonTypes {
  property: string;
  value: string;
}
