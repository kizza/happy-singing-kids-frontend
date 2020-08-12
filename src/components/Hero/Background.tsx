import React from "react";

interface Props {
  className?: string;
}

export const Clouds = ({ className }: Props) => (
  <svg
    className={className}
    width="1343"
    height="572"
    viewBox="0 0 1343 572"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1324.65 572C1336.41 545.45 1343 516.094 1343 485.182C1343 366.708 1246.95 270.665 1128.47 270.665C1058.24 270.665 995.888 304.422 956.754 356.591C919.364 316.481 867.877 289.706 810.158 284.194C765.015 120.367 615.034 -1.907e-05 436.848 -1.907e-05C277.31 -1.907e-05 112.567 108.003 53.2344 245.778C-6.09786 383.554 0.19252 501.712 0.19252 501.712L0.192523 572L96.5068 572H1324.65Z"
      fill="white"
    />
  </svg>
);
