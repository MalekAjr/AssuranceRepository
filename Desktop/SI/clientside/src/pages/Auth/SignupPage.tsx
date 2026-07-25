import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export default function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await api.signup(formData);

      console.log(response);

      setMessage("Compte créé avec succès");

      navigate("/login");
    } catch (error) {
      console.log(error);

      setMessage("Erreur création compte");
    }
  }

  return (
    <div className="flex items-center justify-center py-16 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Créer un compte
        </h1>

        {message && (
          <p className="text-center mb-4 font-bold text-blue-600">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">Nom</label>

            <input
              name="lastName"
              onChange={handleChange}
              type="text"
              placeholder="Votre nom"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Prénom</label>

            <input
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="Votre prénom"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">E-mail</label>

            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Votre adresse e-mail"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Téléphone</label>

            <input
              name="phone"
              onChange={handleChange}
              type="tel"
              placeholder="+216 XX XXX XXX"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Mot de passe</label>

            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Votre mot de passe"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800"
          >
            Créer un compte
          </button>
        </form>

        <p className="text-center mt-6">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" className="text-blue-700 font-bold hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
