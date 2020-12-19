// productBox.js

(function($){
  $.ajax({
    url:'../data/product_data.json',
    dataType:'json',
    context: document.body
  }).done(function(data){
    var i=0, j=0, k=0,n=0,productCaLi,prLi;
    var product = data;

    // type 위치값 세팅;
    var typeArr = ['all'];
    var len = product.length;

    for(; n<len; n++){
      typeArr.push( product[n].type );
    } //typeArr에 배열 전체 집어넣음

    var productArea = $('.productArea');
    var productCate = $('.productCategory');
    var productUl = productArea.children('.productList');
    var productTag01 = '<li><a href="./brand_Detail.html"><span></span></a></li>';
    var productTag02 = '<li><a href="#"></a></li>';
    var imgUrl = '../img/product/360/';


    //----------------------------------------------
    var listData = [];
    var ListSet = function(type){
      listData = [];
      var typeSet = typeArr[type];      
      var eachLen;
      var typeIndex;     
      // console.log( k, product[k].type );

      // 전체값 설정
      if(typeSet === 'all'){
        for(i=0;i<len;i++){
          // listData.push(product[i].product);
          eachLen = product[i].drink_pr.length;
          for(j=0; j < eachLen; j++){
            listData.push(product[i].drink_pr[j]);
          }        
        }
      }
      // 일부영역세팅 및 type의 순서파악
      else{
        // 해당type 순서파악

       // len = product.length;
        for(k=0; k<len; k++){
          if(product[k].type === typeSet){
            typeIndex = k;
            break;
          }
        }
        eachLen = product[typeIndex].drink_pr.length;
        // 해당type의 배열값을 재설정
        for(j=0; j < eachLen; j++){
          listData.push(product[typeIndex].drink_pr[j]);
        }        
      } // if end

      // console.log(listData);
      // listData.forEach(function(con, idx){})
      productUl.empty();
      $.each(listData, function(idx){
        productUl.append(productTag01);
        prLi = productUl.children('li').eq(idx).find('a');
        prLi.find('span').text(listData[idx].name);
        prLi.css({backgroundImage:'url('+ imgUrl + listData[idx].imgFile +')'});
      });

        return listData;
    }; // ListSet end
    ListSet(0);

    for(n=0;n<typeArr.length;n++){
      productCate.append(productTag02);
      productCaLi = productCate.children('li');
      productCaLi.css({width: 100 / productCaLi.length + '%', borderRight:'1px solid #4a4b4d'});
      productCaLi.eq(-1).css({border:'none'});
      productCaLi.children('a').eq(n).prepend(typeArr[n]);
    }

    productCaLi.on('click',function(e){
      e.preventDefault();
      var it = $(this);
      var itI = it.index();
      ListSet(itI);
    });

  }); // ajax
})(jQuery);
