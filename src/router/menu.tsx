import { Menu } from "@/interface";

const menu: Array<Menu> = [
  {
    path: "/admin/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },
  {
    path: "/admin/widgets",
    icon: "nav-icon fas fa-th",
    title: "Widgets",
  },

  {
    path: "#",
    icon: "nav-icon fas fa-edit",
    title: "Forms",
    children: [
      {
        path: "#",
        title: "General Elements",
      },
      {
        path: "#",
        title: "Advanced Elements",
      },
      {
        path: "#",
        title: "Editors",
      },
      {
        path: "#",
        title: "Validation",
      },
    ],
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Menu Level",
    children: [
      {
        path: "#",
        title: "Level 1",
      },
      {
        path: "#",
        title: "Level 2",
        icon: "nav-icon fas far fa-circle nav-icon",
        children: [
          {
            path: "#",
            title: "Sub Level 2",
          },
          {
            path: "#",
            title: "Sub Level 3",
          },
          {
            path: "#",
            title: "Sub Level 4",
          },
        ],
      },
      {
        path: "#",
        title: "Level 3",
      },
    ],
  },
];

export default menu;
