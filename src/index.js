import app from "./config/express";
require("./config/mongoose");

const PORT = 8000;
app.use("/user", require("./routes/userRoutes"));
app.use("/food", require("./routes/foodRoutes"));
app.use("/ingredients", require("./routes/ingredientsRoutes"));
app.use("/order", require("./routes/orderRoutes"));

app.listen(PORT, () => {
  console.log("Running on port " + PORT + "...");
});
