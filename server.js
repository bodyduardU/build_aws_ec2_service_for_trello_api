var express = require('express');
const app = express();
var cors = require('cors');
var mongoose = require('mongoose');
// var router = require('route');
app.use(cors());
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({
  extended: false,
});
app.use(bodyParser.json());
app.use(urlencodeParser);
app.use('/user', () => {
  console.log('123');
});

mongoose
  .connect('mongodb://localhost:27017/db_prello')
  .then(() => {
    console.log('SUccessfully connect to MongoDB.');
  })
  .catch((err) => {
    console.log('======>', err);
  });

var fetch = require('node-fetch');
fetch(
  'https://api.trello.com/1/members/me/boards?key=7c1b127ab842ef6b6163f45eaa980d4b&xtoken=ATTA463bd12303cd72bef013f6480b51a5124b66c2424fd6977c624dd3693996bdf3D71D9192',
  {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }
)
  .then((response) => {
    return response.text();
  })
  .then((text) => console.log('123', text))
  .catch((err) => console.error(err));

fetch(
  'https://api.trello.com/1/boards/?name={name}&key=APIKey&token=APIToken',
  {
    method: 'POST',
  }
)
  .then((response) => {
    // console.log('asdasdas');
    // console.log(`Response: ${response.status} ${response.statusText}`);
    return response.text();
  })
  .then((text) => console.log(text))
  .catch((err) => console.error(err));

app.listen(8080, () => {
  console.log('success : 8080');
});
