import express from "express";
import cors from "cors";
import db from "../db.js";

// Route for creating the post
export const login =app.post("/login", (req, res) => {
  const name = req.body.name;
  const fileUploaded = req.body.fileUploaded;
  const remarks = req.body.remarks;

  db.query(
    "INSERT INTO documents (contractID, ITB posting, ) VALUES (?,?,?)",
    [name, remarks, fileUploaded],
    (err, result) => {
      if (err) {
        res.send(err.sqlMessage);
      }
      res.send("file uploaded");
    }
    
  );
});
