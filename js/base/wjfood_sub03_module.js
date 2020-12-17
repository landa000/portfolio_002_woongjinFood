// wjfood_sub03_module.js

(function($){

  var headBox = $('#headBox');
  var pageLocation = $('#pageLocation');
  var miniSlide = $('#miniSlide');
  var detailBox = $('#detailBox');
  var recommendBox = $('#recommendBox');
  var footBox = $('#footBox');

  headBox.load('./module/headBox.html');
  pageLocation.load('./module/pageLocation.html');
  miniSlide.load('./sub03_brandDetail/miniSlide.html');
  detailBox.load('./sub03_brandDetail/detailBox.html');
  recommendBox.load('./sub03_brandDetail/recommendBox.html');
  footBox.load('./module/footBox.html');

})(jQuery);