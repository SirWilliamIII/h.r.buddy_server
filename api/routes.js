const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

//  Get all employees
router.get('/', (req, res) => {
	knex('employees')
		.then(employee => {
			res.json({
				employee
			})
		})
})

// Create an employee

router.post

module.exports = router
