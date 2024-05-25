import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import createHttpError, { HttpError } from "http-errors";


const app = express();

app.get("/", (req, res, next) => {
     const err = createHttpError(404, "error in home page");
     throw err;
     res.json({ message: "welcome to elib apis" });
});

app.use(globalErrorHandler);


export default app;
