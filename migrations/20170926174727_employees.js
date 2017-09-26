exports.up = function (knex, Promise) {
	return knex.schema.createTable('employees', table => {
		table.increments('id').primary()
		table.text('first_name')
		table.text('last_name')
		table.text('email')
		table.text('phone')
		table.text('address')
		table.text('city')
		table.text('state')
		table.text('department')
		table.text('title')
	})
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('employees')
};
