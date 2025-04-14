import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];
  

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex ' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
            
            <h3 className='ml-4'>My Navbar</h3>
            </span>

            <ul className='flex'>
            {
                navigationData.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>


            {/* <ul className='flex'>
                {
                    navigationData.map(route =><li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }

            </ul> */}


            {/* <ul className='flex '>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
               
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;