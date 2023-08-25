import React from 'react';
import Link from 'next/link';
const headerData = [
  {
    id: '1',
    title: 'Home',
    url: '/',
  },
  {
    id: '2',
    title: 'About',
    url: '/about',
  },
  {
    id: '3',
    title: 'Blogs',
    url: '/blogs',
  },
];

const Header = () => {
  return (
    <div>
      {headerData.map((item) => {
        return (
          <Link key={item.id} className="cursor-pointer" href={item.url}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
