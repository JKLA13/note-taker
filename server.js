const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routing
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
