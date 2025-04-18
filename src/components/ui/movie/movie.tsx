import { motion } from "framer-motion";
import { useState } from "react";

interface Movie {
  id: string;
  title: string;
  movieslug: string;
  language: string;
  duration: string;
  format: string;
  posterURL: string;
  body: string;
  age: string;
}

interface MoviesProps {
  movie: Movie;
}

const Movie: React.FC<MoviesProps> = ({ movie }) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  return (
    <a
      href={`/pelicula/${movie.id}`}
      className="block"
    >
      <motion.div
        key={movie.id}
        className="relative bg-transparent cursor-pointer flex flex-col justify-end items-start h-[500px] bg-contain bg-no-repeat bg-center p-4 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${movie.posterURL})`,
          viewTransitionName: `poster-${movie.movieslug}`,
        }}
        initial={{ scale: 1, backgroundSize: "110%" }}
        onMouseEnter={() => setHoveredIndex(movie.id)}
        onMouseLeave={() => setHoveredIndex(null)}
        onTouchStart={() => setHoveredIndex(movie.id)}
        onTouchEnd={() => setHoveredIndex(null)}
        whileHover={{ backgroundSize: "120%", shadow: "xl" }}
        whileTap={{ backgroundSize: "120%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gradient-to-t from-black via-transparent to-transparent w-full h-full absolute inset-0 rounded-lg" />
        <div className="relative z-10">
          <h2
            className="text-lg font-bold mb-1"
            style={{ viewTransitionName: `title-${movie.movieslug}`}}
          >
            {movie.title}
          </h2>

          <div className="flex flex-row justify-between">
            <p className="text-sm mb-1">Idioma: {movie.language}</p>
            <p className="text-sm mb-1">{movie.duration} min</p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-sm mb-3">Formato: {movie.format}</p>{" "}
            <p>{movie.age}</p>
          </div>

          {/* Descripción con animación de expansión */}
          <motion.p
            className="text-sm mb-3 overflow-hidden select-none filter bg-opacity-50"
            initial={{ height: 0 }}
            animate={{ height: hoveredIndex === movie.id ? "auto" : 0 }}
            transition={{ duration: 0.5 }}
          >
            {movie.body}
          </motion.p>
        </div>
      </motion.div>
    </a>
  );
};

export default Movie;
