import { Link } from "@/utils";
import SidebarNavList from "./SidebarNavList";
import { Menu } from "@/router";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/dashboard" className="brand-link text-center">
        <span className="brand-text font-weight-light text-center">ADMIN</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            data-accordion="false"
          >
            {Menu.map((menu, index) => (
              <SidebarNavList data={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
