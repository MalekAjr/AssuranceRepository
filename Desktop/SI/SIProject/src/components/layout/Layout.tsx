import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import assurancelogo from "../../assets/assurancelogo.png";

export default function Layout() {
  return (
    <div className="w-[70%] mx-auto min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className="flex items-center justify-between py-6">
        {/* assuranceLogo left */}
        <div className="flex items-center ml-10">
          <img
            src={assurancelogo}
            alt="SIProject assuranceLogo"
            className="h-35 w-auto object-contain"
          />
        </div>

        {/* Contact right */}
        <div className="flex flex-col items-end text-xl font-bold text-blue-600 mr-10">
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

      <div className="bg-white py-4 px-2 shadow-md">
        <div className="grid grid-cols-7 gap-12 -mt-15 bg-blue relative">
          <div className="relative group">
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
                src={assurancelogo}
                alt="Assurance Auto Moto"
                className="h-12 w-12 object-contain"
              />

              <span className="mt-2 text-sm font-semibold text-center">
                Assurance Auto/Moto
              </span>
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

          <button className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition">
            <img
              src={assurancelogo}
              alt="Santé"
              className="h-12 w-12 object-contain"
            />
            <span className="mt-2 text-sm font-semibold">Santé</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition">
            <img
              src={assurancelogo}
              alt="Habitation"
              className="h-12 w-12 object-contain"
            />
            <span className="mt-2 text-sm font-semibold">Habitation</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition">
            <img
              src={assurancelogo}
              alt="Voyage"
              className="h-12 w-12 object-contain"
            />
            <span className="mt-2 text-sm font-semibold">Voyage</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition">
            <img
              src={assurancelogo}
              alt="Vie"
              className="h-12 w-12 object-contain"
            />
            <span className="mt-2 text-sm font-semibold">Vie</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition">
            <img
              src={assurancelogo}
              alt="Entreprise"
              className="h-12 w-12 object-contain"
            />
            <span className="mt-2 text-sm font-semibold">Entreprise</span>
          </button>

          <button className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition">
            <img
              src={assurancelogo}
              alt="Autres"
              className="h-12 w-12 object-contain"
            />
            <span className="mt-2 text-sm font-semibold">Autres</span>
          </button>
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
