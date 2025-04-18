import { motion } from "framer-motion";

interface NavItemProps {
  name: string;
  href: string;
  content: { label: string; href: string }[];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  mobile: boolean;
}

export default function NavItem({
  name,
  href,
  content,
  isHovered,
  onHover,
  onLeave,
  mobile,
}: NavItemProps) {
  return (
    <li
      className="relative flex-1 h-auto p-2 ml-2"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="menuitem"
    >
      <a
        href={href}
        className="block py-2  md:py-4 md:text-sm text-base mt-2 text-left border-[#17283c] border-solid"
        aria-expanded={isHovered}
        key={name}
      >
        {name}
      </a>

      {!mobile && (
        <motion.div
          className="absolute overflow-hidden z-10 "
          initial={{ height: 0 }}
          animate={{ height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {content.map((item, index) => (
            <a href={item.href} key={index}>
              <p className="text-sm text-left w-full px-2 my-2 cursor-pointer opacity-80 hover:opacity-100">
                {item.label}
              </p>
            </a>
          ))}
        </motion.div>
      )}
    </li>
  );
}
