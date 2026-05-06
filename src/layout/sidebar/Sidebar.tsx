import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col bg-neutral-950 shadow-sm h-170 w-50">
        <div className="justify-start mt-6">
          <div className="ml-5">
            <span>TaskFLow</span>
            <div>MANAGMENT</div>
          </div>
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal mt-20 px-1 flex-col">
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
