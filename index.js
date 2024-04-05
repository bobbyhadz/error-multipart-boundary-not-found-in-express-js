// Error: Multipart: Boundary not found in Express.js

import express from 'express';
import multer from 'multer';

// 👇️ if you use CommonJS require()
// const express = require('express')
// const multer  = require('multer')

const upload = multer({dest: 'uploads/'});

const app = express();

app.post(
  '/profile',
  upload.single('avatar'),
  function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);

    console.log(req.body);

    res.send('success');
  },
);

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
