const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://souravkr9012:7488688311a@ecommerce.txy3g.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
