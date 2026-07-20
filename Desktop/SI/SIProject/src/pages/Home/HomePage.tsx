import { useState } from "react";

export default function HomePage() {
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(
    null,
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Les solutions de demain, nous les préparons aujourd'hui
      </h1>

      <p className="mb-4">
        Faire preuve d'audace, mettre l'expertise au service de la nouveauté,
        réinventer le métier. De l'habitation à la santé, de l'assurance
        automobile à la moto pour les particuliers, nous mettons toute notre
        énergie dans la création de contrats souples, innovants et performants
        qui permettent à chacun de vos clients de bénéficier d'une solution
        personnalisée, conçue sur mesure.
      </p>

      <p className="mb-8">
        Et parce que vos intérêts comme ceux des assurés sont au cœur de nos
        engagements, nous proposons l'un des meilleurs rapports qualité-prix du
        marché.
      </p>

      {/* Insurance Cards */}
      <div className="grid grid-cols-3 gap-5">
        <button
          onClick={() => setSelectedInsurance("auto")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Assurance Auto/Moto
        </button>

        <button
          onClick={() => setSelectedInsurance("habitation")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Assurance Habitation
        </button>

        <button
          onClick={() => setSelectedInsurance("sante")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Assurance Santé
        </button>

        <button
          onClick={() => setSelectedInsurance("personnes")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Assurance Personnes
        </button>

        <button
          onClick={() => setSelectedInsurance("professionnelles")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Assurance professionnelles
        </button>

        <button
          onClick={() => setSelectedInsurance("emprunteur")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Assurance Emprunteur
        </button>

        <button
          onClick={() => setSelectedInsurance("voyage")}
          className="border-2 rounded-xl p-6 text-xl font-bold hover:border-blue-600"
        >
          Voyage Expats
        </button>
      </div>

      {/* Description */}
      <div className="mt-8 p-6 border rounded-xl bg-gray-50">
        {selectedInsurance === "auto" && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Assurance Auto/Moto
            </h2>

            <p>
              Découvrez les assurances Auto / Moto de la NEW ASSURANCES pour
              assurer votre véhicule. Grâce à nos solutions, profitez d’une
              assurance Auto / Moto complète et adaptée à vos besoins,
              sécurisation du permis de conduire.
            </p>

            <button className="mt-4 text-blue-600 font-bold">
              Voir plus...
            </button>
          </div>
        )}

        {selectedInsurance === "habitation" && (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Assurance Habitation
            </h2>

            <p>
              Une offre MRH Appartements et Maisons modulable. En choisissant
              des garanties optionnelles, l'offre s'adapte à votre couverture
              tout en maîtrisant votre budget.
            </p>

            <button className="mt-4 text-blue-600 font-bold">
              Voir plus...
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
