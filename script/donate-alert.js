onready(() => {
  addStyle('donate-alert.css');

  let donateMessage = 'Henry isn\'t taking cooperate PAC funds. He relies on people like you. Donate';
  let donateLink = './donate';

  let banner = createElems([
    { tag: 'div', id: 'donate-alert', class: 'alert-bar' },
    [
      { tag: 'a', class: 'link' }
    ]
  ]);
  banner.firstElementChild.innerText = donateMessage;
  banner.firstElementChild.href = donateLink;

  content.prepend(banner);
});