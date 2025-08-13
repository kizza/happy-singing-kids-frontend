import React from "react";
import classnames from "classnames";

interface Props {
  className?: string;
  tickClassName?: string;
  children: React.ReactNode;
}

const Tick = ({className}: {className?: string}) => <div className={classnames("text-aqua rounded-full shrink-0 w-6 h-6", className)}>
  <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9951 0.5C62.0887 0.500042 80 18.4092 80 40.5C80 62.5908 62.0887 80.5 39.9951 80.5C17.9114 80.5 9.50316e-06 62.5909 0 40.5C0 18.4091 17.9114 0.5 39.9951 0.5ZM61.1748 23.4355C59.9926 22.2535 58.0855 22.2535 56.9033 23.4355L35.0879 45.248L23.0869 33.2588C21.9147 32.0868 20.0073 32.0867 18.8252 33.2588L14.0371 38.0566C12.855 39.2287 12.8551 41.1354 14.0371 42.3174L32.9521 61.2402C34.1343 62.412 36.0416 62.4122 37.2236 61.2402L65.9629 32.4941C67.1451 31.3121 67.1451 29.4045 65.9629 28.2324L61.1748 23.4355Z" fill="currentColor"/>
  </svg>
</div>

export default ({ className, tickClassName, children }: Props) => {
  const asTick = (child: React.ReactNode, i: number) => (
    <li key={`tick-${i}`} className="flex space-x-2">
      <Tick className={tickClassName} /><span>{child}</span>
    </li>
  );

  return (
    <ul className={className}>
      {React.Children.map(children, asTick)}
    </ul>
  );
};
