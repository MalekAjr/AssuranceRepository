import { useState } from "react";
import api from "../../../services/api";

export default function CreateInsuranceTypePage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.createInsuranceType(form);

      setMessage("Type d'assurance créé avec succès");

      setTimeout(() => {
        setMessage("");
      }, 2000);

      setForm({
        title: "",
        description: "",
      });

      setForm({
        title: "",
        description: "",
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
      <h1
        className="
text-3xl
font-bold
text-blue-700
mb-8
"
      >
        Créer un type d'assurance
      </h1>

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
          value={form.title}
          onChange={handleChange}
          placeholder="Titre"
          className="
w-full
border
rounded-lg
p-3
"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          rows={5}
          className="
w-full
border
rounded-lg
p-3
"
        />

        <button
          className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
font-bold
hover:bg-blue-700
"
        >
          Créer
        </button>
      </form>

      <p className="mt-5 text-green-600 font-bold">{message}</p>
      <p className="mt-5 text-red-600 font-bold">{messageError}</p>
    </div>
  );
}
