import express from 'express';
import {login} from '../controlers/user.js';
const router = express.Router();

router.post('/login', login);

export default router;