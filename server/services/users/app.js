const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4001;
const router = require("./routes/index");
const { mongoConnection } = require("./config/mongoConnection");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

mongoConnection().then((db) => {
  {
    app.listen(port, () => {
      console.log("Users using port", port);
    });
  }
});
