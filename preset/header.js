onready(() => {
  addStyle('header.css', true);

  let iconURL = './assets/icon.png';
  let menuItems = {
    'Why': './why',
    'Policies': './policies',
    'filler 2': ''
  };

  let header = createElems(
    [
      { tag: 'div', class: ['header', 'flex-row'] },
      [
        { tag: 'div', id: 'header__icon-container', class: 'flex-row' },
        [
          { tag: 'img', id: 'header__icon' }
        ],
        { tag: 'div', id: 'header__menu-container', class: 'flex-row' },
      ]
    ]
  );
  header.firstElementChild.addEventListener('click', () => window.location.href = './home');
  header.firstElementChild.firstElementChild.src = iconURL;

  for (let [name, url] of Object.entries(menuItems)) {
    if (menuItems.hasOwnProperty(name)) {
      let e = createElems(
        [
          { tag: 'div', class: 'header__menu-item' },
          [
            { tag: 'a', class: ['header__menu-link', 'link'] }
          ]
        ]
      );
      e.firstElementChild.innerText = name;
      e.firstElementChild.href = url;
      header.lastElementChild.append(e);
    }
  }

  content.prepend(header);
});