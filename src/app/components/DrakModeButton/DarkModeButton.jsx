import React from 'react';
import styles from './style.module.css';
const DarkModeButton = () => {
  const mode = 'light';
  return (
    <div className={`${styles.container} flex relative`}>
      <div>⚫</div>
      <div>⚪</div>
      <div
        className={styles.circle}
        style={mode === 'light' ? { left: 2 } : { right: 2 }}
      ></div>
    </div>
  );
};

export default DarkModeButton;
