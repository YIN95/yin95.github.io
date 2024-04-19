function mailTo(address) {
  return '<a href="mailto:' + address + '">' + address + '</a>';
}

function setEmail() {
  // try to prevent spam without annoying users...
  var user = '\u0079\u0069\u006e\u0077';
  var domain = '\u0040\u006b\u0074\u0068\u002e\u0073\u0065';
  $('.my-email').html(mailTo(user + domain));
}

function toggleAbstract(key) {
  $('.pub-abstract.'+key).slideToggle();
}



