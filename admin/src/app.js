const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const port = process.env.PORT || 5000;

const { BlobServiceClient } = require('@azure/storage-blob');
const uuidv1 = require('uuid/v1');

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

const checkIfAdmin = require("./middlewares.js");

app.use(express.static(path.join(__dirname, "build")));

app.post("/blobs", checkIfAdmin, async (_, res) => {
  const blobServiceClient = await BlobServiceClient.fromConnectionString(process.env.STORAGE_KEY);
  const containerClient = await blobServiceClient.getContainerClient("test");
  // List the blob(s) in the container.
  const blobsObj = []
  for await (const blob of containerClient.listBlobsFlat()) {
      blobsObj.push({name : blob.name, created_at : blob.properties.createdOn })
  }
  res.json({ body: blobsObj });
});

app.post("/auth", checkIfAdmin, async (_, res) => {
  const users = await fetch(
    "https://somehttptrigger.azurewebsites.net/api/HttpTrigger"
  ).then((response) => response.json());
  res.json({ body: users });
});

app.post("/create-user", checkIfAdmin, async (req, res) => {

  try {
    const response = await fetch(
      "https://somehttptrigger.azurewebsites.net/api/HttpTriggerInsertUser", {
        method : 'POST',
        body : JSON.stringify(
          {
            "password" : process.env.PASSWORD,
            "user_name" : req.body.user.name,
            "user_time_to_live" : req.body.user.time_to_live
          }
        )
      }
    );
    const message = await response.text();
    res.json({ body: message });
  } catch (err) {
    res.json({ body: err });
  }
  
});

app.get(["/", "*"], function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
