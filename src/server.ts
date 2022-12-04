import express from 'express';
import timeout from 'connect-timeout';
import { beginProcessing } from './processing/epubProcessor';

const app = express();
const PORT = parseInt(process.env.PORT || "1337");

app.use(express.json());
app.use(timeout('120s'))

app.use((req, res, next) => {
  console.log(req.body);
  next();
})

app.post('/generate-epub', async (req, res) => {
  await beginProcessing(req.body).then(
    () => {
      console.log("Ebook generated successfully!");
      res.status(200).send();
    },
	  err => {
      console.error("Failed to generate: ", err);
      res.status(500).send();
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));