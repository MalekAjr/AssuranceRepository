import { NavLink } from "react-router-dom";
import { FaBars, FaUsers, FaFileAlt, FaLayerGroup } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";

interface Props {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export default function DashboardSidebar({ collapsed, setCollapsed }: Props) {
  const links = [
    {
      name: "Utilisateurs",
      path: "users",
      icon: <FaUsers />,
    },
    {
      name: "Les demandes",
      path: "demands",
      icon: <FaFileAlt />,
    },
    {
      name: "Les Types D'assurance",
      path: "insurance-types",
      icon: <FaLayerGroup />,
    },
    {
      name: "Les Produits",
      path: "products",
      icon: <FaProductHunt />,
    },
  ];

  return (
    <aside
      className={`relative min-h-screen bg-blue-700 text-white transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute right-[-18px] top-8 bg-blue-700 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition"
      >
        <FaBars />
      </button>

      <div className="p-5">
        {!collapsed && <h2 className="text-2xl font-bold mb-10">Dashboard</h2>}

        <nav className="space-y-4">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg font-semibold transition ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-blue-600"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>

              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
