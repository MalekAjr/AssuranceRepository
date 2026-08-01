import { useEffect, useState } from "react";
import agaclogo from "../../assets/agaclogo.png";
import slider1 from "../../assets/slider1.jpg";
import assurancelogo from "../../assets/assurancelogo.png";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const images = [slider1, agaclogo, assurancelogo];

  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  function handleLogout() {
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <header className="relative w-full shadow-md">
      <div className="bg-gradient-to-b from-white to-blue-700  rounded-lg px-5 py-1">
        {/* Left button */}
        <button
          onClick={previousSlide}
          className="
      absolute left-5 top-1/2
      -translate-y-1/2
      bg-white/70
      text-blue-700
      rounded-full
      w-12 h-12
      text-3xl
      hover:bg-white
      z-10
    "
        >
          ‹
        </button>

        {/* Right button */}
        <button
          onClick={nextSlide}
          className="
      absolute right-5 top-1/2
      -translate-y-1/2
      bg-white/70
      text-blue-700
      rounded-full
      w-12 h-12
      text-3xl
      hover:bg-white
      z-10
    "
        >
          ›
        </button>

        <div className="w-full px-6 flex items-center justify-between -mt-10">
          {/* Logo */}
          <div className="flex items-center mt-8">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white font-bold hover:text-blue-200 transition"
            >
              <FaSignOutAlt className="text-2xl" />

              <span>Log Out</span>
            </button>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-end gap-5 ">
            {/* Menu */}
            <nav className="mt-8">
              <ul className="flex items-center gap-10 text-white text-l font-bold">
                <li>
                  <a href="/" className="hover:text-blue-200 transition">
                    Accueil
                  </a>
                </li>

                <li>
                  <a
                    href="/assurance"
                    className="hover:text-blue-200 transition"
                  >
                    New Assurance
                  </a>
                </li>

                <li>
                  <a href="/blog" className="hover:text-blue-200 transition">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="/contact" className="hover:text-blue-200 transition">
                    Nous contacter
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[250px] bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>
    </header>
  );
}
