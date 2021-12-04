(function() {
  addStyle('header.css', true);

  let iconURL = './assets/icon.png';
  let menuItems = {
    'About Me': './about-me',
    'filler 1': '',
    'filler 2': ''
  };

  let header = createElems(
    [
      { tag: 'div', id: 'header', class: 'flex-row' },
      [
        { tag: 'div', id: 'header__icon-container', class: 'flex-row' },
        [
          { tag: 'img', id: 'header__icon' }
        ],
        { tag: 'div', id: 'header__menu-container', class: 'flex-row' },
      ]
    ]
  );
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
}());