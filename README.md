# Code4SA IEC API API #

### An API for an API ###

This API just makes it a bit easier to access the IEC API. If you have your own username and password for the IEC API, feel free to use this.

## Usage ##

### List of available event types ###

**Request**
```
http://localhost:8082/events
```
**Response**
```
[{"ID":1,"Description":"National Election"},
{"ID":2,"Description":"Provincial Election"},
{"ID":3,"Description":"Local Government Election"},
{"ID":4,"Description":"By-Election"}]
```

### List of available events ###

**Request**
```
http://localhost:8082/events/1
```
**Response**
```
[ { ID: 45,
    Description: '14 Apr 2004 National Election',
    IsActive: false },
  { ID: 146,
    Description: '22 Apr 2009 National Election',
    IsActive: false },
  { ID: 61,
    Description: '27 Apr 1994 National Election',
    IsActive: false },
  { ID: 1,
    Description: 'National Elections 1999',
    IsActive: false } ]
```

### List of parties ###

**Request**
```
http://localhost:8082/parties/146
```
**Response**
```
[ { ID: 45,
    Description: '14 Apr 2004 National Election',
    IsActive: false },
  { ID: 146,
    Description: '22 Apr 2009 National Election',
    IsActive: false },
  { ID: 61,
    Description: '27 Apr 1994 National Election',
    IsActive: false },
  { ID: 1,
    Description: 'National Elections 1999',
    IsActive: false } ]
[ { ID: 504,
    Name: 'A PARTY',
    LogoUrl: 'NO_ABBR504.jpg',
    Abbreviation: 'NO_ABBR' },
  { ID: 18,
    Name: 'AFRICAN CHRISTIAN DEMOCRATIC PARTY',
    LogoUrl: 'ACDP.jpg',
    Abbreviation: 'ACDP' },
  { ID: 7,
    Name: 'AFRICAN NATIONAL CONGRESS',
    LogoUrl: 'ANC.jpg',
    Abbreviation: 'ANC' },
  { ID: 450,
    Name: 'AFRICAN PEOPLE\'S CONVENTION',
    LogoUrl: 'APC.jpg',
    Abbreviation: 'APC' },
  { ID: 447,
    Name: 'AL JAMA-AH',
    LogoUrl: 'NO_ABBR447.jpg',
    Abbreviation: 'NO_ABBR' },
  { ID: 278,
    Name: 'ALLIANCE OF FREE DEMOCRATS',
    LogoUrl: 'AFD.jpg',
    Abbreviation: 'AFD' },
  { ID: 17,
    Name: 'AZANIAN PEOPLE\'S ORGANISATION',
    LogoUrl: 'AZAPO.jpg',
    Abbreviation: 'AZAPO' },
  { ID: 451,
    Name: 'CHRISTIAN DEMOCRATIC ALLIANCE',
    LogoUrl: 'CDA.jpg',
    Abbreviation: 'CDA' },
  { ID: 499,
    Name: 'CONGRESS  OF THE PEOPLE',
    LogoUrl: 'COPE.jpg',
    Abbreviation: 'COPE' },
  { ID: 52,
    Name: 'DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE',
    LogoUrl: 'DA.jpg',
    Abbreviation: 'DA' },
  { ID: 441,
    Name: 'GREAT KONGRESS OF SOUTH AFRICA',
    LogoUrl: 'GKSA.jpg',
    Abbreviation: 'GKSA' },
  { ID: 249,
    Name: 'INDEPENDENT DEMOCRATS',
    LogoUrl: 'ID.jpg',
    Abbreviation: 'ID' },
  { ID: 3,
    Name: 'INKATHA FREEDOM PARTY',
    LogoUrl: 'IFP.jpg',
    Abbreviation: 'IFP' },
  { ID: 10,
    Name: 'KEEP IT STRAIGHT AND SIMPLE',
    LogoUrl: 'KISS.jpg',
    Abbreviation: 'KISS' },
  { ID: 31,
    Name: 'MINORITY FRONT',
    LogoUrl: 'MF.jpg',
    Abbreviation: 'MF' },
  { ID: 479,
    Name: 'MOVEMENT DEMOCRATIC PARTY',
    LogoUrl: 'MDP.jpg',
    Abbreviation: 'MDP' },
  { ID: 284,
    Name: 'NATIONAL DEMOCRATIC CONVENTION',
    LogoUrl: 'NADECO.jpg',
    Abbreviation: 'NADECO' },
  { ID: 458,
    Name: 'NEW VISION PARTY',
    LogoUrl: 'NVP.jpg',
    Abbreviation: 'NVP' },
  { ID: 8,
    Name: 'PAN AFRICANIST CONGRESS OF AZANIA',
    LogoUrl: 'PAC.jpg',
    Abbreviation: 'PAC' },
  { ID: 503,
    Name: 'PAN AFRICANIST MOVEMENT',
    LogoUrl: 'PAM.jpg',
    Abbreviation: 'PAM' },
  { ID: 455,
    Name: 'SOUTH AFRICAN DEMOCRATIC CONGRESS',
    LogoUrl: 'SADECO.jpg',
    Abbreviation: 'SADECO' },
  { ID: 2,
    Name: 'UNITED CHRISTIAN DEMOCRATIC PARTY',
    LogoUrl: 'UCDP.jpg',
    Abbreviation: 'UCDP' },
  { ID: 6,
    Name: 'UNITED DEMOCRATIC MOVEMENT',
    LogoUrl: 'UDM.jpg',
    Abbreviation: 'UDM' },
  { ID: 287,
    Name: 'UNITED INDEPENDENT FRONT',
    LogoUrl: 'UIF.jpg',
    Abbreviation: 'UIF' },
  { ID: 4,
    Name: 'VRYHEIDSFRONT PLUS',
    LogoUrl: 'VF Plus.jpg',
    Abbreviation: 'VF Plus' },
  { ID: 469,
    Name: 'WOMEN FORWARD',
    LogoUrl: 'WF.jpg',
    Abbreviation: 'WF' } ]
```
### Lookup results ###
**Request**
```
http://localhost:8082/results/146
```
**Response**
```
[ { ID: 45,
    Description: '14 Apr 2004 National Election',
    IsActive: false },
  { ID: 146,
    Description: '22 Apr 2009 National Election',
    IsActive: false },
  { ID: 61,
    Description: '27 Apr 1994 National Election',
    IsActive: false },
  { ID: 1,
    Description: 'National Elections 1999',
    IsActive: false } ]
[ { ID: 504,
    Name: 'A PARTY',
    LogoUrl: 'NO_ABBR504.jpg',
    Abbreviation: 'NO_ABBR' },
  { ID: 18,
    Name: 'AFRICAN CHRISTIAN DEMOCRATIC PARTY',
    LogoUrl: 'ACDP.jpg',
    Abbreviation: 'ACDP' },
  { ID: 7,
    Name: 'AFRICAN NATIONAL CONGRESS',
    LogoUrl: 'ANC.jpg',
    Abbreviation: 'ANC' },
  { ID: 450,
    Name: 'AFRICAN PEOPLE\'S CONVENTION',
    LogoUrl: 'APC.jpg',
    Abbreviation: 'APC' },
  { ID: 447,
    Name: 'AL JAMA-AH',
    LogoUrl: 'NO_ABBR447.jpg',
    Abbreviation: 'NO_ABBR' },
  { ID: 278,
    Name: 'ALLIANCE OF FREE DEMOCRATS',
    LogoUrl: 'AFD.jpg',
    Abbreviation: 'AFD' },
  { ID: 17,
    Name: 'AZANIAN PEOPLE\'S ORGANISATION',
    LogoUrl: 'AZAPO.jpg',
    Abbreviation: 'AZAPO' },
  { ID: 451,
    Name: 'CHRISTIAN DEMOCRATIC ALLIANCE',
    LogoUrl: 'CDA.jpg',
    Abbreviation: 'CDA' },
  { ID: 499,
    Name: 'CONGRESS  OF THE PEOPLE',
    LogoUrl: 'COPE.jpg',
    Abbreviation: 'COPE' },
  { ID: 52,
    Name: 'DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE',
    LogoUrl: 'DA.jpg',
    Abbreviation: 'DA' },
  { ID: 441,
    Name: 'GREAT KONGRESS OF SOUTH AFRICA',
    LogoUrl: 'GKSA.jpg',
    Abbreviation: 'GKSA' },
  { ID: 249,
    Name: 'INDEPENDENT DEMOCRATS',
    LogoUrl: 'ID.jpg',
    Abbreviation: 'ID' },
  { ID: 3,
    Name: 'INKATHA FREEDOM PARTY',
    LogoUrl: 'IFP.jpg',
    Abbreviation: 'IFP' },
  { ID: 10,
    Name: 'KEEP IT STRAIGHT AND SIMPLE',
    LogoUrl: 'KISS.jpg',
    Abbreviation: 'KISS' },
  { ID: 31,
    Name: 'MINORITY FRONT',
    LogoUrl: 'MF.jpg',
    Abbreviation: 'MF' },
  { ID: 479,
    Name: 'MOVEMENT DEMOCRATIC PARTY',
    LogoUrl: 'MDP.jpg',
    Abbreviation: 'MDP' },
  { ID: 284,
    Name: 'NATIONAL DEMOCRATIC CONVENTION',
    LogoUrl: 'NADECO.jpg',
    Abbreviation: 'NADECO' },
  { ID: 458,
    Name: 'NEW VISION PARTY',
    LogoUrl: 'NVP.jpg',
    Abbreviation: 'NVP' },
  { ID: 8,
    Name: 'PAN AFRICANIST CONGRESS OF AZANIA',
    LogoUrl: 'PAC.jpg',
    Abbreviation: 'PAC' },
  { ID: 503,
    Name: 'PAN AFRICANIST MOVEMENT',
    LogoUrl: 'PAM.jpg',
    Abbreviation: 'PAM' },
  { ID: 455,
    Name: 'SOUTH AFRICAN DEMOCRATIC CONGRESS',
    LogoUrl: 'SADECO.jpg',
    Abbreviation: 'SADECO' },
  { ID: 2,
    Name: 'UNITED CHRISTIAN DEMOCRATIC PARTY',
    LogoUrl: 'UCDP.jpg',
    Abbreviation: 'UCDP' },
  { ID: 6,
    Name: 'UNITED DEMOCRATIC MOVEMENT',
    LogoUrl: 'UDM.jpg',
    Abbreviation: 'UDM' },
  { ID: 287,
    Name: 'UNITED INDEPENDENT FRONT',
    LogoUrl: 'UIF.jpg',
    Abbreviation: 'UIF' },
  { ID: 4,
    Name: 'VRYHEIDSFRONT PLUS',
    LogoUrl: 'VF Plus.jpg',
    Abbreviation: 'VF Plus' },
  { ID: 469,
    Name: 'WOMEN FORWARD',
    LogoUrl: 'WF.jpg',
    Abbreviation: 'WF' } ]
{ ElectoralEventID: 146,
  ElectoralEvent: '22 Apr 2009 National Election',
  RegisteredVoters: 23181997,
  SpoiltVotes: 239237,
  Section24AVotes: 0,
  SpecialVotes: 743609,
  PercVoterTurnout: 77.3,
  TotalVotesCast: 17919966,
  TotalValidVotes: 17680729,
  VDCount: 19734,
  VDWithResultsCaptured: 19734,
  bResultsComplete: true,
  PartyBallotResults:
   [ { ID: 504, Name: 'A PARTY', ValidVotes: 2847, PercOfVotes: 0.01 },
     { ID: 18,
       Name: 'AFRICAN CHRISTIAN DEMOCRATIC PARTY',
       ValidVotes: 142658,
       PercOfVotes: 0.8 },
     { ID: 7,
       Name: 'AFRICAN NATIONAL CONGRESS',
       ValidVotes: 11650748,
       PercOfVotes: 65.89 },
     { ID: 450,
       Name: 'AFRICAN PEOPLE\'S CONVENTION',
       ValidVotes: 35867,
       PercOfVotes: 0.2 },
     { ID: 447,
       Name: 'AL JAMA-AH',
       ValidVotes: 25947,
       PercOfVotes: 0.14 },
     { ID: 278,
       Name: 'ALLIANCE OF FREE DEMOCRATS',
       ValidVotes: 5178,
       PercOfVotes: 0.02 },
     { ID: 17,
       Name: 'AZANIAN PEOPLE\'S ORGANISATION',
       ValidVotes: 38245,
       PercOfVotes: 0.21 },
     { ID: 451,
       Name: 'CHRISTIAN DEMOCRATIC ALLIANCE',
       ValidVotes: 11638,
       PercOfVotes: 0.06 },
     { ID: 499,
       Name: 'CONGRESS  OF THE PEOPLE',
       ValidVotes: 1311027,
       PercOfVotes: 7.41 },
     { ID: 52,
       Name: 'DEMOCRATIC ALLIANCE/DEMOKRATIESE ALLIANSIE',
       ValidVotes: 2945829,
       PercOfVotes: 16.66 },
     { ID: 441,
       Name: 'GREAT KONGRESS OF SOUTH AFRICA',
       ValidVotes: 8271,
       PercOfVotes: 0.04 },
     { ID: 249,
       Name: 'INDEPENDENT DEMOCRATS',
       ValidVotes: 162915,
       PercOfVotes: 0.92 },
     { ID: 3,
       Name: 'INKATHA FREEDOM PARTY',
       ValidVotes: 804260,
       PercOfVotes: 4.54 },
     { ID: 10,
       Name: 'KEEP IT STRAIGHT AND SIMPLE',
       ValidVotes: 5440,
       PercOfVotes: 0.03 },
     { ID: 31,
       Name: 'MINORITY FRONT',
       ValidVotes: 43474,
       PercOfVotes: 0.24 },
     { ID: 479,
       Name: 'MOVEMENT DEMOCRATIC PARTY',
       ValidVotes: 29747,
       PercOfVotes: 0.16 },
     { ID: 284,
       Name: 'NATIONAL DEMOCRATIC CONVENTION',
       ValidVotes: 10830,
       PercOfVotes: 0.06 },
     { ID: 458,
       Name: 'NEW VISION PARTY',
       ValidVotes: 9296,
       PercOfVotes: 0.05 },
     { ID: 8,
       Name: 'PAN AFRICANIST CONGRESS OF AZANIA',
       ValidVotes: 48530,
       PercOfVotes: 0.27 },
     { ID: 503,
       Name: 'PAN AFRICANIST MOVEMENT',
       ValidVotes: 5426,
       PercOfVotes: 0.03 },
     { ID: 455,
       Name: 'SOUTH AFRICAN DEMOCRATIC CONGRESS',
       ValidVotes: 6035,
       PercOfVotes: 0.03 },
     { ID: 2,
       Name: 'UNITED CHRISTIAN DEMOCRATIC PARTY',
       ValidVotes: 66086,
       PercOfVotes: 0.37 },
     { ID: 6,
       Name: 'UNITED DEMOCRATIC MOVEMENT',
       ValidVotes: 149680,
       PercOfVotes: 0.84 },
     { ID: 287,
       Name: 'UNITED INDEPENDENT FRONT',
       ValidVotes: 8872,
       PercOfVotes: 0.05 },
     { ID: 4,
       Name: 'VRYHEIDSFRONT PLUS',
       ValidVotes: 146796,
       PercOfVotes: 0.83 },
     { ID: 469,
       Name: 'WOMEN FORWARD',
       ValidVotes: 5087,
       PercOfVotes: 0.02 } ] }
```

