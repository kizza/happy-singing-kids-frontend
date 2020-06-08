import React from "react";
import { CartItem } from "../../hooks/useCartItems";
import styles from "./SongList.module.scss";
import Checkbox from "../Checkbox";
import download from "../../assets/download.svg";

interface Props {
  items: CartItem[];
  toggleItem?: (item: CartItem) => void;
}

export default ({ items, toggleItem }: Props) => {
  const renderCartItem = (item: CartItem) =>
    toggleItem && (
      <Checkbox
        key={item.productId}
        onChange={() => toggleItem(item)}
        item={item}
      />
    );

  const renderLinkItem = (item: CartItem) => (
    <a
      className={styles.Link}
      href={item.url!}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={download} alt={`Download ${item.name}`} />
      <strong>{item.name}</strong>
    </a>
  );

  if (!items) {
    return <p>No items</p>;
  }

  return (
    <div className={styles.SongList}>
      {items.map(toggleItem ? renderCartItem : renderLinkItem)}
    </div>
  );
};
