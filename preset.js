var addStyle = function(src, preset = false) {
  let elem = document.createElement('link');
  elem.rel = 'stylesheet';
  elem.type = 'text/css';
  elem.media = 'all';
  elem.href = (preset ? './preset/' : './style/') + src;
  document.head.append(elem);
};
var addScript = function(src, preset = false) {
  let elem = document.createElement('script');
  elem.src = (preset ? './preset/' : './script/') + src;
  document.head.append(elem);
};
var createElems = (function() {
  /*
  tags
  [
    'span',
    {
      tag: 'div',
      class: 'header'
    },
    [
      {
        tag: 'p',
        class: [ 'text', 'center' ]
      }
    ]
  ]
  <span></span>
  <div class="header">
    <p class="text center"></p>
  <div>
  */
  let prepareTags = function(tags) {
    return tags.map(v => {
      if (Array.isArray(v)) return prepareTags(v);
      if (typeof v === 'string' || v instanceof String) return { tag: v };
      return v;
    });
  };
  let create = function(tag, parent) {
    let elem = parent;
    if (Array.isArray(tag)) {
      tag.forEach(v => {
        elem = create(v, Array.isArray(v) ? elem : parent) || parent;
      });
      return (parent ? null : elem);
    }
    elem = document.createElement(tag.tag);
    if (tag.class) (Array.isArray(tag.class) ? tag.class : [tag.class]).forEach(v => elem.classList.add(v));
    if (tag.id) elem.id = tag.id;
    if (parent) parent.append(elem);
    return elem;
  };
  return function(tags) {
    if (!Array.isArray(tags)) tags = [tags];
    if (Array.isArray(tags[0])) tags.unshift('div');
    let parent = tags.shift();
    parent = create(parent);
    tags = prepareTags(tags, parent);
    create(tags, parent);
    return parent;
  };
}());
var onload = function(cb) {
  window.addEventListener('load', cb);
};
var content = document.createElement('div');
content.id = 'content';
var newBody = document.createElement('div');
newBody.id = 'new-body';
onload(() => {
  let oldBody = Array.from(document.body.children);
  oldBody.forEach(v => newBody.append(v));
  Array.from(newBody.getElementsByTagName('img')).forEach(v => {
    let imgPosCont = document.createElement('div');
    imgPosCont.classList.add('img-container');
    imgPosCont.classList.add('flex-col');
    let imgCropCont = document.createElement('div');
    imgCropCont.classList.add('img-crop');
    Array.from(v.classList).forEach(c => {
      if (c.includes('crop')) {
        imgCropCont.classList.add(c);
        switch (c) {
          case 'crop__width-center':
          case 'crop__width-start':
          case 'crop__width-end':
            imgCropCont.style.maxWidth = v.dataset.width;
            v.style.width = 'auto';
            imgCropCont.classList.add('flex-col');
            break;
          case 'crop__height-center':
          case 'crop__height-start':
          case 'crop__height-end':
            imgCropCont.style.maxHeight = v.dataset.height;
            v.style.height = 'auto';
            imgCropCont.classList.add('flex-row');
            break;
          default:
            imgCropCont.classList.remove(c);
            imgPosCont.classList.remove(c);
        }
      } else {
        imgPosCont.classList.add(c);
        if (c === 'resize') {
          imgPosCont.style.width = v.dataset.width;
          imgPosCont.style.height = v.dataset.height;
        }
      }
      v.classList.remove(c);
    });
    v.classList.add('img-body');
    v.insertAdjacentElement('beforebegin', imgPosCont);
    imgPosCont.append(imgCropCont);
    imgCropCont.append(v);
  });
  Array.from(newBody.querySelectorAll('.img-body + .caption')).forEach(v => v.previousSibling.append(v));
  content.append(newBody);
  document.body.append(content);
  addStyle('globalTheme.css', true);
  addScript('header.js', true);
  addScript('footer.js', true);
});