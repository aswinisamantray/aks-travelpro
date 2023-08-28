import mongoose from "mongoose";

const vacationPlanSchema = new mongoose.Schema({
  title: String,
  destination: String,
  date: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.VacationPlan = mongoose.model('VacationPlan', vacationPlanSchema);
export default VacationPlan;