import { getDocument, getDocuments, createDocument, deleteDocument } from '../controlers/document.js';
import express from "express";
const router = express.Router();

router.get("/get", getDocument);
router.post("/create", createDocument);

export default router;
