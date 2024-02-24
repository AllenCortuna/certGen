import express from "express";
import cors from "cors";
import db from "../db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Route to get all posts
export const getDocuments = app.get("/get", (req, res) => {
  db.query("SELECT * FROM cert", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route to get one post
export const getDocument = app.get("/getFromId/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route for creating the post
export const createDocument = app.post("/create", (req, res) => {
  const { contractNo, content } = req.body;
  db.query(
    "SELECT * FROM cert WHERE contractNo = ?",
    [contractNo],
    (err, results) => {
      if (err) {
        return res.status(500).send(err.sqlMessage); // Sending error response with status code 500
      }

      // Check similar contractNo already exists
      if (results.length > 0) {
        return res.status(400).send("Contract number already exists"); // Sending error response with status code 400
      }

      // If the contractNo does not exist, proceed with inserting the data
      db.query(
        "INSERT INTO cert (contractNo, content) VALUES (?, ?)",
        [contractNo, content],
        (err, result) => {
          if (err) {
            return res.status(500).send(err.sqlMessage); // Sending error response with status code 500
          }
          return res.status(200).send("Data uploaded"); // Sending success response with status code 200
        }
      );
    }
  );
});

// Route to delete a post

export const deleteDocument = app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});
