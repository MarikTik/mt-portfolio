const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(cors());
app.use(express.json());

// API route to serve portfolio data
app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, name: 'Project One', description: 'First project description' },
    { id: 2, name: 'Project Two', description: 'Second project description' },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});