import React, { useState } from "react";

const MainPage = () => {
  // Būsena (state), kuri saugos pasirinkto žanro pavadinimą.
  // Pradinė reikšmė 'Visi', kad iš pradžių rodytų visas knygas.
  const [selectedGenre, setSelectedGenre] = useState("All Books");

  // Žanrų sąrašas, kurį naudosime mygtukams generuoti.
  const genres = ["All Books", "Detective", "Love", "History", "Science fiction", "Fantastic"];

  return (
    <div className="min-h-screen bg-[#242121] text-white p-6">
      {/* Žanrų filtravimo juosta */}
      <div className="flex justify-center items-center -mt-4 space-x-2 md:space-x-6 mb-10 pb-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            // Dinamiškai priskiriame klases pagal tai, ar žanras yra pasirinktas
            className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400
              ${
                selectedGenre === genre
                  ? 'bg-cyan-500/20 text-cyan-400' // Stilius, kai mygtukas aktyvus
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50' // Standartinis stilius
              }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
