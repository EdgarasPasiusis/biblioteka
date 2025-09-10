// src/components/ReviewsSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const ReviewsSection = ({ bookId, currentUser }) => {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  // Funkcija, kuri parsiunčia komentarus
  useEffect(() => {
    const fetchReviews = async () => {
      // const res = await axios.get(`${API_URL}/reviews/${bookId}`);
      // setReviews(res.data.data);
    };
    fetchReviews();
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }
    // Siunčiame naują komentarą/įvertinimą į backend'ą
    // await axios.post(`${API_URL}/reviews/${bookId}`, { rating, comment }, { withCredentials: true });
    // Atnaujiname komentarų sąrašą
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>

      {/* Forma naujam komentarui, rodoma tik prisijungus */}
      {currentUser && (
        <form onSubmit={handleSubmit} className="bg-[#2a2727] p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Leave a review</h3>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setRating(star)} className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-500'}`}>★</span>
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full bg-gray-800 p-2 rounded border border-gray-700 focus:outline-none focus:border-cyan-500"
            rows="3"
          ></textarea>
          <button type="submit" className="mt-2 bg-cyan-600 ...">Submit</button>
        </form>
      )}

      {/* Esamų komentarų sąrašas */}
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map(review => (
            <div key={review.id} className="bg-[#2a2727] p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-bold">{review.username}</span>
                <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="text-gray-300 mt-2">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;