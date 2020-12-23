// wjfood_main_module.js

(function($){

  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var newsBox = $('#newsBox');
  var brandBox = $('#brandBox');
  var submenuBox = $('#submenuBox');
  var footBox = $('#footBox');

  headBox.load('./module/headBox.html');
  viewBox.load('./main/viewBox.html');
  newsBox.load('./main/newsBox.html');
  brandBox.load('./main/brandBox.html');
  submenuBox.load('./main/submenuBox.html');
  footBox.load('./module/footBox.html');

})(jQuery);