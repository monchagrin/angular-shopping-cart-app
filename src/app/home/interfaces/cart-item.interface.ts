import { Category } from './product.interface';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}
