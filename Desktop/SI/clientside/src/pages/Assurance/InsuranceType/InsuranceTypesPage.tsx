import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface InsuranceType {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}
export default function InsuranceTypesPage() {
  const [insuranceTypes, setInsuranceTypes] = useState<InsuranceType[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    loadInsuranceTypes();
  }, [search]);

  async function loadInsuranceTypes() {
    try {
      const data = await api.getInsuranceTypes(search);

      setInsuranceTypes(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmDelete() {
    if (!selectedId) return;

    try {
      await api.deleteInsuranceType(selectedId);

      setShowDeleteModal(false);

      setSelectedId(null);

      loadInsuranceTypes();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Types d'assurances
        </h1>
        <button
          onClick={() => navigate("/dashboard/assuracetypes/create")}
          className="
    bg-blue-600
    text-white
    px-6
    py-3
    rounded-xl
    font-bold
    shadow-md
    hover:bg-blue-700
    hover:scale-105
    transition
    duration-300
    flex
    items-center
    gap-2
  "
        >
          + Créer un nouveau type d'assurance
        </button>
      </div>
      <div className="relative w-full max-w-md mb-6">
        <FaSearch
          className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
          "
          size={18}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un produit..."
          className="
          w-full
          pl-12
          pr-4
          py-3
          border
          border-gray-300
          rounded-xl
          shadow-sm
          outline-none
          transition
          duration-300
          focus:border-blue-600
          focus:ring-2
          focus:ring-blue-200
          hover:shadow-md
          "
        />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>

              <th className="p-4 text-left">Nom</th>

              <th className="p-4 text-left">Description</th>

              <th className="p-4 text-left">Actions</th>

              <th className="p-4 text-left">Date de Création</th>
            </tr>
          </thead>

          <tbody>
            {insuranceTypes.map((type) => (
              <tr key={type.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{type.id}</td>

                <td className="p-4 font-semibold">{type.title}</td>

                <td className="p-4">{type.description}</td>

                <td className="p-4 flex gap-3">
                  <button
                    title="Voir détails"
                    className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  bg-green-100
                  text-green-600
                  hover:bg-green-600
                  hover:text-white
                  transition
                  "
                  >
                    <FaEye size={17} />
                  </button>

                  <button
                    title="Modifier"
                    className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  transition
                  "
                  >
                    <FaEdit size={17} />
                  </button>

                  <button
                    title="Supprimer"
                    onClick={() => {
                      setSelectedId(type.id);
                      setShowDeleteModal(true);
                    }}
                    className="
  w-9
  h-9
  flex
  items-center
  justify-center
  rounded-full
  bg-red-100
  text-red-600
  hover:bg-red-600
  hover:text-white
  transition
  "
                  >
                    <FaTrash size={17} />
                  </button>
                </td>

                {showDeleteModal && (
                  <div
                    className="
fixed
inset-0
flex
items-center
justify-center
z-50
"
                  >
                    <div
                      className="
bg-white
rounded-2xl
shadow-2xl
p-8
w-96
text-center
animate-pulse
"
                    >
                      <div
                        className="
mx-auto
w-16
h-16
flex
items-center
justify-center
rounded-full
bg-red-100
text-red-600
mb-5
"
                      >
                        <FaTrash size={28} />
                      </div>

                      <h2
                        className="
text-xl
font-bold
text-gray-800
mb-3
"
                      >
                        Supprimer ce type d'assurance ?
                      </h2>

                      <p
                        className="
text-gray-500
mb-8
"
                      >
                        Cette action est définitive.
                      </p>

                      <div className="flex justify-center gap-5">
                        <button
                          onClick={() => {
                            setShowDeleteModal(false);
                            setSelectedId(null);
                          }}
                          className="
px-6
py-3
rounded-xl
bg-red-100
text-red-600
font-bold
hover:bg-red-600
hover:text-white
transition
"
                        >
                          Non
                        </button>

                        <button
                          onClick={confirmDelete}
                          className="
px-6
py-3
rounded-xl
bg-green-100
text-green-600
font-bold
hover:bg-green-600
hover:text-white
transition
"
                        >
                          Confirmer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <td className="p-4">
                  {new Date(type.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
