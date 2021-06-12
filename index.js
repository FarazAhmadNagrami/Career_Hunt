
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);
//console.log(CONNECTION_URL);
//const CONNECTION_URL = 'mongodb+srv://farazfaraz:farazfaraz@cluster0.qe6r1.mongodb.net/farazfaraz?retryWrites=true&w=majority';
app.get('/',(req,res)=>{
res.send('hello users');
});
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);