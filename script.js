document.addEventListener('DOMContentLoaded', function() {
  // Traemos todos los botones del documento
  var button = document.getElementsByTagName('button');
  // Referenciamos al primero, porque sabemos que es el único
  var show = button[0];
  // Agregamos un receptor de click con su respectivo callback
  show.addEventListener('click', function() {
    print();
  });
});

function print() {
  var root = document.getElementById('root');
  root.innerHTML = '<h1>Hola</h1>';
};
