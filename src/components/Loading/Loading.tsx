import classnames from "classnames";
import css from "./Loading.module.scss";

const loading = "/loading.svg"

const SIZES = {
  6: "w-6 h-6",
  10: "w-10 h-10",
  20: "w-20 h-20",
}

interface Props {
  label?: string;
  size?: keyof typeof SIZES;
  className?: string;
  styles?: string[];
}

export default ({ label, size, className, styles }: Props) => {
  return (
    <div className={classnames(css.Loading, className, SIZES[size || 10], "flex items-center flex-col justify-center", ...(styles || []))}>
      <div className={`${SIZES[size || 10]} ml1/2`}>
        <img src={loading} alt="Loading..." />
      </div>
      {label && <div className="text-base whitespace-nowrap">{label}</div>}
    </div>
  );
};
