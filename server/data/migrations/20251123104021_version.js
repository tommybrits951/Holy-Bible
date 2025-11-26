/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("versions", tbl => {
    tbl.bigIncrements("version_id").primary()
    tbl.string("version_name").notNullable()
    tbl.string("version_abbr").notNullable()
    tbl.string("language").defaultTo("english")
    tbl.string("lang").defaultTo("eng")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("versions")
};
