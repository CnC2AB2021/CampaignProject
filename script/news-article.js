onready(() => {
  addStyle('news-article.css');
  addScript('sheets-api.js');

  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id');
  if (!id) throw 'no post id found';

  onload(async () => {
    let post = await getCellRange('B' + id, 'F' + id);
    if (!post.length) throw 'post with id ' + id + ' not found';
    post = post[0];

    let [title, date, type, summary, embed, text] = post;
    document.title = title;
    document.querySelector('.title.article-title').innerText = title;
  });
});