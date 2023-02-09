const express = require("express"); //fetch lib
const path = require("path");
const port = 8000;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  //at which this index.js file server is started
  // console.log(__dirname);
  // res.send("<h1>ahaaan you gotchaa!</h1>");
  return res.render("home", { title: "My Contact List" });
});
app.get("/practice", (req, res) => {
  return res.render("practice", {
    title: "let us play with ejs",
  });
});
app.listen(port, (err) => {
  if (err) {
    console.log("error in running the server", err);
  }
  console.log("working");
});
