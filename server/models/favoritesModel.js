const sql = require("../utils/postgres");

exports.postFavorites = async (newFavorites) => {
  const favorite = await sql`
      INSERT INTO favorites ${sql(
        newFavorites,
        "user_id",
        "book_id"
      )}
         RETURNING *;
      `;
  return favorite[0];
};

exports.deleteFavorite = async (id) => {
  const favorite = await sql`
   DELETE FROM favorites
   WHERE favorites.id = ${id}
   returning *
    `;
  return favorite;
};

exports.getAllFavorites = async () => {
  const favoritesList = await sql`
SELECT *
FROM favorites
    `;
  return favoritesList;
};