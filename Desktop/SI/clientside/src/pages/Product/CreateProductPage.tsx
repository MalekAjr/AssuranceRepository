import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CreateProductPage() {
  const [types, setTypes] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    insuranceTypeId: 0,
  });

  useEffect(() => {
    api.getInsuranceTypes().then((data) => {
      setTypes(data);

      if (data.length > 0) {
        setForm((prev) => ({
          ...prev,
          insuranceTypeId: data.id,
        }));
      }
    });
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.createProduct({
        ...form,
        insuranceTypeId: Number(form.insuranceTypeId),
      });

      setMessage("Produit créé avec succès");

      setTimeout(() => {
        setMessage("");
      }, 2000);

      setForm({
        title: "",
        description: "",
        insuranceTypeId: 0,
      });
    } catch (error) {
      console.log(error);

      setMessageError("Erreur lors de la création");

      setTimeout(() => {
        setMessageError("");
      }, 2000);
    }
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="
      w-11
      h-11
      flex
      items-center
      justify-center
      rounded-full
      bg-blue-100
      text-blue-600
      hover:bg-blue-600
      hover:text-white
      shadow-md
      hover:scale-110
      transition
      duration-300
    "
          title="Retour"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1
          className="
text-3xl
font-bold
text-blue-700
mb-8
"
        >
          Créer un produit
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="
bg-white
shadow
rounded-xl
p-8
max-w-xl
space-y-5
"
      >
        <input
          name="title"
          placeholder="Nom produit"
          value={form.title}
          onChange={handleChange}
          className="
w-full
border
rounded-lg
p-3
"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="
w-full
border
rounded-lg
p-3
"
        />

        <select
          name="insuranceTypeId"
          value={form.insuranceTypeId}
          onChange={handleChange}
          className="
    w-full
    border
    rounded-lg
    p-3
  "
        >
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.title}
            </option>
          ))}
        </select>

        <button
          className="
bg-green-600
text-white
px-6
py-3
rounded-lg
font-bold
hover:bg-green-700
"
        >
          Créer produit
        </button>
      </form>

      <p className="mt-5 text-green-600 font-bold">{message}</p>
      <p className="mt-5 text-red-600 font-bold">{messageError}</p>
    </div>
  );
}
