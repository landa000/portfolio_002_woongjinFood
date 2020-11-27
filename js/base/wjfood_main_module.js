// wjfood_main_module.js

(function($){

  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var brandBox = $('#brandBox');
  var subMenuBox = $('#subMenuBox');
  var footBox = $('#footBox');

  headBox.load('./module/headBox.html');
  viewBox.load('./main/viewBox.html');
  brandBox.load('./main/brandBox.html');
  subMenuBox.load('./main/subMenuBox.html');
  footBox.load('./module/footBox.html');

})(jQuery);