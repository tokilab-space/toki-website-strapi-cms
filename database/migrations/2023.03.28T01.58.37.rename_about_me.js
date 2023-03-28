module.exports = {
  async up(knex) {
    await knex.schema.table('profiles', table => {
      table.renameColumn('about_me', 'description');
    });
  },
  async down(knex) {
    await knex.schema.table('profiles', table => {
      table.renameColumn('description', 'about_me');
    });
  },
};