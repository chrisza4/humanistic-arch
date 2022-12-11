import express from "express";
import * as body from "body-parser";

const app = express();
app.use(body.json());

app.post("/document", (req, res) => {});
app.listen(3000);
