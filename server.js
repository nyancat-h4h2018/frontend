/*
  Modules
*/
const express = require('express');
const path = require('path');

/*
  Settings
*/
const port = 3000;
const folder_website = 'web';

/*
  Express Setup
*/
const app = express();
app.use(express.static(folder_website));

app.listen(port, () => {
  console.log('Website running on port ' + port + '.');
});

/*
  Routers
*/

// Return HTML page from website folder.
function html(page) {
  return path.join(__dirname, folder_website, page + ".html");
}
app.get('/', (req, res, next) => {
  res.sendFile(html('index'));
});
