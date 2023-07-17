import React from "react";

const FilterSidebar = () => {
  return (
    <div className='w-80'>
      <aside
        id='default-sidebar'
        class='fixed left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div class='h-full px-3 py-4 overflow-y-auto bg-gray-100 rounded-lg'>
          <ul class='space-y-2 font-medium'>
            <SidebarItem title={"First"} />
            <SidebarItem title={"First"} />
            <SidebarItem title={"First"} />
            <SidebarItem title={"First"} />
            <SidebarItem title={"First"} />
          </ul>
        </div>
      </aside>
    </div>
  );
};

const SidebarItem = ({ title, href }) => {
  return (
    <li>
      <a href='#' class='flex items-center p-2 text-black rounded-lg group'>
        <span class='flex-1 ml-3 whitespace-nowrap'>{title}</span>
      </a>
    </li>
  );
};

export default FilterSidebar;
