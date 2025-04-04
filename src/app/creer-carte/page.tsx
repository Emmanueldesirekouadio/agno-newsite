import Image from "next/image";
import Link from "next/link";

export default function CreerCartePage() {
  // Create an array of 5 different star IDs for the ratings
  const stars = ["star1", "star2", "star3", "star4", "star5"];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Créez votre carte de visite numérique
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Concevez une carte de visite professionnelle en quelques minutes
          </p>
          <Link
            href="#start"
            className="bg-white text-agno px-8 py-4 rounded-full font-semibold hover:bg-agno/10 transition-colors inline-block"
          >
            Commencer maintenant
          </Link>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="agno-container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-agno/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-agno text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Choisissez un modèle
              </h3>
              <p className="text-gray-600">
                Sélectionnez parmi nos modèles professionnels celui qui
                correspond le mieux à votre image.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-agno text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personnalisez</h3>
              <p className="text-gray-600">
                Ajoutez vos informations, logo et couleurs pour créer une carte
                unique.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-agno/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-agno text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Partagez</h3>
              <p className="text-gray-600">
                Distribuez votre carte numérique instantanément via QR code ou
                lien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="start" className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <h2 className="text-3xl font-bold text-center mb-12">Nos modèles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Template 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src="/templates/template1.jpg"
                  alt="Template 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classique</h3>
                <p className="text-gray-600 mb-4">
                  Un design professionnel et épuré pour une première impression
                  impactante.
                </p>
                <button className="px-4 py-2 bg-agno text-white rounded-lg text-sm font-medium hover:bg-agno-dark transition-colors">
                  Utiliser ce modèle
                </button>
              </div>
            </div>

            {/* Template 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src="/templates/template2.jpg"
                  alt="Template 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moderne</h3>
                <p className="text-gray-600 mb-4">
                  Un style contemporain avec des éléments graphiques audacieux.
                </p>
                <button className="px-4 py-2 bg-agno text-white rounded-lg text-sm font-medium hover:bg-agno-dark transition-colors">
                  Utiliser ce modèle
                </button>
              </div>
            </div>

            {/* Template 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src="/templates/template3.jpg"
                  alt="Template 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Créatif</h3>
                <p className="text-gray-600 mb-4">
                  Une mise en page unique pour les esprits créatifs.
                </p>
                <button className="px-4 py-2 bg-agno text-white rounded-lg text-sm font-medium hover:bg-agno-dark transition-colors">
                  Utiliser ce modèle
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-block px-8 py-3 border-2 border-agno text-agno rounded-full font-semibold hover:bg-agno/10 transition-colors"
            >
              Voir tous les modèles
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="agno-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fonctionnalités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-agno/10 p-3 rounded-lg inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personnalisation complète
              </h3>
              <p className="text-gray-600">
                Modifiez les couleurs, polices et mise en page selon vos
                préférences.
              </p>
            </div>

            <div className="p-6">
              <div className="bg-agno/10 p-3 rounded-lg inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Galerie média</h3>
              <p className="text-gray-600">
                Ajoutez des images, logos et fichiers à votre carte numérique.
              </p>
            </div>

            <div className="p-6">
              <div className="bg-agno/10 p-3 rounded-lg inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Modèles professionnels
              </h3>
              <p className="text-gray-600">
                Choisissez parmi une large sélection de designs modernes.
              </p>
            </div>

            <div className="p-6">
              <div className="bg-agno/10 p-3 rounded-lg inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Mises à jour instantanées
              </h3>
              <p className="text-gray-600">
                Modifiez vos informations à tout moment, les changements sont
                immédiats.
              </p>
            </div>

            <div className="p-6">
              <div className="bg-agno/10 p-3 rounded-lg inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partage facile</h3>
              <p className="text-gray-600">
                Partagez votre carte via QR code, lien ou réseaux sociaux.
              </p>
            </div>

            <div className="p-6">
              <div className="bg-agno/10 p-3 rounded-lg inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Statistiques d'utilisation
              </h3>
              <p className="text-gray-600">
                Suivez les performances de votre carte avec des analyses
                détaillées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Agno a transformé le networking de nos
              utilisateurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {stars.map((starId) => (
                    <svg
                      key={starId}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Agno a complètement transformé ma façon de réseauter. Je n'ai
                plus besoin de transporter des cartes papier et je peux suivre
                qui consulte mes informations."
              </p>
              <div className="flex items-center">
                <div className="mr-3 relative w-10 h-10">
                  <Image
                    src="/avatars/avatar1.jpg"
                    alt="Sophie Martin"
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sophie Martin</h4>
                  <p className="text-sm text-gray-500">Consultante Marketing</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {stars.map((starId) => (
                    <svg
                      key={starId}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "La fonctionnalité de mise à jour instantanée est incroyable.
                J'ai changé de poste récemment et toutes mes cartes ont été
                mises à jour automatiquement."
              </p>
              <div className="flex items-center">
                <div className="mr-3 relative w-10 h-10">
                  <Image
                    src="/avatars/avatar2.jpg"
                    alt="Thomas Dubois"
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Thomas Dubois</h4>
                  <p className="text-sm text-gray-500">Directeur Commercial</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {stars.map((starId) => (
                    <svg
                      key={starId}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "En tant que photographe, l'aspect visuel est essentiel pour
                moi. Agno me permet de créer une carte qui reflète vraiment mon
                style et ma marque."
              </p>
              <div className="flex items-center">
                <div className="mr-3 relative w-10 h-10">
                  <Image
                    src="/avatars/avatar1.jpg"
                    alt="Marie Leroux"
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Marie Leroux</h4>
                  <p className="text-sm text-gray-500">Photographe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agno py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à créer votre carte ?
          </h2>
          <p className="text-xl mb-8">
            Commencez gratuitement et créez votre première carte en quelques
            minutes
          </p>
          <Link
            href="/inscription"
            className="bg-white text-agno agno-button hover:bg-agno/10 transition-colors"
          >
            Créer votre carte gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
}
