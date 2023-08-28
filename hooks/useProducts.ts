'use client';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IProduct } from '@/models/IProduct';

function Filter(
  product: IProduct, 
  params: {
    search: string,
    filters: string[],
  }
) {
  if(params.filters.length) {
    return params.filters.includes(product.category) && product.title.toLowerCase().includes(params.search?.toLowerCase());
  } else {
    return product.title.toLowerCase().includes(params.search?.toLowerCase());
  }
}

export const useProducts = (params: {
  search: string,
  filters: string[],
}) => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products'
      );
      return data as IProduct[];
    },
  });
  const processedData: IProduct[] | undefined = data?.filter((product: IProduct) => Filter(product, params));
  return { data: processedData, isLoading, isSuccess, error };
};

export const useProduct = (id: string | number) => {
  return useQuery({
    queryKey: [`product-${id}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return data as IProduct;
    },
  });
};