import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';
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

const Blogs = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5">Blogs</h1>
      <div className={styles.blogContainer}>
        {blogCategories.map((item) => {
          return (
            <Link key={item.id} href={item.url} className={styles.blogContent}>
              <span className={styles.headingLayer}>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
