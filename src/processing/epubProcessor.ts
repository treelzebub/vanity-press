import { parse } from './parser';
import { EpubRequest, Content, Config } from '../model/EpubRequest';
import { Epub, Chapter } from '../model/Epub';
import { epubFromModel } from './epubGenerator';

/**
 * Notes:
 * 
 * 1. Accept user request for epub, create EpubRequest obj from it
 * 2. For each item in Contents, use Postlight to de-clutter the webpage. 
 *    This involves fetching a url, an operation we don't have control over.
 * 3. Generate a cover page with EpubRequest's title.
 * 4. Process the Config options (date, page numbers, etc.)
 * 5. Combine these elements into one html document.
 * 6. Format as .epub and return it.
 */
const fromJson = (text: any) => JSON.parse(JSON.stringify(text));

const beginProcessing = async (body: any) => {
  const req: EpubRequest = {
    email: body.email,
    title: body.title,
    contents: fromJson(body.contents),
    config: body.config
  };

  // TODO preserve ordering after await
  const promises = req.contents.map(it => parse(it.url))
  const parsed = await Promise.all(promises)
  const chapters: Chapter[] = parsed.map(it => fromJson(it));
  console.log(`Parsed ${chapters.length} urls.`);
  
  const epub: Epub = {
    title: req.title,
    author: req.email,
    chapters: chapters
  };

  return epubFromModel(epub);
}

export { beginProcessing };