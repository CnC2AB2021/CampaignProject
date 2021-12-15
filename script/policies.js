onready(() => {
  addStyle('policies.css');

  let featuredPlanks = [
    'Rules',
    'Fun',
    'Shelter'
  ];
  let allPlanks = [
    [
      'The Beastie',
      'We can either run from the beast, try to fight it, or stand together and hold our ground. If we run from it, it will find us and kill us. If we try to fight it, some of us will definitely get injured or even die. So clearly we should stand together and hold our ground. If we stick together we will be strong. If we are strong no thing can push us down. Not even the beast.'
    ],
    [
      'Fun',
      'It should not have to be mentioned that we are going to have fun. But we need fun. We will have fun. We will all be happy'
    ],
    [
      'Resources',
      'I’ll make sure everyone has enough food and water. We have to prioritize food and water because the early bird gets the worm. We will have people go out to get fruit from the trees. These people will get enough fruit for the whole group to eat. When you are thirsty, you can go get water from the river.'
    ],
    [
      'Rules',
      'We need leadership, leadership leads to unity, unity leads to productivity, productivity leads to rewards, and rewards lead to happiness. A good leader keeps everyone under control and makes sure we are getting things done. As chief, I will make sure that we are organized. When we are working, I will make sure that everyone is working efficiently.  '
    ],
    [
      'Shelter',
      'We will all need to do our part otherwise we will all be sleeping out in the open. The beast will attack us. The boars will attack us. We will be attacked by everything. We need to build shelters to stay safe from all of this. Nothing will be able to get to us.'
    ],
    [
      'Fire',
      'Fire is really useful. We will use it to cook our food, keep warm, and it sends out a smoke signal to ships passing by.'
    ]
  ];

  onload(() => {
    let featuredPlanksCont = document.getElementById('planks__featured-container');
    featuredPlanks.forEach(v => {
      let plank = createElems(
        [
          { tag: 'div', class: ['planks__featured', 'flex-col'] },
          [
            { tag: 'h4', class: 'title' },
            { tag: 'h6', class: 'title' }
          ]
        ]
      );
      plank.firstElementChild.innerText = v;
      plank.lastElementChild.innerText = allPlanks.find(v1 => v1[0] === v)[1];
      featuredPlanksCont.append(plank);
    });
    let allPlanksCont = document.getElementById('planks__all-container');
    let plankButtonClick = evn => {
      evn.target.nextElementSibling.classList.toggle('hidden');
      evn.target.toggleAttribute('clicked');
    };
    allPlanks.forEach(v => {
      let plank = createElems(
        [
          { tag: 'div', class: ['planks__all', 'flex-col'] },
          [
            { tag: 'button', class: 'planks__all-button' },
            { tag: 'p', class: 'planks__all-text' }
          ]
        ]
      );
      plank.firstElementChild.innerText = v[0];
      plank.firstElementChild.addEventListener('click', plankButtonClick);
      plank.lastElementChild.innerText = v[1];
      plank.lastElementChild.classList.add('hidden');
      allPlanksCont.append(plank);
    });
  });
});
