import React from 'react';
// import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-neutral-800 shadow-sm">
            <div className="flex flex-row justify-between gap-2">
                {/* <div className="flex flex-row">
                    <div className="mt-10 mr-5"><FaSearch /></div> */}
                <input type="text" placeholder="Search" className="text-gray-400 input input-bordered rounded-md w-24 md:w-auto"  />
                {/* </div> */}
                
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
    );
};

export default Navbar;