onready(() => {
  addStyle('news.css');
  addScript('sheets-api.js');

  onload(async () => {
    let postContainer = document.getElementById('posts-container');

    let data = await getCell('A2');
    let postCount = parseInt(data[0][0]);
    if (Number.isNaN(postContainer)) throw 'number of posts is not a number';

    data = await getCellRange('B2', 'G' + (postCount + 2));
    data.forEach((postData, i) => {
      let [title, date, type, summary, embed, text] = postData;
      let post = createElems(
        [
          { tag: 'div', class: ['post', 'flex-row'] },
          [
            { tag: 'div', class: 'post__title-wrapper' },
            [
              { tag: 'a', class: ['post__title', 'title', 'link'] }
            ],
            { tag: 'div', class: ['post__body', 'flex-col'] },
            [
              { tag: 'div', class: ['post__info', 'flex-row'] },
              [
                { tag: 'h5', class: ['post__date', 'title'] },
                { tag: 'span', class: ['post__type'] }
              ],
              { tag: 'p', class: 'post__summary' },
              { tag: 'a', class: 'post__read-more' }
            ]
          ]
        ]
      );
      let link = `./news-article?id=${i + 2}`;
      post.firstElementChild.firstElementChild.innerText = title;
      post.firstElementChild.firstElementChild.href = link;
      post.lastElementChild.firstElementChild.firstElementChild.innerText = date;
      post.lastElementChild.firstElementChild.lastElementChild.innerText = type;
      post.lastElementChild.childNodes[1].innerText = summary;
      post.lastElementChild.lastElementChild.innerText = 'Read More';
      post.lastElementChild.lastElementChild.href = link;

      postContainer.prepend(post);
    });
  });
});