export interface IBook {
  id: number;
  name: string;
  author: string;
  coAuthor?: undefined;
  coverImg: string;
  sequels?: string[];
  rating: number;
}

export interface ISetIndex {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
