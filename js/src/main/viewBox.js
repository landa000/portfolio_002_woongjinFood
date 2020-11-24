// viewBox.js

(function($){

  var indicator = $(".indicator");

  indicator.css({'backgroundColor':'#59f'});

  var viewImg = [
      {
        'img' : {'imgCaption':'하늘보리 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_01.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : {'imgCaption':'자연에 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_02.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : {'imgCaption':'아침햇살 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_03.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : {'imgCaption':'티즐 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_04.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : {'imgCaption':'초록매실 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_05.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      {
        'img' : {'imgCaption':'빅토리아 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_06.jpg'},
        'img_indi' : { 'indiLink':'#' }
      }
  ];

  var viewImgList = "<li></li>";
  var viewImgBox = $('.viewImgBox');
  var viewImgBoxUl = viewImgBox.children('ul');
  var viewImgLen = viewImg.length;
  var viewIndi = $('.view_indi ul');

  var i,viewImgLi,viewImg01,viewImg02,viewIndiLi;
  var url ='../../img/view_img/';

  for(i=0;i<viewImgLen;i+=1){
    viewImgBoxUl.append(viewImgList);
    viewImgLi = viewImgBoxUl.children('li').eq(i);
    viewImg01 = viewImg[i].img;
    viewImgLi.append('<a href="'+ viewImg01.imgLink +'"><span>'+ viewImg01.imgCaption + "</span></a>");
    viewImgLi.css({'backgroundImage':'url('+url+viewImg01.imgSrc+')'});
    // ========================================= 
    viewImg02 = viewImg[i].img_indi;
    viewIndi.append(viewImgList);
    viewIndiLi = viewIndi.children('li').eq(i);
    viewIndiLi.append('<a href="'+ viewImg02.indiLink +'"><span>'+ 'indi' + "</span></a>");
  }
  var view_btn = $('.view_btn');
  var viewBtn = view_btn.children('button')
  // var viewNextBtn = viewBtn.children('.next_btn');
  // var viewPrevBtn = viewBtn.children('.prev_btn');

  var permission = true;
  var slideN = 0;
  var timed = 300;

  viewImgLi = viewImgBoxUl.children('li');

  viewBtn.on('click', function(e){
    e.preventDefault();
    if(permission === true){ 
      permission = false;
      var it = $(this);
      var itClass = it.attr('class');

      if(itClass ==='next_btn'){
          if( slideN >= viewImgLen -1 ){
            slideN = -1;
            viewImgBoxUl.css({'marginLeft': slideN*-100+'%'});
          }
          slideN+=1;

        }else if(itClass === 'prev_btn'){
          slideN-=1;
        }
          viewImgBoxUl.stop().animate({'marginLeft':slideN*-100+'%'},function(){
            if( slideN <= -1){
              slideN = viewImgLen -1 ;
              viewImgBoxUl.css({'marginLeft':slideN * -100+'%'});
            }
          setTimeout(function(){
            permission = true;
          },timed/4);
        });
      }
      console.log(slideN);
    });//viewBtn.on

})(jQuery);