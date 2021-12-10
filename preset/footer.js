onready(() => {
  addStyle('footer.css', true);

  let iconURL = './assets/icon.png';
  let menuItems = {
    'Filler 1': {
      'Filling 1': ''
    },
    'Filler 2': {
      'Filling 1': '',
      'Filling 2': ''
    },
    'Filler 3': {
      'Filling 1': '',
      'Filling 2': '',
    },
    'Filler 4': {
      'Filling 1': '',
      'Filling 2': '',
      'Filling 3': '',
      'Filling 4': ''
    },
    'Filler 5': {
      'Filling 1': '',
      'Filling 2': '',
      'Filling 3': '',
      'Filling 4': '',
      'Filling 5': ''
    },
    'Filler 6': {
      'Filling 1': ''
    },
    'Filler 7': {
      'Filling 1': '',
      'Filling 2': '',
      'Filling 3': '',
      'Filling 4': '',
      'Filling 5': ''
    }
  };
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
        { tag: 'div', class: 'footer__footnote-container' },
        [
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
    }
    footer.firstElementChild.lastElementChild.append(topic);
  }

  footer.lastElementChild.firstElementChild.innerText = footnote;

  content.append(footer);
});