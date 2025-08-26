const sql = require('../utils/postgres');

exports.postBook = async (newBook) => {
  const book = await sql`
      INSERT INTO books ${sql(
        newBook,
        "category_id",
        "name",
        "author",
        "description",
        "image"
      )}
         RETURNING *;
      `;
  return book[0];
};

exports.deleteBook = async (id) => {
  const book = await sql`
   DELETE FROM books
   WHERE books.id = ${id}
   returning *
    `;
  return book;
};

