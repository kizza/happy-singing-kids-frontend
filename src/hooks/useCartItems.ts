import { useEffect, useState } from "react";
import { api } from "../api";

export interface DisplayLineItem {
  priceId: string;
  productId: string;
  name: string;
  amount: number;
  currency: string;
  url: string | undefined;
  filetype: string | undefined;
}

export interface CartItem extends DisplayLineItem {
  enabled: boolean;
}

export interface CartTotal {
  amount: number;
  currency: string;
}

const getCatalogueItems = (): Promise<DisplayLineItem[]> =>
  api("catalogue")
    .then(foo => {
      console.log("Catalogue api response: ", foo);
      return foo;
    })
    .then(thing => {
      console.log("This was the response", thing);
      return thing.items;
    })
    .catch(e => {
      console.log("There was an error!", e);
    });
// .then(({ items }) => items);

type UseCartItems = [
  boolean,
  string | undefined,
  CartItem[],
  CartItem[],
  CartTotal | undefined,
  (item: CartItem) => void
];

const activeCartItems = (item: CartItem) => !!item.enabled;

const calculateTotal = (items: CartItem[]) => ({
  amount: items
    .filter(activeCartItems)
    .reduce((acc, { amount }) => acc + amount, 0),
  currency: items
    .filter(activeCartItems)
    .reduce((_acc, { currency }) => currency, "aud"),
});

export const useCartItems = (): UseCartItems => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<CartTotal | undefined>();
  const [error, setError] = useState<string | undefined>();
  const isLoadingItems = items.length === 0;

  const updateCart = (newItems: CartItem[]) => {
    console.log("Update items");
    setItems(newItems);
    console.log("Update total");
    setTotal(calculateTotal(newItems));
  };

  useEffect(() => {
    getCatalogueItems()
      .then(items => {
        updateCart(items.map(each => ({ ...each, enabled: true })));
      })
      .catch(e => setError("Could not retrieve items"));
  }, []);

  const toggleItem = ({ productId, enabled }: CartItem) =>
    updateCart(
      items.map(item =>
        item.productId === productId ? { ...item, enabled: !enabled } : item
      )
    );

  return [
    isLoadingItems,
    error,
    items,
    items.filter(activeCartItems),
    total,
    toggleItem,
  ];
};
