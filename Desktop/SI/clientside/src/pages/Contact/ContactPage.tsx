import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function ContactPage() {
  interface InsuranceType {
    id: number;
    title: string;
    description?: string;
  }
  const [insuranceTypes, setInsuranceTypes] = useState<InsuranceType[]>([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    codePostal: "",
    ville: "",
    email: "",
    telephone: "",
    insuranceTypeId: 0,
    message: "",
  });

  useEffect(() => {
    api.getInsuranceTypes().then((data) => {
      setInsuranceTypes(data);
    });
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "insuranceTypeId" ? Number(value) : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Visitor protection

    if (!user) {
      navigate("/login");

      return;
    }

    try {
      const response = await api.createDemand({
        ...formData,

        userId: user.id,
      });

      console.log(response);

      setMessage("Votre demande a été envoyée avec succès");

      setFormData({
        nom: "",
        prenom: "",
        codePostal: "",
        ville: "",
        email: "",
        telephone: "",
        insuranceTypeId: insuranceTypes.length > 0 ? insuranceTypes[0].id : 0,
        message: "",
      });
    } catch (error) {
      console.log(error);

      setMessage("Erreur lors de l'envoi de la demande");
    }
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Contactez-nous</h1>

      <hr className="h-2 bg-gray-500 border-0 mb-6" />

      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl">
        <h2 className="text-xl font-semibold mb-6">
          Formulaire de Demande/contact
        </h2>

        {message && (
          <p className="mb-5 text-center font-bold text-blue-600">{message}</p>
        )}

        <fieldset className="border-2 border-gray-300 rounded-xl p-6">
          <legend className="px-3 text-xl font-bold text-blue-700">
            Formulaire
          </legend>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Nom *</label>

              <input
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                type="text"
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Prénom</label>

              <input
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                type="text"
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Code postal *</label>

              <input
                name="codePostal"
                value={formData.codePostal}
                onChange={handleChange}
                type="text"
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Ville</label>

              <input
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                type="text"
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">E-mail *</label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Tél *</label>

              <input
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                type="tel"
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Type d'assurance *</label>

              <select
                name="insuranceTypeId"
                value={formData.insuranceTypeId}
                onChange={handleChange}
                className="flex-1 border rounded-lg p-3"
              >
                {insuranceTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-start gap-4">
              <label className="w-40 font-semibold">Message</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="flex-1 border rounded-lg p-3"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="
                bg-blue-600
                text-white
                px-8
                py-3
                rounded-lg
                font-bold
                hover:bg-blue-700
                "
              >
                Envoyer
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
