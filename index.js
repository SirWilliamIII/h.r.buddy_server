const express    = require('express'),
      path       = require('path'),
      logger     = require('morgan'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      _          = require('lodash')

const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/router')

app.use(cors())
app.use(cors({
	origin:            process.env.CORS_ORIGIN,
	credentials:       true,
	methods:           "GET,PUT,POST,DELETE",
	preflightContinue: false
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use('/', router);

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
