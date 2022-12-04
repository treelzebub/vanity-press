import { parse } from './parser';
import { EpubRequest, Content, Config } from '../model/EpubRequest';
import { Epub, Chapter } from '../model/Epub';
import { epubFromModel } from './epubGenerator';
import { email } from '../email/emailer';

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
const filename = (title: string) => {
  console.log(`filename() received ${title}`)
  return title.replace(/[^a-z0-9_\-]/gi, '-') + '.epub';
};

const beginProcessing = async (body: any) => {
  const req: EpubRequest = {
    email: body.email,
    title: body.title,
    contents: fromJson(body.contents),
    config: body.config
  };

  // TODO preserve ordering after await
  const parsed = await Promise.all(
    req.contents.map(it => parse(it.url).catch(err => { return err }))
  );
  const chapters: Chapter[] = parsed.map(it => fromJson(it));
  console.log(`Parsed ${chapters.length} urls.`);

  const epub: Epub = {
    filename: filename(req.title),
    title: req.title,
    author: req.email,
    chapters
  };

  console.log(`Generating ${epub.filename}...`)
  epubFromModel(epub).then(
    () => {
      console.log("Ebook generated successfully!");
      return email(epub.filename, req.email);
    },
    err => {
      console.error(`Failed to generate ${epub.filename}:`, err);
      return err;
    }
  );
}

export { beginProcessing };