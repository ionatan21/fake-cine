// components/ImageModal.tsx
import React from "react";

interface ImageModalProps {
  imageSrc: string;
  imageid: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  imageid,
  onClose,
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Cierra el modal solo si se hace clic fuera de la imagen
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <img
        src={imageSrc}
        alt="Imagen ampliada"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
        style={{ viewTransitionName: `image-modal-${imageid}` }}
      />
    </div>
  );
};

export default ImageModal;
