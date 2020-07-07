const express = require('express');
const app = express();

app.use('/:listingId', express.static('public'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Heres the proxy!');
});

app.listen(4002, () => {
  console.log('listening on port: 4002');
});
