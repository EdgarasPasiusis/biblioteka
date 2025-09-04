const sql = require("../utils/postgres");

exports.postCategory = async (newCategory) => {
  const category = await sql`
      INSERT INTO genres ${sql(
        newCategory,
        "genre"
      )}
         RETURNING *;
      `;
  return category[0];
};

exports.deleteCategory = async (id) => {
  const category = await sql`
   DELETE FROM genres
   WHERE genres.id = ${id}
   returning *
    `;
  return category;
};

exports.updateCategory = async (id, updatedCategory) => {
  const category = await sql`
    update genres set ${sql(
      updatedCategory,
      "genre"
    )}
    where id = ${id}
    returning *;
  `;
  return category[0];
};

exports.getAllCategorys = async () => {
  const categoryList = await sql`
SELECT *
FROM genres
    `;
  return categoryList;
};