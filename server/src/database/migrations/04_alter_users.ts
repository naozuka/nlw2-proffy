import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.alterTable('users', table => {
        table.string('email').notNullable().defaultTo('emptyEmail');
        table.string('password').notNullable().defaultTo('emptyPassword');
    });
}

export async function down(knex: Knex) {
    const tableName = 'users';
    return knex.schema.table(tableName, table => {
        return Promise.all([
            knex.schema.hasColumn(tableName, 'email').then(exists => {
                knex.schema.table(tableName, t => t.dropColumn('email'));
            }),
            knex.schema.hasColumn(tableName, 'password').then(exists => {
                knex.schema.table(tableName, t => t.dropColumn('password'));
            })
        ])
    });
}

