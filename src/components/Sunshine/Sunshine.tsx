import React from 'react';
import styles from "./Sunshine.module.scss";

type Props = {};

const Sunshine: React.FC<Props> = () => {
  const size = 500;
  const center = size / 2;
  const count = 20;

  // Generate 12 lines for the clock hands
  const lines = Array.from({ length: count }).map((_, index) => {
    const rotation = (index * 360) / count; // Calculate rotation for each hour
    return (
      <div
        key={index}
        style={{
          position: "absolute",
          top: "50vh",
          left: "0",
          width: "200vh",
          opacity: 0.1,
          // transformOrigin: `50vw 50px`,
          // transform: `rotate(${rotation}deg) translate(${center}px, ${-center + lineWidth / 2}px)`,
          transform: `rotate(${rotation}deg)`,
        }}
      />
    );
  });

  return (
    <div
      style={{
        position: 'absolute',
        width: "200vh",
        height: "100vh",
        borderRadius: '50%',
        left: "10%",
        top: "-60em",
      }}
      className={styles.Sunshine}
    >
      {lines}
    </div>
  );
};

export default Sunshine;
