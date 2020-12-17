// wjfood_sub02_module.js

(function($){

  var headBox = $('#headBox');
  var pageLocation = $('#pageLocation');
  var companyIntro = $('#companyIntro');
  var con01Box = $('#con01Box');
  var con02Box = $('#con02Box');
  var footBox = $('#footBox');

  headBox.load('./module/headBox.html');
  pageLocation.load('./module/pageLocation.html');
  companyIntro.load('./sub02_company/companyIntro.html');
  con01Box.load('./sub02_company/con01Box.html');
  con02Box.load('./sub02_company/con02Box.html');
  footBox.load('./module/footBox.html');

})(jQuery);