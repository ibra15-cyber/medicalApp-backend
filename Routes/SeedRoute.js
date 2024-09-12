import express from "express";
import Patient from "../Models/patientModel.js";
import { data } from "../actualData.js";
// const Product = require('../models/product')

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Patient.deleteMany({}); //import all products inside product
  const createdPatients = await Patient.insertMany(data.patients); //copy all from data to db

  res.send({ createdPatients });
});

export default seedRouter;
