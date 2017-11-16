// Twitter stuff
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

// Esto corre cuando se terminó de cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  var button = createButton('Disparar evento')
  body.insertAdjacentElement('afterbegin', button);
  button.addEventListener('click', function() {
    print();
  });
});

function createButton(text) {
  var button = document.createElement('button');
  button.innerText = text;
  var classArray = [
    'btn',
    'waves-effect',
    'waves-ligth'
  ];
  classArray.forEach(function(name) {
    addClass(button, name);
  });
  button.setAttribute('name', 'button');

  return button;
};

function addClass(element, className) {
  element.classList.add(className);
};

function print() {
  var root = document.getElementById('root');
  var id = getId('https://twitter.com/pitakill/status/931177846193696770');

  twttr.widgets.createTweet(id, root);
};

function getId(url) {
  var match = url.match(/^(?:https?):\/\/(?:www\.)?twitter\.com\/(?:[A-Za-z0-9_]{1,15})\/status\/([0-9]+)/);
  var value = match ? match[1] : null;

  return value;
}
