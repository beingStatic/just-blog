import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/svgs/brand.svg';
import DarkModeButton from '../DrakModeButton/DarkModeButton';
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
    <div className="flex gap-5 py-5 items-center justify-between">
      <div>
        <Image src={logo} alt="brand" height={40}></Image>
      </div>
      <div className="flex gap-10">
        <DarkModeButton />
        {headerData.map((item) => {
          return (
            <Link key={item.id} className="cursor-pointer" href={item.url}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
