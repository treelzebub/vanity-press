import express from 'express';
import timeout from 'connect-timeout';
import moment from 'moment';
import { Zine } from './model/Zine';
import { postlightParser } from './processing/postlightParser';

const app = express();
const PORT = parseInt(process.env.PORT || "1337");

app.use(express.json());
app.use(timeout('120s'))

//TODO dev only
app.use((req, res, next) => {
  console.log(req.body);
  next();
})

app.get('/', (req, res) => {
  res.send(`What is up, my dude. It is now ${moment().format()}.`);
});

app.post('/generate-zine', (req, res) => {
  var success = false;
  const body = req.body;

  // TODO validation

  postlightParser(body).then(r => {
    console.log(r.excerpt);
    res.status(200).send();
  }).catch(e => {
    res.status(500).send();
      console.log(e);
  })
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));