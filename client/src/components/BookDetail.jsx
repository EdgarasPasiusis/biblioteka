import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import ReviewsSection from "./ReviewsSection";

const API_URL = import.meta.env.VITE_API_URL;

const BookDetail = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { user } = useContext(UserContext);


  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`${API_URL}/books/${id}`);
        setBook(res.data.data);
      } catch (err) {
        console.error("Failed to get book details:", err);
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-20">Loading book details...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-400 mt-20">{error}</p>;
  }

  if (!book) {
    return <p className="text-center text-gray-400 mt-20">Book not found.</p>;
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            &larr; Back to Library
          </Link>
        </div>

        <div className="bg-[#2a2727] rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-400 text-lg mb-4">{book.author}</p>

            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-cyan-900/50 text-cyan-300 text-sm px-3 py-1 rounded">
                {book.genre}
              </span>
              <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full font-semibold">
                {book.rating} ★
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-4 flex-grow">
              {book.description}
            </p>

            <div className="mt-6 space-x-2">
              {user && (
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-colors duration-300 cursor-pointer">
                  Reserve
                </button>
              )}
              {user && (
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition-colors duration-300 cursor-pointer">
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
