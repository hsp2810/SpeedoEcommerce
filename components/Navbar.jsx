import React, { useState } from "react";
import Link from "next/link";
import HomeSearch from "./HomeSearch";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const Navbar = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const toggleShowUserModal = () => {
    setShowUserModal(!showUserModal);
  };
  return (
    <nav className='z-50 w-full fixed flex items-center h-10 bg-gray-100 p-7 justify-between'>
      <div>
        <Link href={"/"}>
          <h1 className='font-light text-blue-800 uppercase'>
            <ElectricBoltIcon
              style={{ marginRight: "-5px", marginTop: "-10px" }}
            />
            peedo
          </h1>
        </Link>
      </div>
      <div>
        <ul className='flex items-center'>
          <NavItem title={"home"} href={"/"} />
          <HomeSearch />
          <NavItem title={"contact"} href={"/contact"} />
        </ul>
      </div>
      <div className='relative ml-3'>
        <div>
          <button
            type='button'
            className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            id='user-menu-button'
            onClick={toggleShowUserModal}
            aria-expanded='false'
            aria-haspopup='true'
          >
            <span className='sr-only'>Open user menu</span>
            <img
              className='h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </button>
        </div>
        <div
          className={`${
            !showUserModal && "hidden"
          } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadowLg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu-button'
          tabIndex='-1'
        >
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 font-light'
            role='menuitem'
            tabIndex='-1'
            id='user-menu-item-0'
          >
            Your Profile
          </a>
          <a
            href='#'
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-red-300 font-light'
            role='menuitem'
            tabIndex='-1'
            id='user-menu-item-2'
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ title, href }) => {
  return (
    <li>
      <Link
        href={href}
        className='rounded-md  px-3 py-2 text-sm font-light text-blue-800 uppercase hover:underline'
        aria-current='page'
      >
        {title}
      </Link>
    </li>
  );
};

export default Navbar;
