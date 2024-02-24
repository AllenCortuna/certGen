import express from "express";
import cors from "cors";
import documentRoute from './routes/document.js';
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Welcome to the Document Tracker API");
});

app.use('/document',documentRoute )


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
