const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');

const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static('public/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

const IP = process.env.IP || '127.0.0.1';
const PORT = process.env.PORT || 8000;

mongoose.connect(IP, 'keuchkerian');
const db = mongoose.connection;
db.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
});

app.get(/.*/, (req, res) => {
	const file = req.path.substr(1).replace('.html', ''); // Remove the leading slash and the .html extension
	let title = file;
	if(title === 'index') {
		title = '';
	} else {
		title = title.charAt(0).toUpperCase() + title.slice(1);
	}
	res.render(file, {title, file});
});

// Define schema
const Schema = mongoose.Schema;

const ProposalSchema = new Schema({
	title: {type: String, trim: true, required: true},
	planners: {type: String, trim: true, required: true},
	location: {type: String, trim: true},
	time: Date,
	details: {type: String, trim: true, required: true},
	reason: {type: String, trim: true, required: true},
	cost: {type: String, trim: true, required: true},
	items: {type: String, trim: true, required: true},
	attendance: {type: Number, min: 1, required: true}
});

// Compile model from schema
const ProposalModel = mongoose.model('ProposalModel', ProposalSchema);

app.post('/test', (req, res, next) => {
	const proposal = new ProposalModel({
		title: req.body.title,
		planners: req.body.planners,
		location: req.body.location,
		time: req.body.time,
		details: req.body.details,
		reason: req.body.reason,
		cost: req.body.cost,
		items: req.body.items,
		attendance: req.body.attendance
	});

	proposal.save((err) => {
		if(err) {
			console.log(err);
			return next(err);
		}

		return res.redirect('proposals.html');
	});
});

app.listen(PORT, IP, () => {
	console.log(`HSS website running on ${IP}:${PORT}!`);
});