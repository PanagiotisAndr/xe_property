const express = require('express');
const cors = require('cors');
const addressRoutes = require('./routes/addresses');
const saveProperty = require('./routes/property');


const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/addresses', addressRoutes);
app.use('/property', saveProperty);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
