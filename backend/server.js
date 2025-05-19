const express = require('express');
const client = require('prom-client');

const app = express();
const port = 9000;

// Create a basic custom metric
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests'
});

// Middleware to increment metric
app.use((req, res, next) => {
  httpRequestCounter.inc();
  next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/', (req, res) => {
  res.send('Backend running with metrics');
});

app.listen(port, () => {
  console.log(`Metrics server listening on port ${port}`);
});

