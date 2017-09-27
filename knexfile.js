module.exports = {
  development: {
		client:     'pg',
		connection: 'postgres://localhost/hr_bud'
	},
  production: {
    client:     'postgresql',
    connection: {
    	database: 'postgres://dehuwseiapwenw:7329ef911bbe439533eb947b086b7971547b7b73cdb28a5639be2f19ab3fb0d1@ec2-23-23-159-84.compute-1.amazonaws.com:5432/ddvtr90p6df9cngs',
	    user: 'sirwilliamiii',
	    password: '4unIver$e2'
    }
  }
}
