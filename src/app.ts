import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import createHttpError, { HttpError } from "http-errors";
import userRouter from "./user/userRouter";


const app = express();
app.use(express.json())

app.get("/", (req, res, next) => {
     const err = createHttpError(404, "error in home page");
     throw err;
     res.json({ message: "welcome to elib apis" });
});
app.use("/api/users", userRouter);

app.use(globalErrorHandler);


export default app;
