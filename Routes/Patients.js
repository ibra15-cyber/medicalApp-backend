import express from "express";
import Patient from "../Models/patientModel.js";

const patientRouter = express.Router();

patientRouter.get("/", async (req, res) => {
  const patients = await Patient.find();
  console.log(patients);
  res.send(patients);
});

patientRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const patient = await Patient.findById(id);
  console.log(patient);
  res.send(patient);
});

export default patientRouter;
