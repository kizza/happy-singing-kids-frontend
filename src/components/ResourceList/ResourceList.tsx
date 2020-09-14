import classnames from "classnames";
import React from "react";
import styles from "./ResourceList.module.scss";
import { useAnalytics } from "../../hooks/useAnalytics";

export interface ResourceItem {
  name: string;
  url: string;
}

interface Props {
  items: ResourceItem[];
}

/* const audioOnly = (items: any[]) => */
/*   items.filter(each => each.filetype === "audio"); */

export default ({ items }: Props) => {
  if (!items) {
    return <p>No items</p>;
  }

  const { trackEvent } = useAnalytics();

  const icon = "file-text-o";

  const onClick = () => {
    trackEvent({
      category: "Resources",
      action: "Downloaded zip",
      label: "Happy Pack 1",
    });
    window.location.href =
      "https://happy-singing-kids-resources.s3.amazonaws.com/Happy+Pack+(Resources).zip";
  };

  const renderResource = (item: ResourceItem) => (
    <li key={item.name}>
      <a href={item.url} onClick={onClick}>
        <i className={`fa fa-fw fa-lg fa-${icon}`}></i>
        {item.name}
      </a>
    </li>
  );

  return (
    <div className={classnames(styles.ResourceList)}>
      <ul>{items.map(renderResource)}</ul>
    </div>
  );
};
