export class Content {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

export class Config {
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

export class Zine {
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