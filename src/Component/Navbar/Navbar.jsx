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

    const links =  navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex ' onClick={() => setOpen(!open)}>
                {
                open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
            
            <ul className={`md:hidden absolute duration-1000 text-black
                 ${open ? 'top-8 ' : '-top-40'}
                  bg-amber-200`} >
                {links}
            </ul>
            <h3 className='ml-4'><span className='text-blue-300 text-3xl'>My</span> <span className='text-3xl'>Navbar</span></h3>
            </span>

            <ul className='md:flex hidden' >
            {
              links 
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