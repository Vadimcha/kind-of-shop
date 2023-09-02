'use client';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface UserStore {
  auth: boolean,
  favourites: number[],
  shopCart: number[],
  addToFavourites: (id: number) => void,
  addToCart: (id: number) => void,
  inFavourites: (id: number) => boolean,
  inCart: (id: number) => boolean,
}

export const useUserStore = create<UserStore>()(
  devtools((set, get) => ({
    auth: false,
    favourites: [],
    shopCart: [],
    addToFavourites: (id: number) => {
      let Favourites = get().favourites;
      if(Favourites.includes(id)) {
        Favourites = Favourites.filter(item => item !== id);
      } else {
        Favourites.push(id);
      }
      set(state => ({ favourites: Favourites }));
    },
    addToCart: (id: number) => {
      let ShopCart = get().shopCart;
      if(ShopCart.includes(id)) {
        ShopCart = ShopCart.filter(item => item !== id);
      } else {
        ShopCart.push(id);
      }
      set(state => ({ shopCart: ShopCart }));
    },
    inFavourites: (id: number) => {
      return get().favourites.includes(id);
    },
    inCart: (id: number) => {
      return get().shopCart.includes(id);
    },
  }))
);

if(process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
  mountStoreDevtool('UserStore', useUserStore);
}