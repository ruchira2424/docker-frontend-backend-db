const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const port = process.env.PORT || 3001;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongo:27017/todos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port: ${port}`);
  });
}
