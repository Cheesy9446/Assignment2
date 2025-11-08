import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Routes — one for each page
app.get("/", (req, res) => {
  res.render("index", { title: "Home" }); // res.render(view, locals)
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Projects" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Me" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


const indexRouter = require('./routes/index');
app.use('/', indexRouter);
