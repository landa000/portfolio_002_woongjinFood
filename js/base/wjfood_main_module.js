// wjfood_main_module.js

(function($){

  var headBox = $('#headBox');
  var viewBox = $('#viewBox');

  var footBox = $('#footBox');

  headBox.load('./module/headBox.html');
  viewBox.load('./main/viewBox.html');
  footBox.load('./module/footBox.html');

})(jQuery);