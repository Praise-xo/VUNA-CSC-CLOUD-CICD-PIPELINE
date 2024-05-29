const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// app.get('/', (req, res) => res.send('Name: IFEOLUWA PRAISE-GOD, Matric: VUG/CSC/21/5970'));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port);
console.log(`App running on http://localhost:${port}`);