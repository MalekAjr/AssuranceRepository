export default function BlogPage() {
  const articles = [
    {
      title: "Nouveau site Internet pour Votre organisation",
      date: "2015-08-10 23:45:50",
      description:
        "Votre organisation se dote d'un nouveau site internet : \"New Assurances\". Ce site vous permettra de découvrir l'entreprise et de rester en contact avec nous. Ce site est actuellement en construction, mais nous travaillons activement pour que Votre organisation se dote d'un site web complet et agréable à utiliser ! Nous vous souhaitons une ...",
    },
    {
      title: "Actualité 01",
      date: "2015-08-11 00:59:38",
      description:
        "Découvrez les dernières actualités de notre cabinet d'assurances.",
    },
    {
      title: "Près de 60% des français ne sont pas informés",
      date: "2015-08-11 01:00:57",
      description:
        "Une information importante concernant le monde de l'assurance.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Actualités</h1>
      <hr className="h-2 bg-gray-500 border-0 mb-6" />
      <div className="space-y-8">
        {articles.map((article, index) => (
          <article key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {article.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Postulé le : {article.date}
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              {article.description}
            </p>

            <button className="mt-4 text-blue-600 font-medium hover:underline">
              » lire la suite
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
