const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/', (req, res) => {
	knex.raw('select * from employees')
		.then(employee => {
			res.json({
				employee
			})
		})
})

// Add an employee
router.post('/', (req, res) => {
	let newEmployee = {
		first_name:   req.body.first_name,
		last_name:    req.body.last_name,
		email:   req.body.email,
		phone:   req.body.phone,
		address: req.body.address,
		city:    req.body.city,
		state:   req.body.state
	}
	return knex.insert(newEmployee)
		.into('employees')
		.then(() => {
			console.log(`${this.first_name} ${this.last_name} was inserted`)
		});
});

module.exports = router
