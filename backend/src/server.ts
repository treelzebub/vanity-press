import express from 'express';
import timeout from 'connect-timeout';
import logger from 'morgan';
import handleError from './errorHandler';
import { beginProcessing } from './processing/epubProcessor';

const app = express();
const PORT = parseInt(process.env.PORT || "1337");

app.use(express.json());
app.use(timeout('30s'));
app.use(logger('dev'));
app.use(handleError);

app.post('/generate-epub', async (req, res) => {
  beginProcessing(req.body).then(
    () => res.status(200).send(),
    (err) => {
      console.error(err);
      res.status(500).send();
    }
  );
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));