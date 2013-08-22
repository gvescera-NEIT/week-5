// Shows nav1 when page is loaded and adds a class to the other nav's
$(window).on("load", function() 
						{
							$("#nav1").show();
							$("#nav2").hide().addClass("contentBox");
							$("#nav3").hide().addClass("contentBox");
							$("#nav4").hide().addClass("contentBox");
						}
			);

// Creates animation for each button			
$("#btn1, #btn2, #btn3, #btn4").mouseenter(function()
							{
								$(this).animate({marginTop : "+=10"}, 100);
							}
			)
			.mouseleave(function()
							{
								$(this).animate({marginTop : "-=10"}, 100);
							}
			);			
// When a button is clicked its corrisponding nav is shown and the other navs are hidden			
$("#btn1").on("click", function() 
						{
							$("#nav1").show();
							$("#nav2").hide();
							$("#nav3").hide();
							$("#nav4").hide();
						}
			);
			
$("#btn2").on("click", function() 
						{
							$("#nav2").show();
							$("#nav1").hide();
							$("#nav3").hide();
							$("#nav4").hide();
						}
			);
	
$("#btn3").on("click", function() 
						{
							$("#nav3").show();
							$("#nav2").hide();
							$("#nav1").hide();
							$("#nav4").hide();
						}
			);

$("#btn4").on("click", function() 
						{
							$("#nav4").show();
							$("#nav2").hide();
							$("#nav3").hide();
							$("#nav1").hide();
						}
			);
