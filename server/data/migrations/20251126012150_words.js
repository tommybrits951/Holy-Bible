/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("words", tbl => {
    tbl.bigIncrements("word_id").primary()
    tbl.integer("chapter").notNullable()
    tbl.integer("version_id").unsigned().references("version_id").inTable("versions")
    tbl.integer("book_id").unsigned().references("book_id").inTable("books")
    tbl.bigInteger("verse_number").notNullable()
    tbl.string("text").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("words")
};
