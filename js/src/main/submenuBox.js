// main > submenuBox.js

(function($){

  var subMenuArr = [
              { 'submenu' : {'title':'공지사항','link':'#','bgIconlink':'sub_icon_notice.png'}
              },
              { 'submenu' : {'title':'햇살 E-shop','link':'#','bgIconlink':'sub_icon_cart.png'}
              },
              { 'submenu' : {'title':'채용안내','link':'#','bgIconlink':'sub_icon_resume.png'}
              },
              { 'submenu' : {'title':'WoW','link':'#','bgIconlink':'sub_icon_wow.png'}
              }
  ]

  var submenuList = $('.submenuList');
  var submUl = submenuList.children('ul');
  var submenuTag = '<li><dl><dt></dt><dd></dd></dl></li>'
  var subMALen = subMenuArr.length;
  var url = '../img/main_subm/'

  var submLi,submDl,submDd,submDt,submArr,j;

  for(j=0;j<subMALen;j+=1){
      submUl.append(submenuTag);
      submArr = subMenuArr[j].submenu;
      submLi = submUl.children('li').eq(j);
      submDl = submLi.children('dl');
      submDt = submDl.find('dt');
      submDd = submDl.find('dd');

      submDl.prepend('<a href="'+ submArr.link +'"></a>')
      submDt.append('<h3>'+submArr.title+'</h3>');
      submDd.append('<span>'+'바로가기'+'</span>');
      submDl.css({'backgroundImage':'url('+url+submArr.bgIconlink+')'})
  }

})(jQuery);