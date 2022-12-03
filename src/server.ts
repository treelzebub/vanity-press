import express from 'express';
import moment from 'moment';

class Content {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

class Config {
  tableOfContents: boolean;
  pageNumbers: boolean;
  date: boolean;

  constructor(
    { tableOfContents, pageNumbers, date } = {
      tableOfContents: false,
      pageNumbers: false,
      date: false
    },
  ) {
    this.tableOfContents = tableOfContents;
    this.pageNumbers = pageNumbers;
    this.date = date;
  }
}

class Zine {
  email: string;
  title: string;
  contents: Content[];
  config: Config;

  constructor(email: string, title: string, contents: Content[], config: Config) {
    this.email = email,
    this.title = title,
    this.contents = contents,
    this.config = config
  }
}

const server: express.Application = express();
const PORT = parseInt(process.env.PORT || "1337");

// Body Parser Middleware
server.use(express.json());
// server.use(express.urlencoded({extended: false }));

server.get('/', (request, response) => {
  response.send(`What is up, my dude. It is now ${moment().format()}.`);
});

server.post('/generate-zine', (request, response) => {
  var success = false;
  const body = request.body;
  const zine = new Zine(body.email, body.title, body.contents, body.config);
  const titles = zine.contents.map(it => it.title).join(", ");

  // TODO validation

  response.send(`Received ${zine.title} for ${zine.email}\nwith contents: ${titles}`)

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));