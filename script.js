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

  window.setTimeout(() => {
    $.ajax('api/v1/feed.json')
    .done(tweets => {
      tweets.forEach(tweet => {
        print(getId(tweet.url));
      });
    })
    .fail(error => console.error(error));
  }, 10);

  $.fn.greenify = function() {
    this.css('background-color', 'green');
    return this;
  };

  body.greenify();
});

const print = id => {
  const [root] = $('#root');
  twttr.widgets.createTweet(id, root);
};

const getId = url => {
  const match = url.match(/^(?:https?):\/\/(?:www\.)?twitter\.com\/(?:[A-Za-z0-9_]{1,15})\/status\/([0-9]+)/);
  const value = match ? match[1] : null;

  return value;
}
