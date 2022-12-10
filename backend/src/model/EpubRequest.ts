export interface Content {
  title: string;
  url: string;
}

export interface Config {
  tableOfContents: boolean;
  pageNumbers: boolean;
  date: boolean;
}

export interface EpubRequest {
  email: string;
  title: string;
  contents: Content[];
  config: Config;
}