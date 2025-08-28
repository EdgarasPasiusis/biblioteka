const sql = require('../utils/postgres');

exports.deleteComment = async (id) => {
  const comment = await sql`
   DELETE FROM comments
   WHERE comments.id = ${id}
   returning *
    `;
  return comment;
};

