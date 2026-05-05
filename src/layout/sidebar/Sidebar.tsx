import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col bg-neutral-950 shadow-sm h-170 w-50">
        <div className="justify-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal px-1 flex-col">
            <li>
              <a>Inbox</a>
            </li>
            <li>
              <a>Today</a>
            </li>
            <li>
              <a>Upcoming</a>
            </li>
            <li>
              <a>Project</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
