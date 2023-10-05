const mongoose = require("mongoose");

const SampleModel = new mongoose.Schema({
    Text: {
      type: String,
      required: true,
      default:"Hello"
    },
})

module.exports = mongoose.model("SampleModel", SampleModel);

// mongoURI = "mongodb+srv://bavadiyadhruv:Frj1ogDYcNbnDnUo@cluster0.x7jcce8.mongodb.net/?retryWrites=true&w=majority"