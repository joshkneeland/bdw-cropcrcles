$(function () {
	$("nav a:nth-of-type(1)").on("click", function() {
	$("html body").animate({scrollTop:$("#plan_before").offset().top}, 700); 
	return false;
	});	
});

$(function () {
	$("nav a:nth-of-type(2)").on("click", function() {
	$("html body").animate({scrollTop:$("#journal_before").offset().top}, 700); 
	return false;
	});	
});

$(function () {
	$("nav a:nth-of-type(3)").on("click", function() {
	$("html body").animate({scrollTop:$("#circle_before").offset().top}, 700); 
	return false;
	});	
});

$(function () {
		$("nav a:nth-of-type(4)").on("click", function() {
		$("html body").animate({scrollTop:$("#about_before").offset().top}, 700); 
		return false;
	});	
});

$(function () {
		$(".plan_content ").on("click", function() {
		$("html body").animate({scrollTop:$("#topofpage").offset().top}, 700); 
		return false;
	});	
});