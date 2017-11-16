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
  // Obtenemos la referencia del Elemento body en la variable body
  var body = document.querySelector('body');

  // Clases a agregar al botón
  var buttonClasses = [
    'btn',
    'waves-effect',
    'waves-ligth'
  ];
  // Creación del botón
  var button = createElement('button', buttonClasses, 'Mostrar Tweet');
  // Agregar el atritubo name al botón
  button.setAttribute('name', 'button');
  // Pintar el botón en la página
  body.insertAdjacentElement('afterbegin', button);

  // Crear el elemento contenededor del input
  // Así lo requiere Materialize
  var inputField = createElement('div', ['input-field'])

  // Crear el input
  var input = createElement('input');
  // Agregar el atributo id al input
  input.setAttribute('id', 'tweet');
  // Agregar el atriuto type al input
  input.setAttribute('type', 'text');
  // Pintar el input dentro del contenedor del input
  inputField.insertAdjacentElement('afterbegin', input);

  // Crear el label del input
  var label = createElement('label', [], 'Tweet URL');
  // Agregar el atributo for al label
  label.setAttribute('for', 'tweet');
  // Pintar el label dentro del contenedor del input
  inputField.insertAdjacentElement('afterbegin', label);

  // Pintar el contenedor del input en el body
  body.insertAdjacentElement('afterbegin', inputField);

  // Agregar la funcionalidad del botón
  button.addEventListener('click', function() {
    var input = document.getElementById('tweet');
    var id = getId(input.value);
    print(id);
    input.value = null;
  });
});

// Helper para crear elementos
function createElement(element, classArray, innerText) {
  var node = document.createElement(element);

  if (innerText) {
    node.innerText = innerText;
  }

  if (Array.isArray(classArray)) {
    classArray.forEach(function(name) {
      addClass(node, name);
    });
  }

  return node;
};

// Helper para agregar clases
function addClass(element, className) {
  element.classList.add(className);
};

// Helper que transoforma el id en un tweet
function print(id) {
  var root = document.getElementById('root');

  twttr.widgets.createTweet(id, root);
};

// Helper para obtener el id del Tweet de la URL
function getId(url) {
  var match = url.match(/^(?:https?):\/\/(?:www\.)?twitter\.com\/(?:[A-Za-z0-9_]{1,15})\/status\/([0-9]+)/);
  var value = match ? match[1] : null;

  return value;
}
