const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
  }
);

app.use(express.static(__dirname + '/dist'));
app.use("/dist", express.static(`${__dirname}~~/dist`));



app.listen(PORT, () => {
    console.log(`Server is running on PORT:' ${PORT}`);
});

