import { useEffect, useState } from "react";
import api from "../../services/api";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await api.getUsers();

    setUsers(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Utilisateurs</h1>

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
  );
}
