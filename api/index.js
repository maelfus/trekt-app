import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import router from './routes/routes';

const app = express();
const port = process.env.PORT || 3005;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use('/api', router);

// Listener
app.listen(port, () => {
  console.log(`Starting API service at http://localhost:${port}`);
});