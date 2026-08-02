import express from "express";
import router from "./routes";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { notFound } from "./middleware/notFound";
import {errorHandler} from "./middleware/errorHandler"

export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", router);

app.get("/",(req,res)=> {
    res.send("HOME API");
});

app.use(errorHandler);
app.use(notFound);