onready(() => {
  addStyle('news-article.css');
  addScript('api-sheets.js');

  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');
  if (!id) throw 'no post id found';

  onload(async () => {
    let article = document.querySelector('div.article-container');
    if (!article) throw 'cannot find article container';
    let post = await getCellRange('B' + id, 'G' + id);
    if (!post.length) throw 'post with id ' + id + ' not found';
    post = post[0];

    let [title, date, type, summary, embed, text] = post;
    document.title = title;
    document.getElementById('article__title').innerText = title;
    document.getElementById('article__date').innerText = date;
    document.getElementById('article__type').innerText = type;

    if (embed) {
      let embedCont = createElems({ tag: 'section', class: ['article__embed-container', 'flex-col'] });
      embedCont.insertAdjacentHTML('beforeend', embed);
      article.append(embedCont);
    }
    if (text) {
      let paragraphs = text.split(/<br( \/)?>/g);
      let pElems = paragraphs.filter(v => v).map(v => {
        let p = createElems({ tag: 'p', class: 'article__paragraph' });
        p.innerText = v;
        return p;
      });
      Element.prototype.append.apply(article, pElems);
    }
  });
});