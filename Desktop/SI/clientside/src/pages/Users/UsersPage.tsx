import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await api.getUsers();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadUsers();
  }, []);

  const chartData = [
    {
      name: "Users",
      value: users.length,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Utilisateurs</h1>

      {/* Statistics cards */}

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Total utilisateurs</h2>

          <p className="text-4xl font-bold text-blue-700">{users.length}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Nouveaux utilisateurs</h2>

          <p className="text-4xl font-bold text-green-600">
            {
              users.filter(
                (u) =>
                  new Date(u.createdAt).getMonth() === new Date().getMonth(),
              ).length
            }
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500">Téléphones enregistrés</h2>

          <p className="text-4xl font-bold text-purple-600">
            {users.filter((u) => u.phone).length}
          </p>
        </div>
      </div>

      {/* Charts */}

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Bar Chart */}

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">Nombre total utilisateurs</h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">Evolution utilisateurs</h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Line type="monotone" dataKey="value" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart */}

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">Croissance utilisateurs</h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Area type="monotone" dataKey="value" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">Répartition utilisateurs</h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    {
                      name: "Avec téléphone",
                      value: users.filter((u) => u.phone).length,
                    },
                    {
                      name: "Sans téléphone",
                      value: users.filter((u) => !u.phone).length,
                    },
                  ]}
                  dataKey="value"
                  label
                >
                  <Cell />

                  <Cell />
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
      </div>

      {/* Table */}

      <div>
        <h2 className="text-xl font-bold mb-5">Liste des utilisateurs</h2>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">ID</th>

                <th className="p-4 text-left">Nom</th>

                <th className="p-4 text-left">Prénom</th>

                <th className="p-4 text-left">Email</th>

                <th className="p-4 text-left">Téléphone</th>

                <th className="p-4 text-left">Créé le</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="p-4">{user.id}</td>

                  <td className="p-4">{user.lastName}</td>

                  <td className="p-4">{user.firstName}</td>

                  <td className="p-4">{user.email}</td>

                  <td className="p-4">{user.phone}</td>

                  <td className="p-4">
                    {new Date(user.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
