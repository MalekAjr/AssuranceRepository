import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
}

interface Demand {
  id: number;

  nom: string;

  prenom: string;

  codePostal: string;

  ville: string;

  email: string;

  telephone: string;

  message: string;

  createdAt: string;

  user: {
    email: string;
  };

  insuranceType: {
    id: number;

    title: string;

    description?: string;

    products: Product[];
  };
}

export default function DemandDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [demand, setDemand] = useState<Demand | null>(null);

  useEffect(() => {
    if (id) {
      api.getDemand(Number(id)).then((data) => {
        setDemand(data);
      });
    }
  }, [id]);

  if (!demand) {
    return <div className="p-8 text-center font-bold">Chargement...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="
mb-6
bg-gray-200
px-5
py-2
rounded-lg
hover:bg-gray-300
"
      >
        ← Retour
      </button>

      <h1
        className="
text-3xl
font-bold
text-blue-700
mb-8
"
      >
        Détails de la demande
      </h1>

      <div
        className="
bg-white
shadow
rounded-xl
p-8
mb-8
"
      >
        <h2
          className="
text-xl
font-bold
mb-5
"
        >
          Informations client
        </h2>

        <div className="grid grid-cols-2 gap-5">
          <p>
            <b>Nom :</b> {demand.nom}
          </p>

          <p>
            <b>Prénom :</b> {demand.prenom}
          </p>

          <p>
            <b>Ville :</b> {demand.ville}
          </p>

          <p>
            <b>Code postal :</b> {demand.codePostal}
          </p>

          <p>
            <b>Téléphone :</b> {demand.telephone}
          </p>

          <p>
            <b>Email :</b> {demand.email}
          </p>

          <p>
            <b>Créé par :</b> {demand.user.email}
          </p>

          <p>
            <b>Date :</b> {new Date(demand.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="mt-6">
          <p className="font-bold">Message :</p>

          <p
            className="
bg-gray-100
rounded-lg
p-4
mt-2
"
          >
            {demand.message}
          </p>
        </div>
      </div>

      <div
        className="
bg-white
shadow
rounded-xl
p-8
"
      >
        <h2
          className="
text-2xl
font-bold
text-blue-700
mb-4
"
        >
          {demand.insuranceType.title}
        </h2>

        <p className="mb-6 text-gray-600">{demand.insuranceType.description}</p>

        <h3
          className="
text-xl
font-bold
mb-5
"
        >
          Produits disponibles
        </h3>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">ID</th>

                <th className="p-4 text-left">Nom du produit</th>

                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Actions</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {demand.insuranceType.products.map((product) => (
                <tr
                  key={product.id}
                  className="
          border-b
          hover:bg-gray-100
          "
                >
                  <td className="p-4">{product.id}</td>

                  <td
                    className="
          p-4
          font-semibold
          text-blue-700
          "
                  >
                    {product.title}
                  </td>

                  <td className="p-4 text-gray-600">{product.description}</td>
                  <td className="p-4 flex gap-3">
                    <button
                      onClick={() => navigate(`/dashboard/demands/${d.id}`)}
                      title="Voir détails"
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-green-100
                        text-green-600
                        hover:bg-green-600
                        hover:text-white
                        transition
                        duration-200
                        "
                    >
                      <FaEye size={17} />
                    </button>

                    {/* Edit */}
                    <button
                      title="Modifier"
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                        text-blue-600
                        hover:bg-blue-600
                        hover:text-white
                        transition
                        duration-200
                        "
                    >
                      <FaEdit size={17} />
                    </button>

                    {/* Delete */}
                    <button
                      title="Supprimer"
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
                        duration-200
                        "
                    >
                      <FaTrash size={17} />
                    </button>
                  </td>
                  <td>{new Date(product.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
