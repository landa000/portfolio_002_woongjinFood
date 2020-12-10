// con01Box.js

(function($){

  var con01Arr = [
      { 'intro': {'title':'\"자연 그대로의 맛\"',
                  'subtext':'과채주스 브랜드 \‘자연은\’은 과일과 야채가 가장 맛있게 자라는 기간을 기다려 주스로 만든 웅진식품의 대표브랜드입니다.<br />\
                  90일 자란 토마토, 790일 자란 알로에, 365일 자란 오렌지로 만든 \‘자연은\’은 자연 그대로의 맛을 담아낸 토종 주스 브랜드의 저력을 보여주고 있습니다.<br />\
                   웅진식품은 일반 주스 시장에 이어 어린이를 위해 유기농 과채로 만든 \‘자연은 잘자란 유기농\’ 과일의 생생한 맛을 살린 착즙주스 \‘자연은 착즙100\’ 등을 선보였습니다.',
                  'iconImg':'../../img/company_icon/bg_company_intro_list1.gif'}
                  },
      { 'intro': {'title':'\"믿을 수 있는 원료\"',
                  'subtext':'웅진식품은 건강하고 믿을 수 있는 먹거리를 통해 고객 여러분께 행복한 삶을 선물하고자 합니다.<br />\
                  \'하늘보리\', \'광명찾은 결명자\', \'잘빠진옥수수수염차\', \'맑게 우려낸 누릉지\'등 \
                  웅진식품의 차 4총사는 100% 우리 땅에서 자란 우리 곡물로 만들어져 믿고 마실 수 있는 건강 음료입니다.<br />\
                  세계 최초의 쌀 음료로 음료에 한국의 고유 문화를 담아냈다는 평가를 받는 \‘아침햇살\’ 또한 100% 국내산 쌀과 현미로 만들어져 더욱 고소하고 건강합니다.',
                'iconImg':'../../img/company_icon/bg_company_intro_list2.gif'}
                  },
      { 'intro': {'title':'\"창조적 혁신과 성장\"',
                  'subtext':'웅진식품은 기존에 없던 제품들을 출시하며 새로운 시장을 창출, 오늘날까지 성장해 왔습니다.<br />\
                  세계 최초의 쌀 음료 \‘아침햇살\’, 집에서 끓여 마시던 보리차를 용기에 담아낸 \‘하늘보리\’ 등은 웅진식품의 창조적인 기업문화를 그대로 보여주는 제품입니다.',
                'iconImg':'../../img/company_icon/bg_company_intro_list3.gif'}
                  },
      { 'intro': {'title':'\"고객을 위한 도전!\"',
                  'subtext':'웅진식품의 중앙연구소는 고객 여러분께 더 나은 제품을 선보이기 위한 연구개발에 매진하고 있습니다.<br />\
                   웅진식품은 현재 해외특허 6건을 포함해서, 총 30건의 식음료 제조관련 특허를 보유하고 있습니다.<br />\
                    그 중에서도, 사포닌의 흡수를 용이하게 한 \‘발효홍삼\’과 관련된 특허가 총 10건으로 국내 최고의 발효홍삼 제조 기술을 보유하고 있습니다.',
                  'iconImg':'../../img/company_icon/bg_company_intro_list4.gif'}
                  },
                ]

  var con01List = '<li><dl><dt></dt><dd></dd></dl></li>';
  var con01Box = $('#con01Box');
  var con01Ul = con01Box.children('ul');
  var con01LiLen = con01Arr.length;
  console.log(con01LiLen);

  var n, con01Li, con01Dl, con01Dt, con01Dd, con01Add;

  
  for(n=0 ; n<con01LiLen ; n+=1 ){
    con01Ul.append(con01List);
    con01Li = con01Ul.children('li');
    con01Dl = con01Li.children('dl');
    con01Dt = con01Dl.children('dt').eq(n);
    con01Dd = con01Dl.children('dd').eq(n);
    con01Add = con01Arr[n].intro;
    con01Dd.append('<h3>'+con01Add.title+'</h3>'+'<br />'+'<span>'+con01Add.subtext+'</span>');
    con01Dt.css({'backgroundImage':'url("'+con01Add.iconImg+'")'});
  }
                  

})(jQuery);