### Lookup an individual by ID ###
**Request**
```
http://localhost:8082/id/12345
```
**Response**
```
{
"Id":7709285124086,"VoterStatus":"Voter is registered for 2014 NATIONAL ELECTION.",
"bRegistered":true,
"VotingStation":{
	"Name":"KOMMETJIE PRIMARY SCHOOL",
	"Delimitation":{
		"ProvinceID":9,
		"Province":"Western Cape",
		"MunicipalityID":9006,
		"Municipality":"CPT - City of Cape Town",
		"WardID":19100069,
		"VDNumber":97130167},
		"Location":{
			"Town":"KOMMETJIE",
			"Suburb":"CAPE TOWN",
			"Street":"TEUBES ROAD",
			"Latitude":"-34.140778",
			"Longitude":"18.329592"
		}
	}
}
```

### Lookup an individual by ID - full results ###
**Request**
```
http://localhost:8082/id/full/12345
```
**Response**
```
{
"Voter":{
	"Id":12345
	"VoterStatus":"Voter is registered for 2014 NATIONAL ELECTION."
	"bRegistered":true
	"VotingStation":{
		"Name":"KOMMETJIE PRIMARY SCHOOL"
		"Delimitation":{
			"ProvinceID":9
			"Province":"Western Cape"
			"MunicipalityID":9006
			"Municipality":"CPT - City of Cape Town"
			"WardID":19100069
			"VDNumber":97130167
		}
		"Location":{
			"Town":"KOMMETJIE"
			"Suburb":"CAPE TOWN"
			"Street":"TEUBES ROAD"
			"Latitude":"-34.140778"
			"Longitude":"18.329592"
		}
	}
}
"WardCouncilor":{
	"Name":"FELICITY ANNE PURCHASE"
	"Delimitation":{
		"ProvinceID":9
		"Province":"Western Cape"
		"MunicipalityID":9006
		"Municipality":"CPT - City of Cape Town","WardID":19100069,"VDNumber":0},"PartyDetail":{
			"ID":52,
			"Name":"DEMOCRATIC ALLIANCE",
			"Abbreviation":"DA",
			"LogoUrl":"DA.jpg",
			"RegStatus":"Registered",
			"RegLevel":"National",
			"ContactDetails":{
				"ContactPerson":"EUGENE ANTON DANIELS",
				"Tel":"0847138658",
				"Fax":"0866549352",
				"PostalAddress":"PO BOX 1475 CAPE TOWN   8000",
				"WebsiteUrl":"HTTP://WWW.DA.ORG.ZA"
			}
		},
		"Municipality":{
			"ID":9006,"Name":"CPT - City of Cape Town","ContactDetails":{
				"ContactPerson":"","Tel":"021 400 1111","Fax":"0860103090","PostalAddress":"","WebsiteUrl":"www.capetown.gov.za"
			}
		}
	},"SpecialVoter":{
		"SpecialVotesStatus":""
	}
}
```
