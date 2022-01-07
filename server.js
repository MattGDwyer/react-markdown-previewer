const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", function(req, res) {
//   res.sendFile(`${__dirname}../client/src/index.js`);
//   }
// );

// app.use(express.static(`${__dirname}/public`));
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Server is running on PORT:' ${PORT}`);
});
