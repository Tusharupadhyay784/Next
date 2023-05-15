const express = require('express')
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 100;

// Routes
app.get('/', (req, res) => {
    return res.json(users)
})


app.listen(PORT, () => {
    console.log("Server started at ", PORT);
})