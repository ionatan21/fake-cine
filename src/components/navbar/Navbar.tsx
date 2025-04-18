import { useState } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { useMediaQuery } from "../../utils/useMediaQuery";
import "./Navbar.css";

const navItems = [
  { name: "Inicio", href: "/#home", content: [] },
  {
    name: "Nosotros",
    href: "/about",
    content: [
      { label: "Ubicación", href: "/about#ubicacion" },
      { label: "Historia", href: "/about#historia" },
    ],
  },
  {
    name: "Películas",
    href: "/billboard",
    content: [
      { label: "Cartelera", href: "/billboard" },
      { label: "Próximos estrenos", href: "/premieres" },
    ],
  },
  {
    name: "Promociones",
    href: "/promos",
    content: [
      { label: "Miércoles 2x1", href: "/promos" },
      { label: "Jueves de palomitas", href: "/promos" },
    ],
  },
  {
    name: "Galería",
    href: "/gallery",
    content: [
      { label: "Nuestras instalaciones", href: "/galeria#instalaciones" },
    ],
  },
  {
    name: "Contáctenos",
    href: "/contacto",
    content: [{ label: "Envíanos un mensaje", href: "/contacto#mensaje" }],
  },
];

export default function ReactNavbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -55 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`bg-[#0f2541] font-sans font-bold ${
        isMobile
          ? isMenuOpen
            ? "opacity-100"
            : "opacity-85"
          : hoveredIndex !== null
            ? "opacity-100"
            : "opacity-85"
      }  text-white fixed w-screen top-0 left-0 z-50 flex flex-col md:flex-row justify-end md:justify-end items-end`}
    >
      {/* Logo */}
      <a href="/#home">
        <img
          className="h-24 opacity-85 hover:opacity-100 w-24 absolute left-0 top-0 md:h-20 ml-4 md:ml-14 mt-4 z-20"
          src="/logo-fake.webp"
          alt="logo-cine"
        />
      </a>
      {/* Icono de menú para móviles */}
      <button
        className="block md:hidden text-white text-2xl p-4 overflow-hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Menú */}
      <motion.div
        className={`md:w-[70%] w-full px-4 mr-5 absolute md:static top-16 left-0 bg-[#0f2541] md:bg-transparent ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
        initial={{ height: 64 }}
        animate={{
          height: isMobile
            ? isMenuOpen
              ? 450 // Expansión en mobile
              : 64 // Contracción en mobile
            : hoveredIndex !== null
              ? 140 // Expansión en desktop
              : 64, // Contracción en desktop
        }}
        transition={{
          height: { duration: 0.3, ease: "easeInOut" }, // Animación para altura
        }}
      >
        <motion.ul
          className="flex flex-col md:mt-0 mt-10 md:flex-row items-start md:items-center"
          initial={{ opacity: isMobile ? 0 : 1 }}
          animate={{ opacity: isMobile ? (isMenuOpen ? 1 : 0) : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={item.name}
              {...item}
              isHovered={hoveredIndex ? hoveredIndex === index : false}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              mobile={isMobile}
            />
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
}
