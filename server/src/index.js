import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';
import {createServer} from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }
});



dotenv.config({
  path: './env'
})

connectDB().then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port: ${process.env.PORT}`);
  })
}).catch((error)=>{
  console.log("MongoDB connection FAILED!!! ", error);
})