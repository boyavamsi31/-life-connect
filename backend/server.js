const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Life Connect Backend Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  console.log("Signup Data:", req.body);

  res.send({ message: "Signup successful" });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login Data:", req.body);

  res.send({ message: "Login successful" });
});