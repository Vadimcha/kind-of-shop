'use client';
import { useQuery } from 'react-query';
import axios from 'axios';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      return data as string[];
    }
  });
};