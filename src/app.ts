import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import routes from './routes/index'
import { errors } from 'celebrate'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(`${__dirname}/`));

// enable cors
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    return res.status(400).json({
      status: 400,
      accepted: 'PUT, POST, GET, DELETE'
    });
  }
  return next();
});
app.use('/api', routes);

app.use(errors())
app.use((req: any, res: any) => {
  res.status(404).json({
    status: 404,
    message: 'Request not found',
    resolve: "review the your endpoint" 
  })
})

export default app;