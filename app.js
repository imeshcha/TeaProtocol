// backend/app.js
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/names', require('./routes/names'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
