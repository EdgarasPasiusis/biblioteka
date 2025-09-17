import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const API_URL = import.meta.env.VITE_API_URL;

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const res = await axios.get(`${API_URL}/favorites`, {
          withCredentials: true,
        });
        setFavorites(res.data.data || []);
      } catch (err) {
        console.error("Failed to load favorites:", err);
        setError("Failed to load favorites.");
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [user]);

  const handleRemoveFavorite = async (bookId) => {
    try {
      await axios.delete(`${API_URL}/favorites/${bookId}`, {
        withCredentials: true,
      });
      setFavorites((prev) => prev.filter((fav) => fav.book_id !== bookId));
    } catch (err) {
      console.error("Failed to remove favorite:", err);
    }
  };

  if (!user) {
    return (
      <div className="bg-[#1a1a1a] min-h-screen text-white flex items-center justify-center">
        <p className="text-gray-400">Please log in to see your favorites.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-20">Loading favorites...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-400 mt-20">{error}</p>;
  }

  if (favorites.length === 0) {
    return (
      <div className="bg-[#1a1a1a] min-h-screen text-white flex items-center justify-center">
        <p className="text-gray-400">You haven’t added any favorites yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#242121] min-h-screen text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            &larr; Back to Library
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map((fav) => (
            <div
              key={fav.book_id}
              className="bg-[#2a2727] rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <Link to={`/books/${fav.book_id}`} className="block">
                <img
                  src={fav.image}
                  alt={fav.title}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-1">{fav.title}</h2>
                <p className="text-gray-400 text-sm mb-2">{fav.author}</p>
                <span className="inline-block bg-cyan-900/50 text-cyan-300 text-xs px-2 py-1 rounded w-fit">
                  {fav.genre}
                </span>
                <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold w-fit mt-2">
                  {fav.rating} ★
                </div>
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => handleRemoveFavorite(fav.book_id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block w-full text-center transition-colors duration-300 cursor-pointer"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
