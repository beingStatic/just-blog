'use client';
import React, { useContext } from 'react';
import styles from './style.module.css';
import { ThemeContext } from '@/app/context/ThemeContext';
const DarkModeButton = () => {
  const { mode, handleMode } = useContext(ThemeContext);
  return (
    <div className={`${styles.container} flex relative`} onClick={handleMode}>
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
