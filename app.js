const express = require("express");
const app = express();
var cors = require('cors');


app.use(cors())
app.use(express.json());

// // Routes
app.use("/api/users", require("./routes/userRoutes"));
// add post routes
app.use("/api/posts", require("./routes/postRoutes"));
// add comment routes
app.use("/api/comments", require("./routes/commentRoutes"));
// add like routes
app.use("/api/likes", require("./routes/likeRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Blog application." });
});

module.exports = app;
