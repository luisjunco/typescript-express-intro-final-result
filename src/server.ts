
const express = require('express');

require('dotenv').config();

const app = express();


// Import routes
const allRoutes = require("./routes");
app.use("/", allRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
