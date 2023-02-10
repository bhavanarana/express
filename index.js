const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "Arpan",
    phone: "1111111111",
  },
  {
    name: "Tony Stark",
    phone: "1234567890",
  },
  {
    name: "Coding Ninjas",
    phone: "12131321321",
  },
];
//controllers
app.get("/", function (req, res) {
  //render finds an ejs file and render it
  return res.render("home", {
    title: "Contact List",
    contact_list: contactList,
  });
});
app.get("/practice", (req, res) => {
  return res.render("practice", {
    title: "let's do it",
  });
});

app.post("/create-contact", (req, res) => {
  //take me to tht url or route
  return res.redirect("/practice");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Yup!My Server is running on Port", port);
});
