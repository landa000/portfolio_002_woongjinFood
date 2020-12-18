// detailBox.js

(function($){
  $.ajax({
    url : "../data/brandText_data.json",
    dataType:'json',
    context: document.body
  }).done(function(data){
    var context = data;

    var detailBox = $('#detailBox');
    var detailArea = detailBox.children('.detailArea');
    var titleArea = detailArea.children('.titleArea');
    var imgArea = detailArea.children('.imgArea');

    var textArea = detailArea.children('.textArea');
    var Caption = textArea.children('dd').eq(0);
    var nutri = textArea.children('dd').eq(1);

    var imgUrl = '../img/product/detail_img/'

    titleArea.append(context[0].title);
    imgArea.css({backgroundImage:'url("'+imgUrl+context[0].imgFile+'")'});
    Caption.text(context[0].caption);
    nutri.append(context[0].nutrition);

  });
})(jQuery);