'use client';
import React from 'react';
import { items } from './data';
import Image from 'next/image';
import styles from '../style.module.css';
const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  } else {
    return [];
  }
};
const BlogSubPage = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      {data.map((item) => {
        console.log(item.image);
        return (
          <div key={item.id} className={styles.blogContentContainer}>
            <div>
              <h1 className="text-2xl font-bold my-2">{item.title}</h1>
              <p>{item.content}</p>
            </div>
            <div className={styles.blogImgContainer}>
              <Image
                src={item.image}
                alt="mountain"
                fill={true}
                className={styles.blogImg}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogSubPage;
