const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

// Start server immediately
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on ${port}`);
});

// Connect DB in background
mongoose.connect("mongodb://mongo:27017/todos", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));
