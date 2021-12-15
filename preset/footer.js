onready(() => {
  addStyle('footer.css', true);

  let iconURL = './assets/icon.png';
  let menuItems = {
    'Links': {
      'Why I am Running for Chief': './why',
      'Policies': './policies',
      'News and Updates': './news',
      'Media': './media',
      'Privacy Policy': './privacy'
    },
    'Contact Us': {
      'P.O. Box 1734': '',
      '(919) 856-7918': '',
      'eyedareyoutospame@gmail.com': ''
    },
    'Social Media': {
      'Reddit': 'https://redd.it/haucpf',
      'YouTube': 'https://youtu.be/dQw4w9WgXcQ',
      '!\'m bored#9538': ''
    }
  };
  let paidFor = 'no one :_(';
  let footnote = 'Henry for Chief ｜ © 2021 Ziyang Qiu';

  let footer = createElems(
    [
      { tag: 'div', class: ['footer', 'flex-col'] },
      [
        { tag: 'div', id: 'footer__info', class: 'flex-col' },
        [
          { tag: 'div', id: 'footer__icon-container' },
          [
            { tag: 'img', id: 'footer__icon' }
          ],
          { tag: 'div', class: ['footer__items', 'flex-row'] }
        ],
        { tag: 'div', class: ['footer__footnote-container', 'flex-col'] },
        [
          { tag: 'span', class: 'footer__paid-for' },
          { tag: 'span', class: 'footer__footnote' }
        ]
      ]
    ]
  );
  footer.firstElementChild.firstElementChild.firstElementChild.src = iconURL;

  for (let [title, items] of Object.entries(menuItems)) {
    if (!menuItems.hasOwnProperty(title)) continue;
    let topic = createElems(
      [
        { tag: 'ul', class: ['footer__topic', 'flex-col'] },
        [
          { tag: 'li', class: 'footer__topic__title-container' },
          [
            { tag: 'span', class: ['footer__topic__title', 'title'] },
          ]
          // insert links here
        ]
      ]
    );
    topic.firstElementChild.firstElementChild.innerText = title;
    for (let [name, url] of Object.entries(items)) {
      if (!items.hasOwnProperty(name)) continue;
      if (url) {
        let item = createElems(
          [
            { tag: 'li', class: 'footer__topic__link-container' },
            [
              { tag: 'a', class: ['footer__topic__link', 'link'] }
            ]
          ]
        );
        item.firstElementChild.innerText = name;
        item.firstElementChild.href = url;
        topic.append(item);
      } else {
        let item = createElems(
          [
            { tag: 'li', class: 'footer__topic__link-container' },
            [
              { tag: 'span', class: 'footer__topic__link' }
            ]
          ]
        );
        item.firstElementChild.innerText = name;
        topic.append(item);
      }
    }
    footer.firstElementChild.lastElementChild.append(topic);
  }

  footer.lastElementChild.children[0].innerText = 'Paid for by ' + paidFor;
  footer.lastElementChild.children[1].innerText = footnote;

  content.append(footer);
});