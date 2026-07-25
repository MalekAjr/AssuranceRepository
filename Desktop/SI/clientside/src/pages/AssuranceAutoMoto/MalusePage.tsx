export default function MalusePage() {
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Malusé </h1>
      <hr className="h-2 bg-gray-500 border-0 mb-6" />
      <p className="mb-4">
        Vous êtes conducteur malusé ? NEW ASSURANCES recherche pour vous les
        meilleures solutions afin de continuer à rouler en toute sérénité.
      </p>
      <p className="mb-4">
        Nos partenaires proposent des offres spécifiques adaptées aux
        conducteurs présentant un coefficient de malus.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Devis rapide</li>
        <li>Tarifs adaptés</li>
        <li>Accompagnement sur mesure</li>
        <li>Conseils personnalisés</li>
      </ul>
    </div>
  );
}
