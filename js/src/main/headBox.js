// headBox.js

(function($){

  var navBox = [
    { 'titleNav':{ 'tname':'기업소개','tlink':'#','target':'_self'},
      'subNav'  :[{ 'subname':'웅진식품','sublink':'./company.html'}, { 'subname':'CI소개','sublink':'./company.html'}
                ]},
    { 'titleNav':{ 'tname':'브랜드','tlink':'#','target':'_self'},
      'subNav'  :[{ 'subname':'음료','sublink':'./brand.html'},
                  { 'subname':'차/커피','sublink':'./brand.html'},
                  { 'subname':'건강식품','sublink':'./brand.html'},
                  { 'subname':'과자/당류','sublink':'./brand.html'},
                ]},
    { 'titleNav':{ 'tname':'새소식','tlink':'#','target':'_self'},
      'subNav'  :[{ 'subname':'이벤트','sublink':'#'},
                  { 'subname':'건강한 SNS','sublink':'#'}
                ]},
    { 'titleNav':{ 'tname':'고객센터','tlink':'#','target':'_self'},
      'subNav'  :[{ 'subname':'공지사항','sublink':'./notice.html'},
                  { 'subname':'공시/공고','sublink':'./notice.html'},
                  { 'subname':'FnQ','sublink':'./notice.html'},
                  { 'subname':'고객문의','sublink':'./notice.html'},
                ]},
  ];

  var linkBox = [
    { 'LinkNav':{ 'tname':'e-shop','tlink':'https://eshop.wjfood.co.kr:451/index.aspx','target':'_blank'}},
    { 'LinkNav':{ 'tname':'WoW','tlink':'https://www.wjfood.co.kr/Wow/WowMain.aspx','target':'_blank'}},
    { 'LinkNav':{ 'tname':'채용','tlink':'#https://wjfood.recruiter.co.kr/appsite/company/index','target':'_blank'}}
  ];

  var navList = '<li><dl><dt></dt><dd></dd></dl></li>';
  var navBoxSel = $('#navBox');
  var navBoxSelUl = navBoxSel.children('ul');
  var navLen = navBox.length;
  var navDt, navDd, subNavLen, navI, navJ, tNav, sNav, navK, linkLi,lNav;
  navBoxSelUl.empty();

  for( navI=0 ; navI<navLen ; navI+=1){

      navBoxSelUl.append(navList);
      navDt = navBoxSelUl.children('li').eq(navI).find('dt');
      tNav = navBox[navI].titleNav;
      navDt.append('<a href="'+tNav.tlink+'"'+'target="'+tNav.target+'">'+ tNav.tname +'</a>');
      
      subNavLen = navBox[navI].subNav.length;
        for( navJ=0; navJ<subNavLen ; navJ+=1 ){
          navDd = navBoxSelUl.children('li').eq(navI).find('dd');
          sNav = navBox[navI].subNav[navJ];
          navDd.append('<a href="'+sNav.sublink+'">'+sNav.subname+'</a>');
        } 
      }

// ==============================================================

      var linkBoxSel = $('#linkBox');
      var linkBoxSelUl = linkBoxSel.children('ul');
      var linkLen = linkBox.length;

    for( navK=0; navK<linkLen; navK+=1){
      lNav = linkBox[navK].LinkNav;
      var linkList = 
      '<li><a href="'+ lNav.tlink +'"'+'target="'+lNav.target+'">'+lNav.tname+'</a></li>';
      linkBoxSelUl.append(linkList);
    }

// ==============================================================

  navDt = navBoxSelUl.find('dt');
  navDd = navBoxSelUl.find('dd');
  navDtFindLink = navDt.find('a');
  navDdFindLink = navDd.find('a');

  var navSlideDown = function(){ 
    navDd.stop().slideDown();  }
  var navSlideUp = function(){ 
    navDd.stop().slideUp();  }

  navBoxSel.on({
    'mouseenter': navSlideDown, 'mouseleave': navSlideUp
  });

// ==============================================================

  var unbBox = $('#unbBox');
  var headMobBtn = unbBox.find('.mobile_btn');

  headMobBtn.on('click',function(e){
    e.preventDefault();
    navBoxSel.stop().fadeToggle();
  });
// ==============================================================

// scrollTopButton ==========================================

    var win = $(window);
    // var viewOffset = $(viewImgBox).offset().top;
    var topBtnInsert = '<button type="button" class="topBtn"><a href="#wrap"><span class="hidden_context">scrollTop</span>\
    <i class="fas fa-angle-double-up"></i></a></button>'
    navBoxSel.append(topBtnInsert);
    var topBtn = navBoxSel.find('button');

    topBtn.hide();

    win.on('scroll',function(e){
      var winSt = win.scrollTop();
      console.log(winSt);
      if(winSt >= 600){
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
