// main > submenuBox.js

(function($){

  var subMenuArr = [
              { 'submenu' : {'title':'공지사항','link':'#','bgIconlink':''}
              },
              { 'submenu' : {'title':'햇살 E-shop','link':'#','bgIconlink':''}
              },
              { 'submenu' : {'title':'채용안내','link':'#','bgIconlink':''}
              },
              { 'submenu' : {'title':'WoW','link':'#','bgIconlink':''}
              }
  ]

  var submenuList = $('.submenuList');
  var submUl = submenuList.children('ul');
  var submenuTag = '<li><dl><dt></dt><dd></dd></dl></li>'
  var subMALen = subMenuArr.length;
  console.log(subMALen)

  var submLi,submDl,submDd,submDt,submArr,j;

  for(j=0;j<subMALen;j+=1){
      submUl.append(submenuTag);
      submArr = subMenuArr[j].submenu;
      submLi = submUl.children('li').eq(j);
      submDl = submLi.children('dl');
      submDt = submDl.find('dt');
      submDd = submDl.find('dd');

      submDt.append('<h3>'+submArr.title+'</h3>');
      submDd.append('<a href="'+ submArr.link +'"><span>'+'바로가기'+'</span></a>')
  }

})(jQuery);