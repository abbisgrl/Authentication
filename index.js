const express = require('express');

const app = express();

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
    console.log(`Server is connected to the port ${3000}`);
});