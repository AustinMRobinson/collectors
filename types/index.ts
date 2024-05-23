export type Card = {
  image: string;
  grade?: number;
  title: string;
  price: number;
  change: number;
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
