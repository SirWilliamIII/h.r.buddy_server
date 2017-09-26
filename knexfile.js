module.exports = {
  development: {
		client:     'pg',
		connection: 'postgres://localhost/hr_bud'
	},
  production: {
    client:     'pg',
    connection: process.env.DATABASE_URL
  }
}
