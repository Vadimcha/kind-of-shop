'use client';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IProduct } from '@/models/IProduct';

export const useProducts = () => {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products'
      );
      return data as IProduct[];
    },
  });
};