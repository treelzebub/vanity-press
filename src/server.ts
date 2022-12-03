import express from 'express';
import moment from 'moment';
import { Zine } from './model/Zine';

const app: express.Application = express();
const PORT = parseInt(process.env.PORT || "1337");

// Body Parser Middleware
app.use(express.json());

app.get('/', (request, response) => {
  response.send(`What is up, my dude. It is now ${moment().format()}.`);
});

app.post('/generate-zine', (request, response) => {
  var success = false;
  const body = request.body;
  const zine = new Zine(body.email, body.title, body.contents, body.config);
  const titles = zine.contents.map(it => it.title).join(", ");

  // TODO validation

  response.send(`Received ${zine.title} for ${zine.email}\nwith contents: ${titles}`)
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));