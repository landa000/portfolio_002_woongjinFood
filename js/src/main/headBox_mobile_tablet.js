// headBox_mobile_tablet.js

(function($){
  var navBox = [
    { 'titleNav':{ 'tname':'기업소개','tlink':'./company.html','target':'_self'},
      'subNav'  :[{ 'subname':'웅진식품','sublink':'#'},
                  { 'subname':'CI소개','sublink':'#'}
                ]
    },
    { 'titleNav':{ 'tname':'브랜드','tlink':'./brand.html','target':'_self'},
      'subNav'  :[{ 'subname':'음료','sublink':'#'},
                  { 'subname':'차/커피','sublink':'#'},
                  { 'subname':'건강식품','sublink':'#'},
                  { 'subname':'과자/당류','sublink':'#'},
                ]
    },
    { 'titleNav':{ 'tname':'새소식','tlink':'#','target':'_self'},
      'subNav'  :[{ 'subname':'이벤트','sublink':'#'},
                  { 'subname':'건강한 SNS','sublink':'#'}
                ]
    },
    { 'titleNav':{ 'tname':'고객센터','tlink':'#','target':'_self'},
      'subNav'  :[{ 'subname':'공지사항','sublink':'#'},
                  { 'subname':'공시/공고','sublink':'#'},
                  { 'subname':'FnQ','sublink':'#'},
                  { 'subname':'고객문의','sublink':'#'},
                ]
    },
  ];
  var linkBox = [
    { 'LinkNav':{ 'tname':'e-shop','tlink':'https://eshop.wjfood.co.kr:451/index.aspx','target':'_blank'}
    },
    { 'LinkNav':{ 'tname':'WoW','tlink':'https://www.wjfood.co.kr/Wow/WowMain.aspx','target':'_blank'}
    },
    { 'LinkNav':{ 'tname':'채용','tlink':'#https://wjfood.recruiter.co.kr/appsite/company/index','target':'_blank'}
    }
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

      var linkBoxSel = $('#linkBox');
      var linkBoxSelUl = linkBoxSel.children('ul');
      var linkLen = linkBox.length;

    for( navK=0; navK<linkLen; navK+=1){
      lNav = linkBox[navK].LinkNav;
      var linkList = 
      '<li><a href="'+ lNav.tlink +'"'+'target="'+lNav.target+'">'+lNav.tname+'</a></li>';
      linkBoxSelUl.append(linkList);
    }
  
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