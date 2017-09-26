exports.seed = function (knex, Promise) {
	return knex('employees').del()
		.then(() => {
			return knex('employees').insert([
				{
					first_name: 'Will',
					last_name:  'Carpenter',
					email:      'will@wtc.com',
					phone:      '3033356111',
					address:    '1201 Clarkson Street',
					city:       'Denver',
					state:      'CO',
					department: 'Engineering',
					title:      'Software Developer'
				},
				{
					first_name: 'Stacie',
					last_name:  'Delz',
					email:      'stacie@wtc.com',
					phone:      '3033457131',
					address:    '123 Main Street',
					city:       'Denver',
					state:      'CO',
					title:      'Senior Sales Asociate'
				},
				{
					first_name: 'Stu',
					last_name:  'Banzer',
					email:      'stu@wtc.com',
					phone:      '7203356111',
					address:    '1359 Wadsworth Blvd',
					city:       'Littleton',
					state:      'CO',
					title:      'Buyer'
				},
				{
					first_name: 'Sarah',
					last_name:  'Freeman',
					email:      'sarah@wtc.com',
					phone:      '5123356111',
					address:    '1201 Downing Street',
					city:       'Denver',
					state:      'CO',
					title:      'CPA'
				},
				{
					first_name: 'David',
					last_name:  'Carbon',
					email:      'dave@wtc.com',
					phone:      '3033233434',
					address:    '127 Speer Blvd',
					city:       'Denver',
					state:      'CO',
					title:      'Maintenance Worker'
				}
			]);
		});
};
