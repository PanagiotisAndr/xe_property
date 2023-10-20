const express = require('express');
const cors = require('cors');
const addressRoutes = require('./routes/addresses');
const saveProperty = require('./routes/property');
const getproperties = require('./routes/getproperties');


const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/addresses', addressRoutes);
app.use('/property', saveProperty);
app.use('/property', getproperties);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
