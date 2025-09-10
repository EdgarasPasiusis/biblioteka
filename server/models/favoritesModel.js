const sql = require("../utils/postgres");

exports.addFavorite = async (userId, bookId) => {
  const newFavorite = await sql`
    INSERT INTO favorites (user_id, book_id)
    VALUES (${userId}, ${bookId})
    RETURNING *
  `;
  return newFavorite[0];
};

exports.removeFavorite = async (user_id, book_id) => {
  await sql`
    DELETE FROM favorites
    WHERE user_id = ${user_id} AND book_id = ${book_id};
  `;
};

exports.checkIfFavorite = async (user_id, book_id) => {
  const result = await sql`
    SELECT EXISTS (
      SELECT 1 FROM favorites WHERE user_id = ${user_id} AND book_id = ${book_id}
    );
  `;
  return result[0].exists;
};

exports.getAllFavorites = async () => {
  const favoritesList = await sql`
SELECT *
FROM favorites
    `;
  return favoritesList;
};

exports.getFavoritesByUser = async (userId) => {
  const favoritesList = await sql`
    SELECT f.id, f.book_id, b.title, b.author
    FROM favorites f
    JOIN books b ON f.book_id = b.id
    WHERE f.user_id = ${userId}
  `;
  return favoritesList;
};
