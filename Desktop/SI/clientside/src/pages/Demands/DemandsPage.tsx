import { useEffect, useState } from "react";
import api from "../../services/api";

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

  useEffect(() => {
    loadDemands();
  }, []);

  const loadDemands = async () => {
    const data = await api.getDemands();

    setDemands(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Les demandes</h1>

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
