// Import required modules
const express = require('express');
const shortid = require('shortid');
const path = require('path');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
//app.use(express.static('public')); // Serve static files from the 'public' directory

// In-memory list to store URL mappings
const urlMappings = [];

// Routes
// Shorten URL
app.post('/shorten', function(req, res) {
  const { originalUrl, customString } = req.body;
  
  let shortUrl = customString || shortid.generate();
  
  // Check if custom string is already in use
  const existingUrl = urlMappings.find(url => url.shortUrl === shortUrl);
  if (existingUrl) {
    return res.status(400).json({ error: 'Custom string already in use' });
  }
  
  // Save URL to in-memory list
  urlMappings.push({ originalUrl, shortUrl });
  
  res.json({ shortUrl });

  console.log(JSON.stringify(urlMappings[urlMappings.length - 1]));
});

// Redirect to original URL
app.get('/:shortUrl', function(req, res) {
  const { shortUrl } = req.params;
  
  // Find original URL in in-memory list
  if(shortUrl === undefined){
    return res.status(404).json({ error: 'Custom string already in use' });
  }
  const url = urlMappings.find(url => url.shortUrl === shortUrl);
  if (url) {
    return res.redirect(url.originalUrl);
  } 
  /*if(url == undefined){
    return res.status(404).json({ error: 'Custom string already in use' });
  }*/
  else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

// Start server
const PORT = process.env.PORT || 8001;
app.listen(PORT, function(req,res) {
  console.log(`Server running on port ${PORT}`);
  console.log(JSON.stringify(urlMappings, null, 2));
});
