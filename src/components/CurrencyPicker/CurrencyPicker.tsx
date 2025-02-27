"use client"

import React, { useEffect, useRef, useState, MouseEvent } from "react";
import styles from "./CurrencyPicker.module.scss";
import classnames from "classnames";
import ausFlag from "@/assets/flags/australia.svg";
import ukFlag from "@/assets/flags/uk.svg";
import usaFlag from "@/assets/flags/usa.svg";
import Image from "next/image"
import { Currency } from "@/hooks/useCurrency"
import { useAnalytics } from "../../hooks/useAnalytics";

export interface Props {
  currency: Currency;
  symbol: string,
  change: (currency: Currency) => void;
}

const currencies: Currency[] = ["AUD", "USD", "GBP"]

const labels: Record<Currency, string> = {
  AUD: "Australian Dollar",
  USD: "US Dollar",
  GBP: "British Pound",
};

const flags: Record<Currency, string> = {
  AUD: ausFlag,
  USD: usaFlag,
  GBP: ukFlag,
};

export default ({currency, symbol, change}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const { trackEvent } = useAnalytics();

  // Close the dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggle = () => setOpen(!open);
  const flag = (key: Currency) => (
    <Image className={styles.Flag} src={flags[key]} alt={`${key} flag`} />
  );

  const clickCurrency = (clicked: Currency) => {
    setOpen(false);
    change(clicked);
    // trackEvent({
    //   category: "Purchasing",
    //   action: "Changed currency",
    //   label: currency,
    // });
  };

  const renderList = () =>
    currencies
      .filter(each => each !== currency)
      .map(each => (
        <li key={each}>
          <button type="button"
            className="flex items-center space-x-2 whitespace-nowrap w-full p-3"
            onClick={() => clickCurrency(each)}
          >
            {flag(each)}
            <span>{labels[each]}</span>
          </button>
        </li>
      ));

  return (
    <div className={classnames(styles.CurrencyPicker, "inline-block", {
        [styles.Open]: open,
      })}
      ref={dropdownRef}
    >
      <button type="button" className={`${styles.PickerLink} p-2 appearance-none text-xs flex items-center space-x-1`}
        onFocus={() => setOpen(true)}
      >
        {flag(currency)}
        <div>{currency} <i className="fa fa-chevron-down" aria-hidden></i></div>
      </button>
      <div
        className={classnames("w-max text-xs", {
          animate__animated: open,
          animate__fadeIn: open,
          [styles.Options]: true,
          [styles.Closed]: !open,
        })}
      >
        <ul className={styles.List}>{renderList()}</ul>
      </div>
    </div>
  );
};
