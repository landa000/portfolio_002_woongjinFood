// brandBox.js

(function($){
  var brandList = [
      { 'brand' : { 'brandname':'자연은','brandlink':'./brand.html',
                   'brandImglink':'0101_BI.jpg','brandcaption':'\'자연은\'으로<br />맛있는 즐거움을<br />느껴보세요!'}
      },
      { 'brand' : { 'brandname':'자연은 잘자란 유기농','brandlink':'./brand.html',
                  'brandImglink':'0102_BI.jpg','brandcaption':'유기농 과일과<br />야채를 담은<br />어린이 전용 주스'}
      },
      { 'brand' : { 'brandname':'초록매실','brandlink':'./brand.html',
                   'brandImglink':'0103_BI.png','brandcaption':'깨물어주고 싶은<br />초록빛 상큼한 매실'}
      },
      { 'brand' : { 'brandname':'티즐','brandlink':'./brand.html',
                   'brandImglink':'0202_BI.png','brandcaption':'다양한 찻잎과<br />과일을 블렌딩한<br />새로운 맛과 향의 티'}
      },
      { 'brand' : { 'brandname':'코코몽','brandlink':'./brand.html',
                   'brandImglink':'0105_BI.jpg','brandcaption':'칼슘과 아연을 더해<br />활기찬 우리아이에게 딱!<br />어린이 음료 코코몽'}
      },
      { 'brand' : { 'brandname':'빅토리아','brandlink':'./brand.html',
                   'brandImglink':'0106_BI.jpg','brandcaption':'빅토리아 폭포수처럼<br />짜릿하고 상쾌한<br />스파클링 워터'}
      },
      { 'brand' : { 'brandname':'하늘보리','brandlink':'./brand.html',
                   'brandImglink':'0201_BI.jpg','brandcaption':'100% 국산곡물<br />마음까지 쿨한 하늘보리'}
      },
      { 'brand' : { 'brandname':'아침햇살','brandlink':'./brand.html',
                   'brandImglink':'0107_BI.jpg','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'결명자차','brandlink':'./brand.html',
                   'brandImglink':'0203_BI.jpg','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'815','brandlink':'./brand.html',
                   'brandImglink':'0108_BI.jpg','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'옥수수수염차','brandlink':'./brand.html',
                   'brandImglink':'0205_BI.png','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'BABA','brandlink':'./brand.html',
                   'brandImglink':'0204_BI.jpg','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'가야농장','brandlink':'./brand.html',
                   'brandImglink':'0104_BI.png','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'장쾌삼','brandlink':'./brand.html',
                   'brandImglink':'0301_BI.jpg','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'잘자란 배도라지','brandlink':'./brand.html',
                   'brandImglink':'0302_BI.png','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      },
      { 'brand' : { 'brandname':'맑게 우려낸 누룽지','brandlink':'./brand.html',
                   'brandImglink':'0206_BI.png','brandcaption':'바쁜 아침, 햇살 한 잔.<br />대한민국 대표 쌀 음료'}
      }
  ]

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

})(jQuery);