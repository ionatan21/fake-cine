import { useEffect, useState } from "react";

interface ResponsiveVideoProps {
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
}

const ResponsiveVideo = ({ desktopSrc, mobileSrc, className }: ResponsiveVideoProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      className={`w-full aspect-video absolute h-full select-none object-cover z-0 opacity-75 ${className}`}
      src={isMobile ? mobileSrc : desktopSrc}
    />
  );
};

export default ResponsiveVideo;