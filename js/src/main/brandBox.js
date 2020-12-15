// brandBox.js

(function($){
  $.ajax({
    url:'../data/brandBox_data.json',
    dataType:'json',
    context: document.body
  }).done(function(data){

    var brandList = data;

    var brandArea = $('.brandArea');
    var brandUl = brandArea.children('ul');
    var brandTag = '<li><dl><dd></dd><dt></dt></dl></li>';
    var url ='../img/wjfood_bi/';
    var bListLen = brandList.length;

    var k,brandLi,brandDl,brandDt,brandDd;

    for(k=0; k<bListLen; k+=1){
      brandUl.append(brandTag);
      brandArr = brandList[k].brand;
      brandLi = brandUl.children('li').eq(k);
      brandDl = brandLi.children('dl');
      brandDt = brandDl.children('dt');
      brandDd = brandDl.children('dd');
      brandLi.css({'backgroundImage':'url('+url+brandArr.brandImglink+')'});
      brandDt.append('<a href="'+brandArr.brandlink+'"><span>'+ '바로가기' +'</span></a>');
      brandDd.append('<span>'+ brandArr.brandcaption +'</span>');
    }

    var brandMoreBtn = $('.brandList_btn');
    brandMoreBtn.on('click',function(e){
      e.preventDefault();
      var itB = $(this);
      var viewMore = itB.prev().attr('class')

      brandUl.toggleClass('moreview');
      brandMoreBtn.find('i').toggleClass('moreview');

    });
  }); //ajax
})(jQuery);