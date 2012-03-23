var express = require('express'),
    app     = express.createServer(express.logger()),
    port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("listening on " + port);
});

app.use(express.static(__dirname + "/public"));

app.get('/', function (request, response) {
  response.sendfile(__dirname + '/index.html');
});

app.get('/items', function(request, response){
  var menuItems = [
    {
      id : 1,
      name : 'Salad',
      extras : [
        'Chicken', 'Steak', 'Shrimp'
      ]
    },
    {
      id : 2,
      name : 'Potato',
      extras : [
        'Bacon', 'Sour Cream', 'Shrimp'
      ]
    },
    {
      id : 3,
      name : 'Sandwich',
      extras : [
        'Turkey', 'Bacon'
      ]
    },
    {
      id : 4,
      name : 'Bread'
    }
  ];

  response.send(menuItems);
});
