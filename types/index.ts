type Estimate = {
  grade: string;
  price: number;
  population: number;
};

type Sale = {
  type: "Auction" | "Buy it now";
  date: string;
  price: number;
};

type Collector = {
  name: string;
  grade: string;
  image: string;
};

export type Card = {
  image: string;
  grade?: number;
  title: string;
  game: string;
  price: number;
  change: number;
  estimates: Estimate[];
  history: Sale[];
  collectors: Collector[];
};

export type IconRegistry =
  | "arrowDown"
  | "arrowUp"
  | "chevron"
  | "collection"
  | "collectionFilled"
  | "orders"
  | "ordersFilled"
  | "scanCamera"
  | "search"
  | "share"
  | "x";
