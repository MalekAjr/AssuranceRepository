import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import agaclogo from "../../assets/agaclogo.png";
import carlogo from "../../assets/carlogo.png";
import houselogo from "../../assets/houselogo.png";
import santelogo from "../../assets/santelogo.png";
import assurancepersonnelogo from "../../assets/assurancepersonnelogo.png";
import assuranceprofessionnel from "../../assets/assuranceprofessionnel.png";
import voyagelogo from "../../assets/voyagelogo.png";
import assuranceemprunterlogo from "../../assets/assuranceemprunterlogo.png";

export default function Layout() {
  return (
    <div className="w-[70%] mx-auto min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className="flex items-center justify-between py-6">
        {/* agaclogo left */}
        <div className="flex items-center ml-10">
          <img
            src={agaclogo}
            alt="SIProject agaclogo"
            className="h-35 w-auto object-contain"
          />
        </div>

        {/* Contact right */}
        <div className="flex flex-col items-end text-l font-bold text-blue-600 mr-5">
          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            <span>+216 XX XXX XXX</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>contact@siproject.com</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      <div className="bg-white py-4 px-2 shadow-md mt-15">
        <div className="grid grid-cols-7 gap-12 -mt-15 bg-blue relative">
          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={carlogo}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            {/*
            <Link
              to="/assurance-auto-moto"
              className="
      flex flex-col items-center justify-center
      p-3 border rounded-lg
      hover:bg-blue-50
      hover:border-blue-500
      transition
    "
            >
              <img
                src={carlogo}
                alt="Assurance Auto Moto"
                className="h-12 w-12 object-contain"
              />

              <span className="mt-2 text-sm font-semibold text-center">
                Assurance Auto/Moto
              </span>
            </Link>
*/}
            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>

          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={houselogo}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>

          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={santelogo}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            {/*
            <Link
              to="/assurance-auto-moto"
              className="
      flex flex-col items-center justify-center
      p-3 border rounded-lg
      hover:bg-blue-50
      hover:border-blue-500
      transition
    "
            >
              <img
                src={carlogo}
                alt="Assurance Auto Moto"
                className="h-12 w-12 object-contain"
              />

              <span className="mt-2 text-sm font-semibold text-center">
                Assurance Auto/Moto
              </span>
            </Link>
*/}
            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>

          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={assurancepersonnelogo}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>

          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={assuranceprofessionnel}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>

          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={assuranceemprunterlogo}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>

          <div className="relative inline-flex group">
            <Link to="/assurance-auto-moto" className="inline-flex">
              <img
                src={voyagelogo}
                alt="Assurance Auto/Moto"
                className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      bg-white
      shadow-lg
      border
      rounded-lg
      w-64
      z-50
    "
            >
              <Link
                to="/assurance-auto-moto/jeune-conducteur"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Jeune Conducteur
              </Link>

              <Link
                to="/assurance-auto-moto/resilie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Résilié / Malusées et Non Paiement
              </Link>

              <Link
                to="/assurance-auto-moto/bonus-a-vie"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Bonus à vie
              </Link>

              <Link
                to="/assurance-auto-moto/maluse"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Malusé
              </Link>

              <Link
                to="/assurance-auto-moto/temporaire"
                className="block px-4 py-3 hover:bg-blue-50"
              >
                Assurance temporaire
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        <LeftSidebar />

        <main className="w-[70%] h-[calc(100vh-80px)] overflow-y-auto bg-white p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
