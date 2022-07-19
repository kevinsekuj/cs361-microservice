if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 3000;

import anime from "./routes/anime";
import manga from "./routes/manga";

app.use(cors());
app.use(express.json());

app.use("/anime", anime);
app.use("/manga", manga);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/anime", (_req: Request, res: Response) => {
  res.redirect("anime");
});

app.get("/manga", (_req: Request, res: Response) => {
  res.redirect("manga");
});

app.all("*", (_req: Request, _res: Response, next: NextFunction) => {
  next(Error("resource not found"));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.send(err.message);
});
