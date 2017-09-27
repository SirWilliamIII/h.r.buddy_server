module.exports = {
  development: {
		client:     'pg',
		connection: 'postgres://localhost/hr_bud'
	},
  production: {
    client:     'pg',
    connection: {
    	database: 'postgres://dehuwseiapwenw:7329ef911bbe439533eb947b086b7971547b7b73cdb28a5639be2f19ab3fb0d1@ec2-23-23-159-84.compute-1.amazonaws.com:5432/ddvtr90p6df9cn',
	    user: 'dev.wtc3@gmail.com',
	    password: '4unIver$e2'
    }
  }
}
