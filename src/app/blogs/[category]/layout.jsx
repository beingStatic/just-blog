'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../style.module.css';
const blogCategories = [
  {
    id: '1',
    title: 'Mountains',
    url: '/blogs/mountains',
  },
  {
    id: '2',
    title: 'Landscapes',
    url: '/blogs/landscapes',
  },
  {
    id: '3',
    title: 'Plants',
    url: '/blogs/plants',
  },
];
const Layout = ({ children, params }) => {
  return (
    <div>
      <div className={styles.tabContainer}>
        {blogCategories.map((item) => {
          const isActive =
            params.category.toLowerCase() === item.title.toLowerCase(); // Check if the current item's title matches the category param
          const tabClassName = isActive ? styles.activeTab : ''; // Set the class name based on isActive
          return (
            <Link
              key={item.id}
              href={item.url}
              className={`${tabClassName} ${styles.tabItem}`}
            >
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default Layout;
