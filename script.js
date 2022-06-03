(function($){
	var links = $(".link");
	links.hover(function(){
			$(this).css({"background-color": "black", "color": "white"});
		},function(){
			$(this).css({"background-color": "white", "color": "black"});
	})
}) (jQuery);

(function($){
	var alerting = $(".alert");
	alerting.click(function(){
		window.alert("Oops! Something went wrong!");
	})
})(jQuery);

(function($){
	var zooming = $(".zoom");
	zooming.hover(function(){
		$(this).css({"transform": "scale(1.05)", "transition": "transform 0.5s ease-in-out", "box-shadow": "0px 0px 25px #2e2e2e"});
	}, function(){
		$(this).css({"transform": "", "box-shadow": ""})
	})
})(jQuery);

(function($){
	var zooming2 = $(".zoom2");
	zooming2.click(function(){
		$(this).css({"transform": "scale(1.05)", "transition": "transform 0.5s ease-in-out"});
	})
})(jQuery);



