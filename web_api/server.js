const express = require('express');
const cors = require('cors');
const addressApi = require('./api/addresses');
const saveProperty = require('./api/property');
const getproperties = require('./api/getproperties');


const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/addresses', addressApi);
app.use('/property', saveProperty);
app.use('/property', getproperties);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
