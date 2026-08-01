import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Demand {
  id: number;
  nom: string;
  prenom: string;
  ville: string;
  telephone: string;
  message: string;
  createdAt: string;

  user: {
    email: string;
  };
}

export default function DemandsPage() {
  const [demands, setDemands] = useState<Demand[]>([]);
  const cityData = Object.entries(
    demands.reduce((acc: any, demand) => {
      acc[demand.ville] = (acc[demand.ville] || 0) + 1;

      return acc;
    }, {}),
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const topUsersData = Object.entries(
    demands.reduce((acc: any, demand) => {
      const email = demand.user.email;

      acc[email] = (acc[email] || 0) + 1;

      return acc;
    }, {}),
  )
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 3)
    .map(([name, value]) => ({
      name,
      value,
    }));

  const totalDemands = demands.length;

  const totalUsers = new Set(demands.map((d) => d.user.email)).size;

  const demandEvolution = Object.entries(
    demands.reduce((acc: any, demand) => {
      const date = new Date(demand.createdAt).toLocaleDateString("fr-FR");

      acc[date] = (acc[date] || 0) + 1;

      return acc;
    }, {}),
  ).map(([date, value]) => ({
    date,
    value,
  }));

  const userDemandData = Object.entries(
    demands.reduce((acc: any, demand) => {
      const email = demand.user.email;

      acc[email] = (acc[email] || 0) + 1;

      return acc;
    }, {}),
  ).map(([name, value]) => ({
    name,
    value,
  }));

  useEffect(() => {
    loadDemands();
  }, []);

  const loadDemands = async () => {
    const data = await api.getDemands();

    setDemands(data);
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];
  const BAR_COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
    "#dc2626",
    "#9333ea",
    "#0891b2",
    "#db2777",
    "#65a30d",
    "#ea580c",
    "#4f46e5",
  ];
  const CITY_COLORS = [
    "#2563eb", // Blue
    "#16a34a", // Green
    "#f59e0b", // Orange
    "#dc2626", // Red
    "#9333ea", // Purple
    "#0891b2", // Cyan
    "#db2777", // Pink
    "#65a30d", // Lime
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Les demandes</h1>

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-5">Demandes par utilisateur</h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userDemandData}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value">
                {userDemandData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={BAR_COLORS[index % BAR_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-5">Evolution des demandes</h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demandEvolution}>
              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Line type="monotone" dataKey="value" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-5">
          Répartition des demandes par utilisateur
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userDemandData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {userDemandData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500 font-semibold">
            Nombre total de demandes
          </h2>

          <p className="text-4xl font-bold text-blue-700 mt-3">
            {totalDemands}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-gray-500 font-semibold">
            Nombre de clients concernés
          </h2>

          <p className="text-4xl font-bold text-blue-700 mt-3">{totalUsers}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-5">
          Top 3 utilisateurs avec le plus de demandes
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topUsersData}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value">
                {topUsersData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      [
                        "#facc15", // 🥇 1st place Gold
                        "#9ca3af", // 🥈 2nd place Silver
                        "#b45309", // 🥉 3rd place Bronze
                      ][index]
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-5">Demandes par ville</h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cityData}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value">
                {cityData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CITY_COLORS[index % CITY_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4 text-left">Nom</th>

              <th className="p-4 text-left">Prénom</th>

              <th className="p-4 text-left">Ville</th>

              <th className="p-4 text-left">Téléphone</th>

              <th className="p-4 text-left">Par (Email)</th>

              <th className="p-4 text-left">Message</th>

              <th className="p-4 text-left">Date de Création</th>
            </tr>
          </thead>

          <tbody>
            {demands.map((d) => (
              <tr key={d.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{d.nom}</td>

                <td className="p-4">{d.prenom}</td>

                <td className="p-4">{d.ville}</td>

                <td className="p-4">{d.telephone}</td>

                <td className="p-4">{d.user.email}</td>

                <td className="p-4">{d.message}</td>

                <td className="p-4">
                  {new Date(d.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
