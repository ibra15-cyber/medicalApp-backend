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

const frontendUrl =
  "https://medicalrecd.netlify.app" || "http://localhost:5173";
app.use(cors({ origin: frontendUrl }));

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

const dbUrl = process.env.MONGODB_URI_LOCAL || process.env.MONGODB_URI;
mongoose
  .connect(dbUrl)
  .then(() => console.log(`connection established to ${dbUrl}`))
  .catch((err) => {
    console.log(err.message);
  });
