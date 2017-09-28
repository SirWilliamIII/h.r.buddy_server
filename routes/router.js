const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

/* This router is mounted at /todo */
router.get('/', (req, res) => {
	knex('employees')
		.select()
		.then(employee => {
			res.send(employee)
		});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	knex('employees')
		.select()
		.where('id', id)
		.first()
		.then(employee => {
			res.send(employee);
		});
});

router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	knex('employees')
		.select()
		.where('id', id)
		.first()
		.then(employee => {
			res.send(employee);
		});

});

router.post('/', (req, res) => {
	let newEmployee = {
		first_name: req.body.first_name,
		last_name:  req.body.last_name,
		email:      req.body.email,
		phone:      req.body.phone,
		address:    req.body.address,
		city:       req.body.city,
		state:      req.body.state
	}
	return knex.insert(newEmployee)
		.into('employees')
		.then(() => {
			res.redirect('/')
		});
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	knex('employees')
		.where('id', id)
		.update(id, 'id')
		.then(() => {
			res.redirect(`/${id}`);
		});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	knex('employees')
		.where('id', id)
		.del()
		.then(() => {
			res.redirect('/');
		});
});

module.exports = router;
