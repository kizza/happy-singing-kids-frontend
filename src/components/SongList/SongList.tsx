import classnames from "classnames";
import React, { useContext } from "react";
import allLyrics from "../../assets/lyrics";
import { CartItem, DisplayLineItem } from "../../hooks/useCartItems";
import { NowPlayingContext } from "../../hooks/useNowPlaying";
import { PopupContext } from "../../hooks/usePopup";
import Audio from "../Audio";
import Button from "../Button";
import Checkbox from "../Checkbox";
import styles from "./SongList.module.scss";

interface Props {
  items: CartItem[];
  toggleItem?: (item: CartItem) => void;
  preview?: boolean;
}

/* const audioOnly = (items: any[]) => */
/*   items.filter(each => each.filetype === "audio"); */

const downloadOmitted = (items: any[]) =>
  items.filter(each => each.filetype !== "download");

const downloadOnly = (items: any[]) =>
  items.filter(each => each.filetype === "download");

export default ({ items, toggleItem, preview }: Props) => {
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

  const downloads = downloadOnly(items);

  const { currentSong, setCurrentSong } = useContext(NowPlayingContext);

  // Now playing (register all the stop callbacks)
  type StopPlayingSong = () => void;
  const stopPlayings: StopPlayingSong[] = [];
  const setNowPlaying = (audioId: string) => {
    stopPlayings.forEach(each => each());
    stopPlayings.length = 0;
    setCurrentSong(audioId);
  };

  const { openPopup } = useContext(PopupContext);
  const openLyrics = () => {
    openPopup(formattedLyrics());
  };

  const registerStopPlaying = (callback: StopPlayingSong) => {
    stopPlayings.push(callback);
  };

  const renderLinkItem = (item: DisplayLineItem) => (
    <li key={item.productId}>{renderAudioItem(item)}</li>
  );

  const renderAudioItem = (item: DisplayLineItem) => (
    <Audio
      registerStopPlaying={registerStopPlaying}
      setNowPlaying={setNowPlaying}
      openLyrics={openLyrics}
      key={item.productId}
      label={item.name}
      url={item.url!}
    />
  );

  const renderFileItem = (item: DisplayLineItem) => (
    <Button key={item.name} icon="download" label={item.name} url={item.url!} />
  );

  const formatText = (text: string) =>
    `<p>${text
      .trim()
      .split("\n\n")
      .join("</p><p>")
      .split("\n")
      .join("<br />")}</p>`;

  const formattedLyrics = () => {
    const lyrics = allLyrics[currentSong];
    return lyrics
      ? `<h3>${currentSong}</h3>${formatText(lyrics)}<p>~ ~ ~</p>`
      : "<p>No lyrics found</p>";
  };

  return (
    <>
      <div className={classnames(styles.SongList, preview && styles.Preview)}>
        <ul>
          {downloadOmitted(items).map(
            toggleItem ? renderCartItem : renderLinkItem
          )}
        </ul>
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
