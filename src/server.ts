import express from 'express';
import moment from 'moment';
import { Zine } from './model/Zine';
import { parser } from './parser.js';

const app: express.Application = express();
const PORT = parseInt(process.env.PORT || "1337");

// Body Parser Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body);
  next()
})

app.get('/', (request, response) => {
  response.send(`What is up, my dude. It is now ${moment().format()}.`);
});

app.post('/generate-zine', (request, response) => {
  var success = false;
  const body = request.body;

  // TODO validation

  // response.send(parser(body)[0].title)
  parser(body).then(r => {
    try {
      // const obj = JSON.parse(r);
      // console.log(obj.excerpt);
      console.log(r.excerpt);
      response.status(200).send();
    } catch (e) {
      response.status(500).send();
      console.log(e);
    }
  })
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));