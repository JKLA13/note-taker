//require modules
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
//PORT
const PORT = process.env.PORT || 3005;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routing
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//PORT listen
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
