import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import seedRouter from "./Routes/SeedRoute.js";
import patientRouter from "./Routes/Patients.js";
import path from "path";

const app = express();
app.use(express.json());

dotenv.config();
app.use(cors({ origin: "https://medicalrecd.netlify.app" }));

app.use("/api/seed", seedRouter);
app.use("/api/patients", patientRouter);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/frontend/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
// );
//// use this when you want to copy the build here
// app.use(express.static(path.join("dist")));

// app.use((req, res, next) => {
//   res.sendFile(path.resolve(__dirname, "dist", "index.html"));
// });

const port = process.env.PORT || 4000; // Default to 4000 in local dev
app.listen(port);

mongoose
  .connect(process.env.MONGODB_URI_LOCAL)
  .then(() =>
    console.log(`connection established to ${process.env.MONGODB_URI_LOCAL}`)
  )
  .catch((err) => {
    console.log(err.message);
  });
