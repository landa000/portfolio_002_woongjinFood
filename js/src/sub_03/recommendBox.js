// recommendBox.js

(function($){
  $.ajax({
    url : '../data/product_data.json',
    dataType : 'json',
    context : document.body
  }).done(function(data){

    var product = data;
    var listData = [];
    var n=0, j=0, k=0, i=0, eachLen, typeIndex,idx;

    var recomBox = $('#recommendBox');
    var recomArea = recomBox.children('.recomArea');
    var recomTag = '<dd><a href="#"></a></dd>';
    var imgUrl = '../img/product/360/';
    var recomDd;

    for(n=0;n<6;n++){
      recomArea.append(recomTag);
      recomDd = recomArea.find('dd a');
    }

    // var ListSet = function(brand_pr){
    //   listData = [];
    //   var len = product.le
    //   var typeSet = product[brand_pr];

    //     for(i=0;i<len;i++){
    //       eachLen = product[i].brand_pr.length;
    //       for(j=0; j<eachLen ; j++){
    //         listData.push(product[i].drink_pr[j]);
    //       }
    //     }
    //   $.each(listData, function(idx){
    //     recomArea.append(recomTag);
    //     recomDd = recomArea.children('dd').eq(idx).find('a');
    //     recomDd.css({backgroundImage:'url("'+ imgUrl + listData[idx].imgFile +'")'});
    //   });
    //   // for(n=0;n<product.length;n++){
    //   //   recomArea.append(recomTag);
    //   //   recomDd = recomArea.children('dd').eq(n).find('a');
    //   //   recomDd.css({backgroundImage:'url("'+ imgUrl + product[i].drink_pr[j].imgFile +'")'});
    //   // }  
    //   return listData;
    // }
    // ListSet();

    // console.log(product[i].drink_pr[0].brand);

  }); // ajax
})(jQuery);