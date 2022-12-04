import epub from 'epub-gen';

const filename = (title) => {
  return title.replace(/[^a-z0-9_\-]/gi, '-') + '.epub';
};

const content = (chapters) => {
  return chapters.map(it => (
    {
      title: it.title,
      data: it.content
    }
  ))
};

const optionsFromModel = (model) => {
  return ({
    title: model.title,
    author: model.author,
    output: filename(model.title),
    content: content(model.chapters)
  });
};

const epubFromModel = async (model) => {
  return new epub(optionsFromModel(model)).promise
};

export { epubFromModel };