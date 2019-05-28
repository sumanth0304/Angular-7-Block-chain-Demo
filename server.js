const express = require('express');
const app = express();

app.use(express.static('./dist/ngTask'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/ngTask/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('server started succesfully !!'));
