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
  twttr.widgets.createTweet(
    '931177846193696770',
    root
  );
};
