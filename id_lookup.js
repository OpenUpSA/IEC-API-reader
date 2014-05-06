var restify = require('restify');
var config = require('./config');
var assert = require('assert');
var events = require('events');



function urlencode(data) {
	var result = [];
	for (var key in data) {
		result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
	}
	return result.join("&");
}

function oauth(eventEmitter) {
	var client = restify.createStringClient({
		url: config.apiUrl,
		userAgent: config.userAgent
	});
	console.log("Authenticating");
	client.post("/token", { grant_type: "password", username: config.username, password: config.password }, function(err, req, res, data) {
		console.log("Authenticated");
		assert.ifError(err);
		var oauthToken = JSON.parse(data);
		// console.log(oauthToken);
		// if ()
		console.log("Received token, expires " + oauthToken[".expires"]);
		eventEmitter.emit("authenticated", oauthToken);
	});
}

function apiQuery(senderRes, next, controller, params) {
	var client = restify.createStringClient({
		url: config.apiUrl,
		userAgent: config.userAgent
	});
	var eventEmitter = new events.EventEmitter();
	oauth(eventEmitter);
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
			var myresult = JSON.parse(data);
			// console.log(myresult);
			senderRes.json(myresult);
			// next();
		});
	});
}

function eventLookup(req, res, next) {
	result = apiQuery(res, next, "ElectoralEvent", { ElectoralEventTypeID: req.params.id });
	// next(false);
}

function idLookup(req, res, next) {
	result = apiQuery(res, next, "Voters", { Id: req.params.id });
	// next(false);
}

function idLookupFull(req, res, next) {
	result = apiQuery(res, next, "Voters/GetVoterAllDetails", { Id: req.params.id });
	// next(false);
}

function parties(req, res, next) {
	result = apiQuery(res, next, "ContestingParties", { ElectoralEventID: req.params.id });
	// next(false);
}

function ballotResults(req, res, next) {
	result = apiQuery(res, next, "NPEBallotResults", { ElectoralEventID: req.params.id });
	// next(false);
}

function ballotResultsProvince(req, res, next) {
	result = apiQuery(res, next, "NPEBallotResults", { ElectoralEventID: req.params.id, ProvinceID: req.params.province_id  });
	// next(false);
}

function ballotResultsMunicipality(req, res, next) {
	result = apiQuery(res, next, "NPEBallotResults", { ElectoralEventID: req.params.id, ProvinceID: req.params.province_id, MunicipalityID: req.params.municipality_id  });
	// next(false);
}

function delimination(req, res, next) {
	apiQuery(res, next, "Delimitation", req.params);
	// next(false);
}

function seatAllocation(req, res, next) {
	result = apiQuery(res, next, "NPESeatAllocationResults", { ElectoralEventID: req.params.id, ProvinceID: req.params.province_id });
	// next(false);
}

function elecResult(req, res, next) {
	result = apiQuery(res, next, "NPEBallotResults", req.params);
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
server.get('/results/:id/province/:province_id', ballotResultsProvince);
server.get('/results/:id/province/:province_id/municipality/:municipality_id', ballotResultsMunicipality);
server.get('/result/:ElectoralEventID', elecResult);
server.get('/result/:ElectoralEventID/province/:ProvinceID', elecResult);
server.get('/result/:ElectoralEventID/province/:ProvinceID/municipality/:MunicipalityID', elecResult);
server.get('/result/:ElectoralEventID/province/:ProvinceID/municipality/:MunicipalityID/ward/:WardID', elecResult);
server.get('/delimination/:ElectoralEventID', delimination);
server.get('/delimination/:ElectoralEventID/province/:ProvinceID', delimination);
server.get('/delimination/:ElectoralEventID/province/:ProvinceID/municipality/:MunicipalityID', delimination);
server.get('/delimination/:ElectoralEventID/province/:ProvinceID/municipality/:MunicipalityID/ward/:WardID', delimination);
server.get('/seats/:id/:province_id', seatAllocation);

//Listen for incoming connections
server.listen(config.port, function() {
	console.log('Listening on port ' + config.port);
});