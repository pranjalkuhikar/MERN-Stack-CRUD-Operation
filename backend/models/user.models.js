import mongoose from "mongoose";
import joi from "joi";

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    match: [/^\d{10}$/, "Mobile number must be exactly 10 digits long"],
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const userSchemaJoi = joi.object({
  firstname: joi.string().alphanum().min(2).max(30).required(),
  lastname: joi.string().alphanum().min(2).max(30).required(),
  mobile: joi.number().integer().min(1000000000).max(9999999999).required(),
  state: joi.string().alphanum().min(2).max(50).required(),
  city: joi.string().alphanum().min(2).max(50).required(),
});

async function validateUser(user) {
  const { error } = userSchemaJoi.validate(user);
  if (error) throw new Error(error.details[0].message);
}

const userModel = mongoose.model("User", userSchema);

export { userModel, validateUser };
