import express from 'express';
import timeout from 'connect-timeout';
import { beginProcessing } from './processing/epubGenerator';

const app = express();
const PORT = parseInt(process.env.PORT || "1337");

app.use(express.json());
app.use(timeout('120s'))

//TODO dev only
app.use((req, res, next) => {
  console.log(req.body);
  next();
})

app.post('/generate-epub', async (req, res) => {
  const epub = await beginProcessing(req.body);
  if (epub.chapters.length > 0) {
    res.status(200).send();
  } else {
    res.status(500).send();
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));