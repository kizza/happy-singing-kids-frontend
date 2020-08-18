import React, { useState } from "react";
import styles from "./CurrencyPicker.module.scss";
import classnames from "classnames";
import ausFlag from "../../assets/flags/australia.svg";
import ukFlag from "../../assets/flags/uk.svg";
import usaFlag from "../../assets/flags/usa.svg";

export type Currency = "AUD" | "GBP" | "USD";

interface Props {
  currency: Currency;
  change: (currency: Currency) => void;
}

const currencies: Currency[] = ["AUD", "USD", "GBP"];

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

export default ({ currency, change }: Props) => {
  const symbol = currency === "GBP" ? "£" : "$";
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen(!open);
  const flag = (key: Currency) => (
    <img className={styles.Flag} src={flags[key]} alt={`${key} flag`} />
  );

  const renderList = () =>
    currencies
      .filter(each => each !== currency)
      .map(each => (
        <li key={each}>
          <a
            href={`#${each.toLowerCase()}`}
            onClick={() => {
              setOpen(false);
              change(each);
            }}
          >
            {flag(each)}
            {labels[each]}
          </a>
        </li>
      ));

  return (
    <div
      className={classnames(styles.CurrencyPicker, {
        [styles.Open]: open,
      })}
    >
      <a className={styles.PickerLink} href="#currency" onClick={toggle}>
        {symbol}
        {currency} <i className="fa fa-chevron-down"></i>
      </a>
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
