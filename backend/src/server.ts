import { sample_antibody, sample_tags } from './../src/data';
import express  from "express";
import cors from "cors";
import { sample_users } from './data';
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
//localhost:4200 frontend
//localhost:5000 backend
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

app.get("/api/antibodies", (req, res) => {
  res.send(sample_antibody);
})

app.get("/api/antibodies/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const antibodies = sample_antibody
    .filter(antibody => antibody.name.toLowerCase()
      .includes(searchTerm.toLowerCase()));
  res.send(antibodies);
})

app.get("/api/antibodies/tags", (req, res) => {
  res.send(sample_tags);
})

app.get("/api/antibodies/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const antibodies = sample_antibody
    .filter(antibody => antibody.tags?.includes(tagName));
  res.send(antibodies);
})

app.get("/api/antibodies/:antibodyId", (req, res) => {
  const antibodyId = req.params.antibodyId;
  const antibody = sample_antibody.find(antibody => antibody.id == antibodyId);
  res.send(antibody);
})

app.post("/api/users/login", (req, res) => {

  const { email, password } = req.body;
  const user = sample_users.find(user => user.email === email &&
    user.password === password);

  if (user) {
    res.send(generateTokenResponse(user));
  } else {
    res.status(400).send("User name or password is not valid!");
    }
})

const generateTokenResponse = (user: any)=>{
  const token = jwt.sign({
    email: user.email, isAdmin: user.isAdmin
  }, "SomeRandomText", {
    expiresIn: "30d"
  });

  user.token = token;
  return user;
}
const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
