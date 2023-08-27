'use client';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IProduct } from '@/models/IProduct';

function search(product: IProduct, params: { [key: string]: string }) {
  if('q' in params && !('filters' in params)) {
    const title = product.title.toLowerCase();
    return title.includes(params['q']);
  }
}
export const useProducts = (params?: { [key: string]: string }) => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products'
      );
      return data as IProduct[];
    },
  });
  const processedData: IProduct[] | undefined = (
    params ?
      data?.filter((product: IProduct) => search(product, params)) :
      data
  );
  let myIsSuccess = isSuccess, myError = error;
  if (typeof processedData === undefined) {
    myIsSuccess = false;
    myError = 'Can not find products with these settings';
  }
  return { data: processedData, isLoading, isSuccess: myIsSuccess, error: myError };
};

export const useProduct = (id: string | number) => {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return data as IProduct;
    },
  });
};