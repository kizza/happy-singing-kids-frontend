import React from "react";
import { useAnalytics } from "../../hooks/useAnalytics";
import ResourceList from "../ResourceList";
import items from "./files";
import styles from "./Resources.module.scss";
import Button from "../Button";

export default () => {
  /* const purchaseItem = happyPackOne[currency]; */
  const { trackEvent } = useAnalytics();

  const onClick = () => {
    trackEvent({
      category: "Resources",
      action: "Downloaded zip",
      label: "Happy Pack 1",
    });
    window.location.href =
      "https://happy-singing-kids-resources.s3.amazonaws.com/Happy+Pack+(Resources).zip";
  };

  const renderForm = () => (
    <>
      <div className={"inner"}>
        <h2>Chord charts to keep up with the kids!</h2>
        <p>
          Download the chord charts below to play along with the kids - and
          perhaps pass some instruments around to get eveyone involved!
        </p>
      </div>

      <ResourceList items={items} />

      <div className={"inner"}>
        <p className={styles.Small}>Or download them all as a zip file below</p>
      </div>

      <p className={styles.WithButton}>
        <Button
          onClick={onClick}
          icon={"download"}
          label={"Download them all"}
        ></Button>
      </p>
    </>
  );

  /* {error ? ( */
  /*   <p>Sorry, womething went wrong</p> */
  /* ) : loading ? ( */
  /*   <Loading /> */
  /* ) : ( */
  /*   renderForm() */
  /* )} */

  return <div className={styles.Home}>{renderForm()}</div>;
};
