const sql = require("../utils/postgres");

exports.postBook = async (newBook) => {
  const book = await sql`
      INSERT INTO books ${sql(
        newBook,
        "genre_id",
        "title",
        "author",
        "description",
        "image",
        "rating"
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

exports.updateBook = async (id, updatedBook) => {
  const book = await sql`
    update books set ${sql(
      updatedBook,
      "category_id",
      "title",
      "author",
      "description",
      "image"
    )}
    where id = ${id}
    returning *;
  `;
  return book[0];
};

exports.getAllBooks = async () => {
  const bookList = await sql`
SELECT *
FROM books
JOIN genres ON books.genre_id = genres.id
    `;
  return bookList;
};

exports.getBookByID = async (id) => {
  const book = await sql`
    SELECT *
    FROM books
    WHERE books.id = ${id}
    `;
  return book;
};