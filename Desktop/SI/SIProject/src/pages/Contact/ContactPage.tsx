export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Contactez-nous</h1>
      <hr className="h-2 bg-gray-500 border-0 mb-6" />
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl">
        <h2 className="text-xl font-semibold mb-6">Formulaire de contact</h2>

        <fieldset className="border-2 border-gray-300 rounded-xl p-6">
          <legend className="px-3 text-xl font-bold text-blue-700">
            Formulaire
          </legend>

          <form className="space-y-5">
            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Nom *</label>

              <input type="text" className="flex-1 border rounded-lg p-3" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Prénom</label>

              <input type="text" className="flex-1 border rounded-lg p-3" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Code postal *</label>

              <input type="text" className="flex-1 border rounded-lg p-3" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Ville</label>

              <input type="text" className="flex-1 border rounded-lg p-3" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">E-mail *</label>

              <input type="email" className="flex-1 border rounded-lg p-3" />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40 font-semibold">Tél *</label>

              <input type="tel" className="flex-1 border rounded-lg p-3" />
            </div>

            <div className="flex items-start gap-4">
              <label className="w-40 font-semibold">Message</label>

              <textarea rows={5} className="flex-1 border rounded-lg p-3" />
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
