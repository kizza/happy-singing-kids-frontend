import { CartItem, CartTotal } from "./hooks/useCartItems";

export const formatPrice = ({ amount, currency }: CartItem | CartTotal) => {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;
  const total = (1 * amount).toFixed(2);
  return numberFormat.format(total as any);
};

export const retry = <T>(promise: () => Promise<T>, attempts = 3): Promise<T> =>
  new Promise((resolve, reject) => {
    const attempt = (remaining: number): any =>
      promise()
        .then(result => {
          console.log("Promise achieved", result);
          resolve(result);
        })
        .catch(e => {
          if (remaining > 0) {
            console.log("trying again");
            return attempt(remaining - 1);
          } else {
            console.log("tried to fail it!!!");
            reject(e);
          }
        });

    return attempt(attempts);
  });
