import classnames from "classnames";
import React from "react";
import checked from "../../assets/checked.svg";
import unchecked from "../../assets/unchecked.svg";
import { formatPrice } from "../../helpers";
import { CartItem } from "../../hooks/useCartItems";
import styles from "./Checkbox.module.scss";

interface Props {
  item: CartItem;
  onChange: (item: CartItem) => void;
}

export default ({ item, onChange }: Props) => (
  <label
    className={classnames(styles.Checkbox, {
      [styles.Checked]: item.enabled,
    })}
  >
    <input
      type="checkbox"
      checked={item.enabled}
      onChange={() => onChange(item)}
    />{" "}
    <img src={item.enabled ? checked : unchecked} alt="" />
    <strong>{item.name}</strong> <em>{formatPrice(item)}</em>
  </label>
);
