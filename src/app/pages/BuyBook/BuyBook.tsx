"use client"

import bookCover from "@/assets/uh-oh-spaghetti-oh-cover.png";
import CurrencyPicker from "@/components/CurrencyPicker";
import Header from "@/components/Header";
import IconLink from "@/components/IconLink";
import Loading from "@/components/Loading";
import { formatPrice } from "@/helpers";
import useCurrency, { Currency } from "@/hooks/useCurrency";
import useWindowEvent from "@/hooks/useWindowEvent";
import Image from "next/image";
import { useEffect, useState } from "react";
import posthog from "posthog-js";

interface RowProps {
  index: number,
  price: React.ReactNode,
  selected: boolean;
  children: React.ReactNode,
  change: (index: number) => void,
}


interface CartItem {
  description: string;
  code: string;
  shipping: string;
  price: Record<Currency, number>;
  quantity: number;
  coupon?: string;
  adjustableQuantity: boolean;
  adjustableQuantityMinimum?: number;
  adjustableQuantityMaximum?: number;
}

const cartItems: CartItem[] = [
  {
    description: "Single book",
    code: process.env.NEXT_PUBLIC_SPAGHETTIO_ONE_BOOK!,
    shipping: process.env.NEXT_PUBLIC_FREE_SHIPPING!,
    price: {AUD: 2000, USD: 1000, GBP: 1200},
    adjustableQuantity: false,
    quantity: 1,
  },
  {
    description: "Two books",
    code: process.env.NEXT_PUBLIC_SPAGHETTIO_ONE_BOOK!,
    shipping: process.env.NEXT_PUBLIC_FREE_SHIPPING!,
    coupon: process.env.NEXT_PUBLIC_SPAGHETTIO_TWO_BOOK_COUPON!,
    price: {AUD: 3500, USD: 1800, GBP: 2000},
    adjustableQuantity: false,
    quantity: 2,
  },
  {
    description: "Three books",
    code: process.env.NEXT_PUBLIC_SPAGHETTIO_MANY_BOOKS!,
    shipping: process.env.NEXT_PUBLIC_FREE_SHIPPING!,
    price: {AUD: 1500, USD: 1000, GBP: 1200}, // Price *each*
    adjustableQuantity: true,
    adjustableQuantityMinimum: 3,
    adjustableQuantityMaximum: 5,
    quantity: 3,
  }
]

const CartOption = ({index, price, children, selected, change}: RowProps) => {
  const id = `item${index}`;
  return <label className={`
    inline-flex cursor-pointer border-2 border-dotted border-grape
    p-4 rounded-md
    has-[:checked]:border-solid
    has-[:checked]:border-grape
    has-[:checked]:bg-grape-100
    hover:border-orange
    items-start space-x-2 text-base`
  }>
    <div className="relative flex items-top cursor-pointer">
      <input id={id} type="radio" checked={selected} onChange={() => change(index)} className={`
        peer h-5 w-5 cursor-pointer appearance-none rounded-full
        border-2 border-grape checked:border-slate-400 transition-all
      `} />
      <span className={`
        absolute bg-orange w-3 h-3 rounded-full opacity-0
        peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2`}></span>
    </div>
    <div className="flex-grow ml-2 text-slate-600 cursor-pointer text-sm">
      {children}
    </div>
    {price}
  </label>
}

