const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling
  }
  res.send(user); // Missing error handling if database operation fails
});