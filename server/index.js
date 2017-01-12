// Node.js REST API with JSON Web Tokens & Authentication
// This is to simulate a backend API only
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var config = require('./config');
var cors = require('cors');

app.use(bodyParser.json());
app.set('superSecret', config.secret);
app.set('users', config.users);

// cors
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// “Hello World” of web servers
app.get('/', function(req, res) {
  res.send('Hello World!');
});

var resources = [{
  id: 1,
  name: 'Foo'
}];

// authenticationMiddleware
app.post('/authenticate', function(req, res) {
  if (!req.body.username) {
    console.error('Authentication failed. Try again. username: ' + req.body.username );
    res.status(401).json({
      success: false,
      message: 'Authentication failed. Try again.'
    });
    return;
  }
  if (!req.body.password) {
    console.error('Authentication failed. Try again. username: '+ req.body.username);
    res.status(401).json({
      success: false,
      message: 'Authentication failed. Try again.'
    });
    return;
  }
  if (app.get('users')[req.body.username] !== req.body.password) {
    console.error('Authentication failed. Wrong username and password. Try again. username: ' + req.body.username );
    res.status(401).json({
      success: false,
      message: 'Authentication failed. Try again.'
    });
    return;
  }
  var token = jwt.sign({
    data: req.body.username
  }, app.get('superSecret'), {
    expiresIn: '5m'
  });
  // return the information including token as JSON
  console.log('Success --- ' + req.body.username + ' logged in.');
  res.json({
    success: true,
    message: 'Enjoy your token!',
    token: token
  });
});

// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});

// CORS
apiRoutes.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// SECURE  -------------------
// Route middleware to verify a token
apiRoutes.use(function(req, res, next) {
  console.log('API ROUTES ...');
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        console.log('Token valid');
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

// Protected routes (because below the route middleware to verify a token)
// request the /resources  url, we’ll return the entire array
apiRoutes.get('/resources', function(req, res) {
  res.send(resources);
});

// Using path variables, we can also request a specific resource (in this case by id)
apiRoutes.get('/resources/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  var result = resources.filter(r => r.id === id)[0];

  if (!result) {
    res.sendStatus(404);
  } else {
    res.send(result);
  }
});

// Create new item -- the data that we want to use to populate the new item will be located in the body of the request.
apiRoutes.post('/resources', function(req, res) {
  var item = req.body;

  if (!item.id) {
    return res.sendStatus(500);
  }

  resources.push(item);

  res.send('/resources/' + item.id);
});

// update existing records
apiRoutes.put('/resources/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  var existingItem = resources.filter(r => r.id === id)[0];

  if (!existingItem) {
    let item = req.body;
    item.id = id;
    resources.push(item);
    res.setHeader('Location', '/resources/' + id);
    res.sendStatus(201);
  } else {
    existingItem.name = req.body.name;
    res.sendStatus(204);
  }
});

// remove records from the collection
apiRoutes['delete']('/resources/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  var existingItem = resources.filter(r => r.id === id)[0];

  if (!existingItem) {
    return res.sendStatus(404);
  }

  resources = resources.filter(r => r.id !== id);
  res.sendStatus(204);
});

// apply the routes to our application with the prefix /resources
app.use('/api', apiRoutes);

// Server
var server = app.listen(3000, function() {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
