import React from 'react'
import Link from 'next/link'
const headerData = [{
  id: '1',
  title: 'Home',
  url:'/'
}, {
  id: '2',
  title: 'About',
  url:'/about'
}]

const Header = () => {
  return (
    <div>{headerData.map(item => {
      return <Link key={item.id} url={item.url} className='cursor-pointer'>{item.title}</Link>
    })}</div>
  )
}

export default Header