// productBox.js

(function($){
  $.ajax({
    url:'../data/product_data.json',
    dataType:'json',
    context: document.body
  }).done(function(data){

    var product = data;
    // var productDrink = product[0];
    // var productTea = product[1];
    // var productHealth = product[2];
    // var productOther = product[3];

    var productArea = $('.productArea');
    var productCate = $('.productCategory');
    var productUl = productArea.children('.productList');
    var productTag01 = '<li><dl><dt></dt><dd></dd></dl></li>';
    var productTag02 = '<li><span></span></li>';
    var imgUrl = '../img/product/360/';
    var pListAllLen ;

    productUl.append(productTag01);
    productCate.append(productTag02);

    var n,i,k;

    console.log(pListAllLen);
    for(n=0;n<product.length-1;n++){
      productCate.append(productTag02);
    }

    

  });

})(jQuery);