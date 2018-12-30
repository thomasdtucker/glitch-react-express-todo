import db from './db/db';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// GET DREAMS
app.get('/api/dreams', (req, res) => res.status(200).send(db));

// POST DREAM
app.post('/api/dreams', (req, res) => {
  const { dream } = req.body;
  if(dream){
    db.push({
      description: dream,
    });
    return req.res.status(204).send();
  }
  return req.res.status(422).send();
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
