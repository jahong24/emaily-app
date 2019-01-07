const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String, // Title of the campaign/survey
  body: String, // Text displayed to end user in survey
  subject: String, // Subject of email
  recipients: [RecipientSchema], // Array of RecipientSchema records
  yes: { type: Number, default: 0 }, // Count of 'yes' responses
  no: { type: Number, default: 0 } // Count of 'no' responses
});

mongoose.model("surveys", surveySchema);
