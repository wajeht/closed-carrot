// import mongoose from 'mongoose';
// import { MongoMemoryServer } from 'mongodb-memory-server';

// const mongoServer = new MongoMemoryServer();

// export async function connectDB() {
//   const uri = mongoServer.getUri();

//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

// export async function disconnectDB() {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await mongoServer.stop();
// }
