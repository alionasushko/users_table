import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(userRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tebxzp0.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
