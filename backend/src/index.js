const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
// transforma JSON em objeto javascript
app.use(express.json());
app.use(routes);

app.listen(3333);