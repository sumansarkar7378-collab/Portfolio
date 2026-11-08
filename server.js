const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/images")));

app.get("/", (req, res) => {
    res.redirect("/portfolio/home");
});

app.get("/portfolio/home", (req, res) => {
    res.render("portfolio.ejs", { activepage: "home" });
});
app.get("/portfolio/skills", (req, res) => {
    res.render("portfolio.ejs", { activepage: "skills" });
});
app.get("/portfolio/about_me", (req, res) => {
    res.render("portfolio.ejs", { activepage: "about_me" });
});

app.get("/portfolio/contact", (req, res) => {
    res.render("portfolio.ejs", { activepage: "contact" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
