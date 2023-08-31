'use client';
import React from 'react';
import { items } from './data';
import Image from 'next/image';

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
          <div key={item.id}>
            <div>
              <h1 className="text-2xl font-bold mt-4">{item.title}</h1>
              <p>{item.content}</p>
            </div>
            <div>
              <Image src={item.image} alt="mountain" width={500} height={500} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogSubPage;
