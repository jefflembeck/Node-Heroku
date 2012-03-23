var express = require('express'),
    app     = express.createServer(express.logger());

app.listen(3030);

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
