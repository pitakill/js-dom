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

$(() => {
  const body = $('body');

  const button = $('<button></button>', {
    class: "btn waves-effect, waves-ligth",
    click: () => {
      const [input] = $('#tweet');
      const id = getId(input.value);
      print(id);
      input.value = null;
    },
    text: 'Mostar Tweet'
  }).prependTo(body);

  const inputField = $('<div></div>', {
    class: 'input-field'
  }).prependTo(body);

  const input = $('<input/>', {
    id: 'tweet',
    type: 'text'
  }).appendTo(inputField);

  const label = $('<label></label>', {
    for: 'tweet',
    text: 'Tweet URL'
  }).appendTo(inputField);
});

function print(id) {
  const [root] = $('#root');
  twttr.widgets.createTweet(id, root);
};

function getId(url) {
  const match = url.match(/^(?:https?):\/\/(?:www\.)?twitter\.com\/(?:[A-Za-z0-9_]{1,15})\/status\/([0-9]+)/);
  const value = match ? match[1] : null;

  return value;
}