const BuyBook = () => {
  const currencyAttributes = useCurrency()
  const [redirecting, setRedirecting] = useState(false)
  const { currency, symbol } = currencyAttributes
  const action = `${process.env.NEXT_PUBLIC_SHOP_URL!}checkout/session`;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const cartItem = cartItems[selectedIndex]
  const change = (index: number) => {
    setSelectedIndex(index)
    posthog.capture("book_option_selected", {
      option: cartItems[index]?.description,
      quantity: cartItems[index]?.quantity,
    })
  }

  const [customQuantity, _setCustomQuantity] = useState(3)
  const setCustomQuantity = (value: number) => {
    _setCustomQuantity(value || 1)
  }

  // Apply custom quantity if applicable
  const selectedCartItem = {
    ...cartItem,
    quantity: cartItem.adjustableQuantity ? customQuantity : cartItem.quantity,
  }

  // Select first by default (after server render)
  useEffect(() => {
    if (selectedIndex == -1) setSelectedIndex(0)
  }, [])

  // Clear loading state when back from stripe
  useWindowEvent<PageTransitionEvent>("pageshow", event => {
    if (event.persisted == false) return;
    setRedirecting(false);
  })

  const Quantity = () => {
    const incStyles = `w-8 text-grape text-lg rounded-md border-solid border
      enabled:hover:bg-grape-200 enabled:hover:border-grape
      disabled:border-dotted disabled:text-grape-300 !disabled:bg-transparent
      `
    return (
      <div className="flex items-stretch">
        <button disabled={customQuantity <= 3} className={`${incStyles} border-r-0 rounded-r-none`} onClick={() => setCustomQuantity(customQuantity - 1) }>-</button>
        <input name="quantity" type="number" value={customQuantity} min="1" max="5" required
          onChange={e => setCustomQuantity(parseInt(e.target.value))}
          className={`
            appearance-none border border-solid border-grape w-10 p-1 text-center
          `} />
        <button disabled={customQuantity >= 5} className={`${incStyles} border-l-0 rounded-l-none`} onClick={() => setCustomQuantity(customQuantity + 1) }>+</button>
      </div>
    )
  }

  const notAvailableInCurrency = <>
    <div className="text-center">
      <p className="text-lg">Let's talk!</p>
      <p>Please do <a href="mailto:contact@happysingingkids.com">contact us</a> as we can absolutely make sure we get the best price and postage for you.</p>
      <p>Apologies that we can't do so via the online form - but look forward to hearing from you.</p>
    </div>
  </>

  const priceList = <>
    <div className="flex flex-col space-y-3">
      <CartOption index={0} selected={0==selectedIndex} change={change}
        price={<div>{formatPrice(cartItems[0].price[currency], currency)}</div>}
        >
        <div>Single copy</div>
        <small>Including delivery</small>
      </CartOption>
      <CartOption index={1} selected={1==selectedIndex} change={change}
        price={<div>{formatPrice(cartItems[1].price[currency], currency)}</div>}
        >
        <div>Two copies!</div>
        <small>Including delivery</small>
      </CartOption>
      <CartOption index={2} selected={2==selectedIndex} change={change}
        price={<div className="flex flex-col text-right">
          {formatPrice(customQuantity * cartItems[2].price[currency], currency)}
          <small className="whitespace-nowrap text-[0.7rem] text-orange-900">{formatPrice(cartItems[2].price[currency], currency)} each</small>
        </div>}
        >
        <div className="flex flex-col">
          <div>Three or more!!</div>
          <small>Including delivery</small>
          <div className="mt-2 flex items-center space-x-2">
            <Quantity /> <small>copies</small>
          </div>
        </div>
      </CartOption>
    </div>
  </>

  return <div className="test">
    <Header clouds={false} />
    <div className="inner min_h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8 justify-stretch">
        <div className="md:w-1/2">
          <Image
            src={bookCover}
            className="inline w-full -rotate-[1deg]"
            alt="Uh oh spaghetti-oh cover" />
        </div>
        <div className="md:w-1/2 px-4 space-y-5">
          <div className="text-right -mr-2">
            <CurrencyPicker {...currencyAttributes} />
          </div>

          { currency == "AUD" ? priceList : notAvailableInCurrency }

          { currency == "AUD" &&
            <form action={action} onSubmit={() => {
              setRedirecting(true)
              posthog.capture("checkout_started", {
                option: selectedCartItem?.description,
                quantity: selectedCartItem?.quantity,
                currency,
              })
            }} method="post" className="text-center pb-10">
              {selectedCartItem && <>
                <input name="currency" type="hidden" value={currency.toLowerCase()} />
                <input name="item[0][code]" type="hidden" value={selectedCartItem.code} />
                <input name="item[0][quantity]" type="hidden" value={selectedCartItem.quantity} />
                <input name="successPath" type="hidden" value="buy/success/" />
                <input name="cancelPath" type="hidden" value="buy/uh-oh-spaghetti-oh/" />
                {selectedCartItem.coupon && <input name="coupon[]" type="hidden" value={selectedCartItem.coupon} />}
                {selectedCartItem.shipping && <input name="shippingRate[]" type="hidden" value={selectedCartItem.shipping} />}
                {selectedCartItem.adjustableQuantity && <input name="item[0][adjustableQuantity]" type="hidden" value={selectedCartItem.adjustableQuantity.toString()} />}
                {selectedCartItem.adjustableQuantityMinimum && <input name="item[0][adjustableQuantityMinimum]" type="hidden" value={selectedCartItem.adjustableQuantityMinimum.toString()} />}
                {selectedCartItem.adjustableQuantityMaximum && <input name="item[0][adjustableQuantityMaximum]" type="hidden" value={selectedCartItem.adjustableQuantityMaximum.toString()} />}
              </>}

              <IconLink as="button" type="submit" variant={redirecting ? "clear" : "primary"} styles={["h-14 !px-10 space-x-2"]}>
                {redirecting && <Loading styles={["w-10", "h-10"]} />}
                <div>{redirecting ? "One moment..." : "Buy now" }</div>
              </IconLink>
            </form>
          }
        </div>
      </div>
    </div>
  </div>
};

export default BuyBook;
