import React, { useState } from "react";
import styles from "./CurrencyPicker.module.scss";
import classnames from "classnames";
import ausFlag from "../../assets/flags/australia.svg";
import ukFlag from "../../assets/flags/uk.svg";
import usaFlag from "../../assets/flags/usa.svg";
import { useAnalytics } from "../../hooks/useAnalytics";

export type Currency = "AUD" | "GBP" | "USD" | "TEST";

interface Props {
  currency: Currency;
  change: (currency: Currency) => void;
}

console.log(process.env.REACT_APP_IS_DEV === "true")
const currencies = [
  "AUD", "USD", "GBP", process.env.REACT_APP_IS_DEV === "true" && "TEST"
].filter(Boolean) as Currency[]

const labels: Record<Currency, string> = {
  AUD: "Australian Dollar",
  USD: "US Dollar",
  GBP: "British Pound",
  TEST: "Test",
};

const flags: Record<Currency, string> = {
  AUD: ausFlag,
  USD: usaFlag,
  GBP: ukFlag,
  TEST: ausFlag,
};

export default ({ currency, change }: Props) => {
  const symbol = currency === "GBP" ? "£" : "$";
  const [open, setOpen] = useState<boolean>(false);
  const { trackEvent } = useAnalytics();

  const toggle = () => setOpen(!open);
  const flag = (key: Currency) => (
    <img className={styles.Flag} src={flags[key]} alt={`${key} flag`} />
  );

  const clickCurrency = (clicked: Currency) => {
    setOpen(false);
    change(clicked);
    trackEvent({
      category: "Purchasing",
      action: "Changed currency",
      label: currency,
    });
  };

  const renderList = () =>
    currencies
      .filter(each => each !== currency)
      .map(each => (
        <li key={each}>
          <button type="button" onClick={() => clickCurrency(each)}>
            {flag(each)}
            {labels[each]}
          </button>
        </li>
      ));

  return (
    <div
      className={classnames(styles.CurrencyPicker, {
        [styles.Open]: open,
      })}
    >
      <button type="button" className={styles.PickerLink} onClick={toggle}>
        {symbol}
        {currency} <i className="fa fa-chevron-down"></i>
      </button>
      <div
        className={classnames({
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
