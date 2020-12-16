// pageLocation.js

(function($){

  var pageLoc = $('#pageLocation');
  var pageLocUl = pageLoc.children('ul');
  var pageLocLi = pageLocUl.children('li');

  pageLocLi.eq(0).prepend('<a href="./main.html">home</a>');
  pageLocLi.eq(1).prepend('<a href="#">here</a>');
  pageLocLi.eq(2).remove();

  // var location = {
	// 	init: function() {
	// 		this.$location = $('.location');
	// 		this.setEvent();
	// 	},
	// 	setEvent: function() {
	// 		var self = this;
	
	// 		self.$location.find('>li').on('focusin mouseenter', function(e) {
	// 			$(this).addClass('on');
	// 			$(this).siblings('li').removeClass('on');
	// 		});
	
	// 		self.$location.on('mouseleave', function(e) {
	// 			$(this).find('>li').removeClass('on');
	// 		});
	
	// 		self.$location.find('a:last').on('keydown', function(e) {
	// 			if (e.keyCode ===  9 && !e.shiftKey) {
	// 				self.$location.find('>li').removeClass('on');
	// 			}
	// 		});
	
	// 	}
	// };
})(jQuery);