import express from "express";

const app = express();

app.get("/", (req, res) => res.send({ message: "Hello World!!!" }));

app.listen(5000, () => console.log("Server is listening on port 5000"));
