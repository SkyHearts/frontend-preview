import React, { FC, ReactNode, Children, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
    children?: ReactNode
    // any props that come into the component
}
const TableSidebar: FC<Props>  = ({ children }) => {
  // const { isCollapsed, toggleCollapse } = useContext(SidebarContext);
  const [isCollapsed, setCollapse] = useState<boolean>(false);
  const toggleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };
  // console.log(isCollapsed)
  return(
    <>
      <div className="sidebar__wrapper">
        <button className="btn" onClick={toggleCollapse}>
          {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </button>
        <aside className="sidebar" data-collapse={isCollapsed}>
          <ul className="sidebar__list">
            {Children.map(children, child => 
            <li className="sidebar__item">
              {child}
            </li> 
            )}
          </ul>
        </aside>
      </div>
    </>
  )
};

export { TableSidebar }