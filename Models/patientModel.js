import mongoose from "mongoose";

const BloodPressureSchema = new mongoose.Schema({
  systolic: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
  diastolic: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
});

const DiagnosisHistorySchema = new mongoose.Schema({
  month: { type: String, required: true },
  year: { type: Number, required: true },
  blood_pressure: BloodPressureSchema,
  heart_rate: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
  respiratory_rate: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
  temperature: {
    value: { type: Number, required: true },
    levels: { type: String, required: true },
  },
});

const DiagnosticListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  profile_picture: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  phone_number: { type: String, required: true },
  emergency_contact: { type: String, required: true },
  insurance_type: { type: String, required: true },
  diagnosis_history: [DiagnosisHistorySchema],
  diagnostic_list: [DiagnosticListSchema],
  lab_results: [{ type: String }],
});

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
