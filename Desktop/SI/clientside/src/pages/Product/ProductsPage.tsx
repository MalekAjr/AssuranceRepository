import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import api from "../../services/api";

interface Product {
  id: number;
  title: string;
  description: string;
  insuranceTypeId: number;
  createdAt: string;

  insuranceType: {
    id: number;
    title: string;
  };
}

export default function ProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [showDeleteModalProduct, setShowDeleteModalProduct] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null,
  );
  useEffect(() => {
    loadProducts();
  }, [search]);

  async function loadProducts() {
    try {
      const data = await api.getProducts(search);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmDeleteProduct() {
    if (selectedProductId === null) return;

    try {
      await api.deleteProduct(selectedProductId);

      setShowDeleteModalProduct(false);
      setSelectedProductId(null);

      loadProducts();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1
          className="
          text-3xl
          font-bold
          text-blue-700
          "
        >
          Produits d'assurances
        </h1>

        <button
          onClick={() => navigate("/dashboard/products/create")}
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
          "
        >
          + Créer un nouveau produit
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

              <th className="p-4 text-left">Produit</th>

              <th className="p-4 text-left">Description</th>

              <th className="p-4 text-left">Type d'assurance</th>

              <th className="p-4 text-left">Actions</th>

              <th className="p-4 text-left">Date de Création</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="
                border-b
                hover:bg-gray-100
                "
              >
                <td className="p-4">{product.id}</td>

                <td className="p-4 font-semibold">{product.title}</td>

                <td className="p-4">{product.description}</td>

                <td className="p-4">
                  <span
                    className="
                    bg-blue-100
                    text-blue-700
                    px-3
                    py-1
                    rounded-full
                    font-semibold
                    "
                  >
                    {product.insuranceType.title}
                  </span>
                </td>

                <td className="p-4 flex gap-3">
                  {/* View */}

                  <button
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
                    "
                  >
                    <FaEdit size={17} />
                  </button>

                  {/* Delete */}

                  <button
                    title="Supprimer"
                    onClick={() => {
                      setSelectedProductId(product.id);
                      setShowDeleteModalProduct(true);
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

                {showDeleteModalProduct && (
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
                        Supprimer ce produit ?
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
                            setShowDeleteModalProduct(false);
                            setSelectedProductId(null);
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
                          onClick={confirmDeleteProduct}
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
                  {new Date(product.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
