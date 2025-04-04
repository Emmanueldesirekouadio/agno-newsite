import Image from "next/image";
import Link from "next/link";

export default function FonctionnalitesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-agno to-agno-dark text-white py-16 md:py-24">
        <div className="agno-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Fonctionnalités Clés
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Agno propose une gamme de fonctionnalités conçues pour répondre à
            vos besoins professionnels
          </p>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="agno-container">
          <div className="flex flex-wrap justify-center mb-12">
            <button className="m-2 px-6 py-3 bg-agno/10 text-agno font-semibold rounded-full">
              Création Personnalisée
            </button>
            <button className="m-2 px-6 py-3 text-gray-500 hover:bg-agno/10 hover:text-agno font-semibold rounded-full transition-colors">
              Partage Facile
            </button>
            <button className="m-2 px-6 py-3 text-gray-500 hover:bg-agno/10 hover:text-agno font-semibold rounded-full transition-colors">
              Mises à Jour Instantanées
            </button>
            <button className="m-2 px-6 py-3 text-gray-500 hover:bg-agno/10 hover:text-agno font-semibold rounded-full transition-colors">
              Statistiques d'Utilisation
            </button>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Création Personnalisée
                </h3>
                <p className="text-gray-600 mb-6">
                  Concevez votre carte avec des modèles variés, des options de
                  couleurs, et des polices adaptées à votre image de marque.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-agno/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-agno"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-semibold">
                        Modèles Variés :
                      </strong>{" "}
                      Choisissez parmi une vaste bibliothèque de modèles
                      professionnels.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-agno/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-agno"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-semibold">
                        Personnalisation Complète :
                      </strong>{" "}
                      Adaptez les couleurs, polices et mise en page à votre
                      marque.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-agno/10 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="h-4 w-4 text-agno"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="font-semibold">
                        Importation Facile :
                      </strong>{" "}
                      Intégrez vos propres images et logo pour un design unique.
                    </div>
                  </li>
                </ul>
                <Link
                  href="/creer-carte"
                  className="bg-agno text-white px-8 py-3 rounded-full font-semibold hover:bg-agno-dark transition-colors inline-block self-start"
                >
                  Créer votre carte de visite
                </Link>
              </div>
              <div className="bg-agno-dark p-8 lg:p-0 flex items-center justify-center relative">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/business-cards.png"
                    alt="Cartes de visite Agno"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="agno-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Toutes nos fonctionnalités
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Éditeur Intuitif</h3>
              <p className="text-gray-600">
                Interface simple et puissante pour créer vos cartes sans
                expertise en design.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
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
              <h3 className="text-xl font-bold mb-2">Galerie de Modèles</h3>
              <p className="text-gray-600">
                Accédez à une vaste collection de modèles professionnels pour
                tous les secteurs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
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
              <h3 className="text-xl font-bold mb-2">
                Personnalisation Avancée
              </h3>
              <p className="text-gray-600">
                Ajustez chaque détail pour créer des cartes qui reflètent
                parfaitement votre marque.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
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
              <h3 className="text-xl font-bold mb-2">
                Mises à Jour Instantanées
              </h3>
              <p className="text-gray-600">
                Actualisez vos informations en temps réel sur toutes vos cartes
                partagées.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Partage Multicanal</h3>
              <p className="text-gray-600">
                Partagez vos cartes via QR code, email, SMS ou réseaux sociaux
                en un clic.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
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
              <h3 className="text-xl font-bold mb-2">Analytiques Détaillées</h3>
              <p className="text-gray-600">
                Suivez qui consulte vos cartes et optimisez votre stratégie de
                networking.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gestion des Contacts</h3>
              <p className="text-gray-600">
                Organisez vos relations professionnelles et importez facilement
                vos contacts.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sécurité Avancée</h3>
              <p className="text-gray-600">
                Protection de vos données et contrôle des accès à vos
                informations.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-agno/10 p-4 rounded-xl inline-block mb-4">
                <svg
                  className="h-6 w-6 text-agno"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Intégrations</h3>
              <p className="text-gray-600">
                Connectez Agno à vos outils favoris comme LinkedIn, Gmail, et
                bien plus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agno py-16 text-white">
        <div className="agno-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à essayer nos fonctionnalités?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Créez votre carte de visite digitale dès aujourd'hui et découvrez la
            puissance d'Agno.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/creer-carte"
              className="bg-white text-agno agno-button hover:bg-agno-dark transition-colors"
            >
              Créer votre carte gratuitement
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white agno-button hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
