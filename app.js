const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('aws-ELASTICBEAN-REPO-NVIRGINA-RP-review-stage added-after the successful buid completion version2 of the code'));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
