import WithStyles from "@/components/WithStyles";
import classnames from "classnames";
import styles from "./Title.module.scss";

interface Props {
  level?: number,
  layout?: boolean,
  styles?: string[];
  animate?: boolean;
  children: any;
}

const Title = ({ level = 1, layout = true, styles: customStyles, children, animate = true }: Props) =>
  <h2 className={classnames(
    styles.Title,
    layout && styles.WithLayout,
    styles[`Level${level}`],
    "animate__bounceIn",
    animate && "animate__animated",
    ...(customStyles || []),
  )}>{ children }</h2>

export default WithStyles(Title, {wrap: false});
