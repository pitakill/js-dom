document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  body.insertAdjacentElement('afterbegin', createButton('Disparar evento'));
});

function createButton(text) {
  var button = document.createElement('button');
  button.innerText = text;
  button.classList.add('btn');
  button.classList.add('waves-effect');
  button.classList.add('waves-light');
  button.setAttribute('name', 'button');
  button.addEventListener('click', function() {
    print();
  });

  return button;
};

function print() {
  var root = document.getElementById('root');
  root.innerHTML = '<h1>Hola</h1>';
};
