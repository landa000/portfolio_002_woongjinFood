// con01Box.js

(function($){

  var con02Arr = [
    { 'intro': {'title':'Customer Driven',
                'subtext':'고객에 대한 진정성에<br />기반하여 경영활동의<br />전 과정에서 모든<br />의사결정의 중심에 고객을<br />제 1 가치로 고려합니다.'}
                  },
    { 'intro': {'title':'Commitment',
                'subtext':'스스로 정성을 다해<br />책임을 다하려는 높은<br />주인의식을 바탕으로,<br />맡은 소임에 전력을 다해 몰입하여 완수해 냅니다.'}
                  },
    { 'intro': {'title':'Communication',
                'subtext':'내부 구성원간의<br />수평적이고 개방적인<br />커뮤니케이션과 협력,<br />효과적인 자원의 공유를 추구합니다.'}
                  },
    { 'intro': {'title':'Credibility',
                'subtext':'고객에게 안전하고<br />건강하며 믿을 수 있는<br />제품/서비스로 인식되기 위하여, 고객과의 약속을<br />철저히 이행합니다.'}
                  },
    { 'intro': {'title':'Creativity',
                'subtext':'언제나 새로운 것을<br />시도하며, 환경변화에<br />유연한 혁신 토대를<br />마련하기 위하여<br />시도 자체에 의미를 두고<br />장려합니다.'}
                  }
                ]


  var pentaInsert = '<li><div class="textCircle"></div></li>';
  var con02Box = $('#con02Box');
  var pentaUl = con02Box.find('.vision_pentagon ul');
  var con02ArrLen = con02Arr.length;

  var i,pentaLi,pentaDiv,pentaArrIn;

  for(i=0;i<con02ArrLen;i+=1){
    pentaUl.append(pentaInsert);
    pentaLi = pentaUl.children('li').eq(i);
    pentaDiv = pentaLi.children('div');
    pentaArrIn = con02Arr[i].intro;
    pentaDiv.append('<span class="circleTitle">'+pentaArrIn.title+'</span>'+'<span class="circleText">'+pentaArrIn.subtext+'</span>');
  }

})(jQuery);