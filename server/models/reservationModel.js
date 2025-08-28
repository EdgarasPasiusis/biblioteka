const sql = require('../utils/postgres');

exports.postReservation = async (newReservation) => {
  const reservation = await sql`
      INSERT INTO reservations ${sql(
        newReservation,
        "user_id",
        "book_id",
        "start_date",
        "end_date"
      )}
         RETURNING *;
      `;
  return reservation[0];
};

exports.getAllReservations = async () => {
  const reservationList = await sql`
SELECT *
FROM reservations
    `;
  return reservationList;
};