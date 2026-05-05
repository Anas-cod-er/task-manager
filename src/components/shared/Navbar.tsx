import React from 'react';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-neutral-950 shadow-sm ">
            <div className="flex flex-row justify-between gap-2 w-full">
                <div className="flex flex-row p-2 gap-3 bg-slate-900 rounded-lg items-center text-gray-400">
                    <FaSearch />
                <input type="text" placeholder="Quick find task" className="outline-none focus:outline-none w-24 md:w-auto"  />
                 </div>
                
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Navbar;