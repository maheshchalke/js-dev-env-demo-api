var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Mahesh", "lastName": "Chalke", "email": "maheshchalke@gmail.com"},
    {"id": 2, "firstName": "Ram", "lastName": "Patil", "email": "patilram3@gmail.com"},
    {"id": 3, "firstName": "Prateek", "lastName": "Dushing", "email": "prateekdushing@gmail.com"},
    {"id": 3, "firstName": "Shilpa", "lastName": "Chalke", "email": "shipachalke1426@gmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});