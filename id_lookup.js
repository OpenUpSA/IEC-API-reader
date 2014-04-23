var restify = require('restify');
var config = require('./config');
var assert = require('assert');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var client = restify.createStringClient({
	url: config.apiUrl,
	userAgent: config.userAgent
});

function urlencode(data) {
	var result = [];
	for (var key in data) {
		result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
	}
	return result.join("&");
}

function oauth() {
	client.post("/token", { grant_type: "password", username: config.username, password: config.password }, function(err, req, res, data) {
		assert.ifError(err);
		var oauthToken = JSON.parse(data);
		// console.log(oauthToken);
		// if ()
		console.log("Received token, expires " + oauthToken[".expires"]);
		eventEmitter.emit("authenticated", oauthToken);
	});
}

function apiQuery(senderRes, next, controller, params) {
	oauth();
	// console.log(typeof params);
	eventEmitter.on("authenticated", function(oauthToken) {
		var path = config.apiUrl + "/api/v1/" + controller;
		if (typeof params != "undefined") {
			path +=  "?" + urlencode(params);
		}
		var options = {
			headers: {
				Authorization: "Bearer " + oauthToken.access_token
			},
			path: path
		};
		console.log(path);
		client.get(options, function(err, req, res, data) {
			// console.log("Got response", res);
			if (err) {
				return next(err);
			}
			if (data == "") {
				return next(new restify.InternalError("Received no data from the IEC"));
			}
			var result = JSON.parse(data);
			console.log(result);
			senderRes.json(result);
			next();
		});
	});
}

function eventLookup(req, res, next) {
	result = apiQuery(res, next, "ElectoralEvent", { ElectoralEventTypeID: req.params.id });
}

function idLookup(req, res, next) {
	result = apiQuery(res, next, "Voters", { Id: req.params.id });	
}

function idLookupFull(req, res, next) {
	result = apiQuery(res, next, "Voters/GetVoterAllDetails", { Id: req.params.id });	
}

function parties(req, res, next) {
	result = apiQuery(res, next, "ContestingParties", { ElectoralEventID: req.params.id });
}

function ballotResults(req, res, next) {
	result = apiQuery(res, next, "NPEBallotResults", { ElectoralEventID: req.params.id });
}

function seatAllocation(req, res, next) {
	result = apiQuery(res, next, "NPESeatAllocationResults", { ElectoralEventID: req.params.id, PartyID: req.params.party_id });
}
//Set up server
var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());

// Routes
server.get('/events', eventLookup);
server.get('/events/:id', eventLookup);
server.get('/id/:id', idLookup);
server.get('/id/full/:id', idLookupFull);
server.get('/parties/:id', parties);
server.get('/results/:id', ballotResults);
server.get('/seats/:id/:party_id', seatAllocation);

//Listen for incoming connections
server.listen(config.port, function() {
	console.log('Listening on port ' + config.port);
});