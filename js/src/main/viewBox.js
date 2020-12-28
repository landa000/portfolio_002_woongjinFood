// viewBox.js

(function($){

var indicator = $(".indicator");

$.ajax({
  url:'../data/viewBox_data.json',
  dataType:'json',
  context: document.body
}).done(function(data){

    var viewImg = data;

    var viewImgList = "<li></li>";
    var viewImgBox = $('.viewImgBox');
    var viewImgBoxUl = viewImgBox.children('ul');
    var viewImgLen = viewImg.length;
    var viewIndi = $('.view_indi ul');

    var i,viewImgLi,viewImg01,viewImg02,viewIndiLi,j;
    var url ='../img/view_img_event/';

    for(i=0;i<viewImgLen;i+=1){
      viewImgBoxUl.append(viewImgList);
      viewImgLi = viewImgBoxUl.children('li').eq(i);
      viewImg01 = viewImg[i].img;
      viewImgLi.append('<a href="'+ viewImg01.imgLink +'"><span>'+ viewImg01.imgCaption + "</span></a>");
      viewImgLi.css({'backgroundImage':'url('+url+viewImg01.imgSrc+')'});
// ==========================================================
      viewImg02 = viewImg[i].img_indi;
      viewIndi.append(viewImgList);
      viewIndiLi = viewIndi.children('li').eq(i);
      viewIndiLi.append('<a href="'+ viewImg02.indiLink +'"><span>'+'indi'+"</span></a>");
    }

    var view_btn = $('.view_btn');
    var viewBtn = view_btn.children('button')

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

    viewIndiLi.on('click',function(e){
      e.preventDefault();
      var itI = $(this);
      slideN = itI.index();

      viewImgBoxUl.stop().animate({'marginLeft': slideN * -100+'%'});
      viewIndi.children('li').eq(slideN).siblings().removeClass('action');
      viewIndi.children('li').eq(slideN).addClass('action');
    });

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
            },timed/8);
            viewIndiLi.eq(slideN).siblings().removeClass('action');
            viewIndiLi.eq(slideN).addClass('action');
          });
        }
      });//viewBtn.on

    // auto slideShow
    var startInterval, stopInterval, k;

    var SlideStart = function(){
      startInterval = setInterval(function(){
        slideN += 1;
        viewImgBoxUl.stop().animate({'marginLeft': slideN * -100+'%'},function(){
          if(slideN>=viewImgLen-1){
            slideN = -1;
            viewImgBoxUl.css({'marginLeft':slideN*-100+'%'});
          }
        });
        viewIndi.children('li').eq(slideN).siblings().removeClass('action');
        viewIndi.children('li').eq(slideN).addClass('action');
      }, timed*10);
    }

    stopInterval = function(){
      clearInterval(startInterval);
    }

    SlideStart();

    viewImgBox.on({
      'mouseenter' : stopInterval,
      'mouseleave' : SlideStart
    });
  });    


// scrollTopButton ==========================================

  var win = $(window);
  var viewImgBox = $('.viewImgBox');
  // var viewOffset = $(viewImgBox).offset().top;
  var topBtnInsert = '<button type="button" class="topBtn"><a href="#wrap"><span class="hidden_context">scrollTop</span></a></button>'
  viewImgBox.append(topBtnInsert);
  var topBtn = viewImgBox.find('button');

  topBtn.hide();

  win.on('scroll',function(e){
    var winSt = win.scrollTop();
    console.log(winSt);
    if(winSt >= 800){
      topBtn.stop().fadeIn();
    }else{
      topBtn.stop().fadeOut();
    }
  });

  var scrollMove = function(e){
    e.preventDefault();
    var it = $(this).find('a');
    var itAttr = it.attr('href');
    var itOffset = $(itAttr).offset().top;

    $('html,body').animate({ scrollTop : itOffset})
  };
  topBtn.on('click',scrollMove);

})(jQuery);
