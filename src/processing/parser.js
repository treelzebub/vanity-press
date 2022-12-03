import Parser from '@postlight/parser';
import { Zine } from '../model/Zine';

const parse = async (body) => {
  const zine = new Zine(body.email, body.title, body.contents, body.config);
  const article = zine.contents[0];
  try {
    return Parser.parse(article.url);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { parse };