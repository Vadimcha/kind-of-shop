import { useQuery } from 'react-query';
import axios from 'axios';

export interface IProduct {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
}

export const useProducts = (productId: number) => {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      return data as IProduct;
    },
  });
};