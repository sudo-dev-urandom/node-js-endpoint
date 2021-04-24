const express = require('express');
var routes1 = require('./routes/routes-products');
const app = express();

app.use('/tes',routes1);
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});


