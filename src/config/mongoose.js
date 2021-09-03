import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/ffa",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.error("Error : unable to connect mongodb\n" + error);
    } else {
      console.error("Mongodb connected successfully");
    }
  }
);
