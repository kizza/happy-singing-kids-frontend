import React from "react";
import { CartItem, DisplayLineItem } from "../../hooks/useCartItems";
import Audio from "../Audio";
import Checkbox from "../Checkbox";
import styles from "./SongList.module.scss";
import Button from "../Button";

interface Props {
  items: CartItem[];
  toggleItem?: (item: CartItem) => void;
}

const audioOnly = (items: any[]) =>
  items.filter(each => each.filetype === "audio");

const downloadOnly = (items: any[]) =>
  items.filter(each => each.filetype === "download");

const renderLinkItem = (item: DisplayLineItem) => (
  <li key={item.productId}>{renderAudioItem(item)}</li>
);

const renderAudioItem = (item: DisplayLineItem) => (
  <Audio label={item.name} url={item.url!} />
);

const renderFileItem = (item: DisplayLineItem) => (
  <Button icon="download" label={item.name} url={item.url!} />
);

export default ({ items, toggleItem }: Props) => {
  const renderCartItem = (item: CartItem) =>
    toggleItem && (
      <Checkbox
        key={item.productId}
        onChange={() => toggleItem(item)}
        item={item}
      />
    );

  if (!items) {
    return <p>No items</p>;
  }

  const songs = audioOnly(items);
  const downloads = downloadOnly(items);

  return (
    <>
      <div className={styles.SongList}>
        <ul>{items.map(toggleItem ? renderCartItem : renderLinkItem)}</ul>
      </div>

      {downloads.length > 0 && (
        <>
          <p>You can download them all as a ".zip" file below</p>
          <ul>{downloads.map(renderFileItem)}</ul>
        </>
      )}
    </>
  );
};
