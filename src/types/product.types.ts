export type Product = {
  id: number;
  name: string;
  category: 'all' | 'first' | 'second' | 'third';
  price: number;
  image: string;
};
