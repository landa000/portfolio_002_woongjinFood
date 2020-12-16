// wjfood_sub01_module.js

(function($){

  var headBox = $('#headBox');
  var categoryBox = $('#categoryBox');
  var pageLocation= $('#pageLocation');
  var productBox = $('#productBox');
  var footBox = $('#footBox');

  headBox.load('./module/headBox.html');
  pageLocation.load('./module/pageLocation.html');
  productBox.load('./sub01_brand/productBox.html');
  footBox.load('./module/footBox.html');

})(jQuery);