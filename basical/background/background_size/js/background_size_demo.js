;(function(){
	"use strict";

	function change() {
		var $appContainer = $('.app_list'),
			$window = $(window),
			winWidth = $window.width(),
			winHeight = $window.height();
		var rWindow = winWidth / winHeight,
			rContainer = 720 / 1280;
		if (rWindow <= rContainer) {
			var height = winWidth / rContainer;
			$appContainer.width(winWidth).height(height);
		} else {
			var width = winHeight * rContainer;
			$appContainer.height(winHeight).width(width);
		}
	}
			
	window.onresize = function() {
		change();
	};
	
	$(function(){
		change();
	});
})();