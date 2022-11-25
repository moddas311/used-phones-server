const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.get(cors());
app.get(express.json());

app.get('/', (req, res) => {
    res.send('Used product server running');
});

app.listen(port, () => {
    console.log(`Used product server running on server ${port}`);
})