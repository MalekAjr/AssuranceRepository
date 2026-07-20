export default function LeftSidebar() {
  return (
    <aside className="w-[30%] bg-gray-100 p-6 space-y-6">
      {/* Actualités */}
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-xl font-bold text-blue-700">ACTUALITÉS</h2>

        <p className="text-gray-500 mt-2">
          Partager l'actualité de l'entreprise
        </p>

        <h3 className="font-semibold mt-4">
          Nouvelle adresse situé au 37 rue de la Source 54000 Nancy
        </h3>

        <h3 className="font-bold mt-4 text-blue-600">Santé collective</h3>

        <p className="mt-2 text-gray-700">
          Le cabinet NEW ASSURANCES vous informe de sa nouvelle adresse situé au
          6 RUE BLAISE PASCAL 54320 MAXEVILLE. Et vous accueil tous les
          après-midi de 14h à 18h.
        </p>

        <button className="text-blue-600 mt-3">nouvelle adresse</button>
      </div>

      {/* Contact */}
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-xl font-bold text-blue-700">CONTACTEZ NOUS</h2>

        <p className="mt-4">Par téléphone : ........</p>

        <p className="mt-2">
          Du lundi au vendredi de 8h30 à 12h30 et de 13h30 à 18h00
        </p>

        <p className="mt-2">Par mail : contact@newassurances.fr</p>
      </div>
    </aside>
  );
}
