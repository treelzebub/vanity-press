import Parser from '@postlight/parser';

const parse = async (url) => {
  return Parser.parse(url);
}

export { parse };