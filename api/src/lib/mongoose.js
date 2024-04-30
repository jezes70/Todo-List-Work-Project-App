// import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

// const connect = async () => {
//   await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://sabiflexhq:sabi123flex@cluster0.urqsyic.mongodb.net/sabiflexdb" {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });

//   mongoose.plugin(uniqueValidator);
// };

// export default connect;

import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
 

const db = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  }
};

export default db;
