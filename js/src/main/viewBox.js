// viewBox.js

(function($){

  var indicator = $(".indicator");

  indicator.css({'backgroundColor':'#59f'});

  var viewImg = [
      {
        'img' : { 'imgName':'brand_img_01','imgCaption':'하늘보리 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_01.jpg','bgcolor':'#d08'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : { 'imgName':'brand_img_02','imgCaption':'자연에 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_02.jpg','bgcolor':'#d26'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : { 'imgName':'brand_img_03','imgCaption':'아침햇살 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_03.jpg','bgcolor':'#d27'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : { 'imgName':'brand_img_04','imgCaption':'티즐 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_04.jpg','bgcolor':'#d28'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : { 'imgName':'brand_img_05','imgCaption':'초록매실 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_05.jpg','bgcolor':'#d29'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : { 'imgName':'brand_img_06','imgCaption':'빅토리아 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_06.jpg','bgcolor':'#d40'},
        'img_indi' : { 'indiLink':'#' }
      }
  ];

  var viewImgList = "<li></li>";
  var viewImgBox = $('.viewImgBox ul');
  var viewImgLen = viewImg.length;
  console.log(viewImgLen);

  var i,viewImgLi,viewImg01;
  var url ='../../img/view_img/';

  for(i=0;i<viewImgLen;i+=1){
    viewImgBox.append(viewImgList);
    viewImgLi = viewImgBox.children('li').eq(i);
    viewImg01 = viewImg[i].img;
    viewImgLi.append('<a href="'+ viewImg01.imgLink +'"><span>'+ viewImg01.imgCaption + "</span></a>");
    viewImgLi.css({'backgroundImage':'url('+url+viewImg01.imgSrc+')'});
  }

  // 'backgroundColor': viewImg01.bgcolor

  var viewBtn = $('view_btn');
  var viewNextBtn = viewBtn.find('.next_btn');
  var viewPrevBtn = viewBtn.find('.prev_btn');

  var viewIndi = $('.indicator');

})(jQuery);