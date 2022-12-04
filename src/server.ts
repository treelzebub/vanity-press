import express from 'express';
import timeout from 'connect-timeout';
import { beginProcessing } from './processing/epubProcessor';
import { email } from './email/emailer';
import handleError from './errorHandler';

const app = express();
const PORT = parseInt(process.env.PORT || "1337");

app.use(express.json());
app.use(timeout('30s'));
app.use((req, res, next) => {
  console.log(req.body);
  next();
});
app.use(handleError);

app.post('/generate-epub', async (req, res) => {
  beginProcessing(req.body);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));