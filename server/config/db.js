const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://souravkr9012:748688311a8@ecommerce.txy3g.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
