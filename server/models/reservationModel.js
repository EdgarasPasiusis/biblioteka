const sql = require("../utils/postgres");

// Sukuria naują rezervaciją
exports.postReservation = async (newReservation) => {
  const reservation = await sql`
    INSERT INTO reservations ${sql(
      newReservation,
      "user_id",
      "book_id",
      "start_date",
      "end_date",
      "extend_count",
      "status"
    )}
    RETURNING *;
  `;
  return reservation[0];
};

// Pratęsia rezervaciją
exports.extendReservation = async (userId, bookId, newEndDate) => {
  // Patikriname ar egzistuoja rezervacija
  const existing = await sql`
    SELECT * FROM reservations
    WHERE user_id = ${userId} AND book_id = ${bookId} AND status = 'active'
    LIMIT 1
  `;
  if (!existing[0]) throw new Error("No reservation found");
  if (existing[0].extend_count >= 2) throw new Error("Maximum extend reached");

  const updated = await sql`
    UPDATE reservations
    SET end_date = ${newEndDate}, extend_count = extend_count + 1
    WHERE id = ${existing[0].id}
    RETURNING *;
  `;
  return updated[0];
};

// Grąžina visas rezervacijas (galima naudoti admin puslapiui)
exports.getAllReservations = async () => {
  const reservationList = await sql`
    SELECT r.*, b.title, b.author, b.genre_id, b.image, b.rating
    FROM reservations r
    JOIN books b ON r.book_id = b.id
  `;
  return reservationList;
};

// Grąžina aktyvias rezervacijas konkrečiam vartotojui
exports.getReservationsByUser = async (userId) => {
  const reservations = await sql`
    SELECT r.*, b.title, b.author, b.genre_id, b.image, b.rating, g.genre
    FROM reservations r
    JOIN books b ON r.book_id = b.id
    JOIN genres g ON b.genre_id = g.id
    WHERE r.user_id = ${userId} AND r.status = 'active'
    ORDER BY r.end_date ASC
  `;
  return reservations;
};

// Grąžina konkrečią vartotojo ir knygos rezervaciją
exports.getReservationByUserAndBook = async (userId, bookId) => {
  const reservations = await sql`
    SELECT r.*, b.title, b.author, b.genre_id, b.image, b.rating, g.genre
    FROM reservations r
    JOIN books b ON r.book_id = b.id
    JOIN genres g ON b.genre_id = g.id
    WHERE r.user_id = ${userId} AND r.book_id = ${bookId} AND r.status = 'active'
    LIMIT 1
  `;
  return reservations.length > 0 ? reservations[0] : null;
};
