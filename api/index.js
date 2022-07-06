const express = require("express");
const routes = require("./routes");
const port = process.env.PORT || 3000;
const app = express();

routes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
