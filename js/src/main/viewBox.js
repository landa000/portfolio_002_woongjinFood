// viewBox.js

(function($){

  var indicator = $(".indicator");

  indicator.css({'backgroundColor':'#59f'});

  var viewImg = [
      { 'img' : {'imgCaption':'하늘보리 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_01.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      { 'img' : {'imgCaption':'자연에 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_02.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      { 'img' : {'imgCaption':'아침햇살 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_03.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      { 'img' : {'imgCaption':'티즐 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_04.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      { 'img' : {'imgCaption':'초록매실 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_05.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      { 'img' : {'imgCaption':'빅토리아 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_06.jpg'},
        'img_indi' : { 'indiLink':'#' }
      },
      { 'img' : {'imgCaption':'옥수수수염차 소개 이미지', 
                'imgLink':'#', 'imgSrc':'view_mainImg_07.jpg'},
        'img_indi' : { 'indiLink':'#' }
      }
  ];

  var viewImgList = "<li></li>";
  var viewImgBox = $('.viewImgBox');
  var viewImgBoxUl = viewImgBox.children('ul');
  var viewImgLen = viewImg.length;
  var viewIndi = $('.view_indi ul');

  var i,viewImgLi,viewImg01,viewImg02,viewIndiLi,j;
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
    viewIndiLi.append('<a href="'+ viewImg02.indiLink +'"><span>'+'indi'+"</span></a>");
  }

  var view_btn = $('.view_btn');
  var viewBtn = view_btn.children('button')
  // var viewNextBtn = viewBtn.children('.next_btn');
  // var viewPrevBtn = viewBtn.children('.prev_btn');

  var viewImgLast = viewImgLi.eq(-1).clone(true);
  viewImgBoxUl.prepend(viewImgLast);
  var reViewImgLi = viewImgBoxUl.find('li');
  var reImgLen = reViewImgLi.length;
  viewImgBoxUl.css({'left':-100+'%','width': reImgLen*100+'%'});
  reViewImgLi.css({'width': 100 / reImgLen+'%'});

  var permission = true;
  var slideN = 0;
  var timed = 300;

  viewImgLi = viewImgBoxUl.children('li');

  viewIndiLi = viewIndi.children('li');
  viewIndiLi.eq(0).addClass('action');

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
          viewIndiLi.eq(slideN).siblings().removeClass('action');
          viewIndiLi.eq(slideN).addClass('action');
        });
      }

    });//viewBtn.on

    viewIndiLi.on('click',function(e){
      e.preventDefault();
      var itI = $(this);
      j = itI.index();

      viewImgBoxUl.stop().animate({'marginLeft': j * -100+'%'});
      viewIndi.children('li').eq(j).siblings().removeClass('action');
      viewIndi.children('li').eq(j).addClass('action');
    });

    var startInterval, stopInterval, k;

    var SlideStart = function(){
      startInterval = setInterval(function(){
        slideN += 1
        viewImgBoxUl.stop().animate({'marginLeft': slideN * -100+'%'},function(){
          if(slideN>=viewImgLen-1){
            slideN = -1;
            viewImgBoxUl.css({'marginLeft':k*-100+'%'});
          }
        });
        viewIndi.children('li').eq(slideN).siblings().removeClass('action');
        viewIndi.children('li').eq(slideN).addClass('action');
      }, timed*9);
    }

    stopInterval = function(){
      clearInterval(startInterval);
    }

    SlideStart();

    viewImgBox.on({
      'mouseenter' : stopInterval,
      'mouseleave' : SlideStart
    });

})(jQuery);