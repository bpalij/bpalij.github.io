// $(document).ready(function(){
// 	alert("js ready");
// });
$('#portfolio1').click(function () {
	document.location.href="portfolio/1.html"
	// alert("true");
});
$('#portfolio1').tap(function () {
	document.location.href="portfolio/1.html"
	// alert("true");
});
$('#portfolio1').vclick(function () {
	document.location.href="portfolio/1.html"
	// alert("true");
});
$('.btn-social').mouseenter(function(){
	$(this).addClass("btn-primary");
	$(this).removeClass("btn-default");
})
$('.btn-social').mouseleave(function(){
	$(this).removeClass("btn-primary");
	$(this).addClass("btn-default");
})
$('#btn-linkedin').click(function (){
	document.location.href="https://ua.linkedin.com/in/bpalij"
})
$('#btn-github').click(function (){
	document.location.href="https://github.com/bpalij"
})
$('#btn-codepen').click(function (){
	document.location.href="https://codepen.io/bpalij/"
})
$('#btn-fcc').click(function (){
	document.location.href="https://www.freecodecamp.com/bpalij"
})
