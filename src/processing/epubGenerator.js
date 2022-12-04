import epub from 'epub-gen';

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
    output: model.filename,
    content: content(model.chapters)
  });
};

const epubFromModel = async (model) => {
  return new epub(optionsFromModel(model)).promise;
};

export { epubFromModel };