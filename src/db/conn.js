const mongoose = require("mongoose");
//creating db
mongoose
  .connect("mongodb://localhost:27017/labdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succefull");
  })
  .catch((error) => {
    console.log(error);
  });
