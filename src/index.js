/*global chrome*/

function getGists(url, cb) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        cb(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function filterByQuery(str, arr) {
  return arr
    .filter(function(o){
      return new RegExp(str, 'i').test(o.description);
    }).map(function(o){
      return {
        description: o.description,
        content: o.html_url
      };
    });
}

function login(username) {
  chrome.storage.sync.set({'gh_username': username}, function(){
    //chrome.browserAction.setIcon({path: 'star_icon128.png'});
    alert(username + ' is logged in');
  });
}

function logout() {
  chrome.storage.sync.remove('gh_username', function(){
    //chrome.browserAction.setIcon({path: 'star_icon128_loggedout.png'});
    alert('user is logged out');
  });
}

function debounce(fn, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      fn.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function inputChanged(text, suggest) {
	var isLoginOrLogout = /:login|:logout/.test(text);

  if (text.length > 1 && !isLoginOrLogout) {
    chrome.storage.sync.get({'gh_username': ''}, function(o) {
      var username = o.gh_username,
          url = (username)? 'https://api.github.com/users/' + username + '/gists': 'https://api.github.com/gists/public?per_page=100';

      getGists(url, function(data){
        if (data) {
          var res = filterByQuery(text, data);
          suggest(res);
        }
      });
    });
  }
}

function inputEntered(text) {
	var isUrl = /gist\.github\.com/.test(text),
      isLogin = /:login/.test(text),
      isLogout = /:logout/.test(text);

  if (isLogin) {
    var username = text.replace(/:login/, "").trim();
    return login(username);
  }
  if (isLogout) {
    return logout();
  }

  var url = (isUrl)? text: 'https://www.google.se/search?q=' + text;
  chrome.tabs.update(undefined, {url: url});  
}

chrome.omnibox.setDefaultSuggestion({
  description: 'nevermind. just google it'
});

// ******
// EVENTS
// ******

var debInputChanged = debounce(inputChanged, 500);
chrome.omnibox.onInputChanged.addListener(debInputChanged);
chrome.omnibox.onInputEntered.addListener(inputEntered);