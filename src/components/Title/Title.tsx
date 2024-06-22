import WithStyles from "@/components/WithStyles";
import classnames from "classnames";
import styles from "./Title.module.scss";

interface Props {
  styles?: string[];
  animate?: boolean;
  children: any;
}

const Title = ({ styles: customStyles, children, animate = true }: Props) =>
  <h2 className={classnames(
    styles.Title,
    "animate__bounceIn",
    // "animate__delay-1s",
    animate && "animate__animated",
    ...(customStyles || []),
  )}>{ children }</h2>

export default WithStyles(Title, {wrap: false});
