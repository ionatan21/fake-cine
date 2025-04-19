import "./Gallery.css";
import { images } from "./images";
import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function GalleryImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedId, setselectedId] = useState<string | null>(null);

  return (
    <section className="w-screen z-10 min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white p-6">
      <h1 className="text-4xl mt-24 sm:text-5xl font-bold text-center">
        Galería de Imágenes
      </h1>
      <p className="text-lg mb-4 text-center max-w-xl">
        Nuestras Instalaciones
      </p>
      <div className="parent">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`child div${index + 1}`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              viewTransitionName: `image-modal-${image.alt}`,
            }}
            initial={{ scale: 1, backgroundSize: "cover" }}
            whileHover={{ scale: 1.1, shadow: "xl", zIndex: 10 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setSelectedImage(image.src), setselectedId(image.alt);
            }}
          ></motion.button>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          imageSrc={selectedImage}
          imageid={selectedId ? selectedId : ""}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
