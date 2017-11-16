document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  body.insertAdjacentElement('afterbegin', createButton('Disparar evento'));
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
  button.addEventListener('click', function() {
    print();
  });

  return button;
};

function addClass(element, className) {
  element.classList.add(className);
};

function print() {
  var root = document.getElementById('root');
  root.innerHTML = '<h1>Hola</h1>';
};
