import express from 'express'
import cors from 'cors'
import { createUserfn } from './models/userModel.js';
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

app.post('/api/signup',async (req,res) =>{
  // console.log(req.body);
  var response = await createUserfn(req.body);
  return res.send(response);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});