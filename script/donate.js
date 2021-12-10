onready(() => {
  addStyle('donate.css');

  let footerMessage = [
    'Paid for by Henry for Chief',
    'Contributions or gifts to Henry for Chief are not deductible as charitable contributions for Federal income tax purposes.'
  ];
  let donateAmounts = [1, 3, 5, 10, 25, 50, 100, -1];
  let donationRules = [
    'I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).',
    'This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.',
    'I am at least eighteen years old.',
    'I am not a federal contractor.',
    'I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person.'
  ];

  let footer = createElems(
    [
      { tag: 'div', id: 'footer--legal', class: ['footer', 'flex-col'] }
    ]
  );
  footerMessage.forEach(v => {
    let p = document.createElement('p');
    p.innerText = v;
    footer.append(p)
  });

  content.append(footer);

  onload(() => {
    let amountCont = document.getElementById('donate__amounts-container');
    donateAmounts.forEach(v => {
      let button;
      if (v === -1) {
        button = createElems(
          [
            { tag: 'div', class: 'donate__amount__wrapper' },
            [
              { tag: 'label', class: 'donate__amount__container' },
              [
                { tag: 'input', class: 'donate__amount__input' },
                { tag: 'div', class: ['donate__amount__button', 'flex-row', 'donate__amount__custom-wrapper'] },
                [
                  { tag: 'div', class: 'donate__amount__custom-container' },
                  [
                    { tag: 'input', class: 'donate__amount__custom' }
                  ]
                ]
              ]
            ]
          ]
        );
        button.firstElementChild.firstElementChild.type = 'radio';
        button.firstElementChild.firstElementChild.name = 'donate-amount';
        button.firstElementChild.lastElementChild.firstElementChild.type = 'number';
        button.firstElementChild.lastElementChild.firstElementChild.required = true;
        button.firstElementChild.lastElementChild.firstElementChild.addEventListener('input', evn => {
          evn.target.parentElement.parentElement.previousElementSibling.checked = !!evn.target.value;
        });
      } else {
        button = createElems(
          [
            { tag: 'div', class: 'donate__amount__wrapper' },
            [
              { tag: 'label', class: 'donate__amount__container' },
              [
                { tag: 'input', class: 'donate__amount__input' },
                { tag: 'span', class: ['donate__amount__button', 'flex-row'] }
              ]
            ]
          ]
        );
        button.firstElementChild.firstElementChild.type = 'radio';
        button.firstElementChild.firstElementChild.name = 'donate-amount';
        button.firstElementChild.lastElementChild.innerText = '$' + v;
      }
      amountCont.append(button);
    });

    let contributionRules = createElems({ tag: 'ol', id: 'donate__rules-container' });
    donationRules.forEach(v => {
      let rule = createElems({ tag: 'li', class: 'donate__rule' });
      rule.innerText = v;
      contributionRules.append(rule);
    });
    document.getElementById('donate__terms').append(contributionRules);
  });
});