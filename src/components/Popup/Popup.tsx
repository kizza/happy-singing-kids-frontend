import React from "react";
import classnames from "classnames";
import styles from "./Popup.module.scss";

interface Props {
  showing: boolean;
  closing: boolean;
  onClose: () => void;
  content: string;
}

export default ({ showing, closing, content, onClose }: Props) => {
  /* const showing = !!content; */

  return (
    <>
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={classnames(styles.Popup, {
          animate__slideInUp: showing,
          animate__fadeOutDown: closing,
          animate__animated: showing || closing,
          [styles.ShowingLyrics]: showing || closing,
        })}
      >
        <div className={styles.PopupInner}>
          <button type="button" onClick={onClose}>
            <i className="fa fa-fw fa-close"></i>
          </button>
          <div
            className={styles.PopupContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
};
