const sql = require("../utils/postgres");

exports.postCategory = async (newCategory) => {
  const category = await sql`
      INSERT INTO categorys ${sql(
        newCategory,
        "name"
      )}
         RETURNING *;
      `;
  return category[0];
};

exports.deleteCategory = async (id) => {
  const category = await sql`
   DELETE FROM categorys
   WHERE categorys.id = ${id}
   returning *
    `;
  return category;
};

exports.updateCategory = async (id, updatedCategory) => {
  const category = await sql`
    update categorys set ${sql(
      updatedCategory,
      "name"
    )}
    where id = ${id}
    returning *;
  `;
  return category[0];
};

exports.getAllCategorys = async () => {
  const categoryList = await sql`
SELECT *
FROM categorys
    `;
  return categoryList;
};