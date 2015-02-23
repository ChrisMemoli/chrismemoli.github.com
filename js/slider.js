/*JavaScript Image slideshow:*/
var slideimages = new Array();
var slidelinks = new Array();
function slideshowimages(){
	for (i = 0; i < slideshowimages.arguments.length; i++){
		slideimages[i] = new Image();
		slideimages[i].src=slideshowimages.arguments[i];
	}
}
function slideshowlinks(){
	for (i = 0; i < slideshowlinks.arguments.length; i++){
		slidelinks[i]=slideshowlinks.arguments[i];
	}
}
function gotoshow(){
	if (!window.winslide||winslide.closed){
		winslide=window.open(slidelinks[whichlink]);
	}else{
		winslide.location=slidelinks[whichlink];
		winslide.focus();
	}
}

	var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-24618822-1']);
			_gaq.push(['_trackPageview']);
			(function() {
				var ga = document.createElement('script');
				ga.type = 'text/javascript';
				ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(ga, s);
			})();

			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if(d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		
			!function(d, s, id){
				var js,
					fjs = d.getElementsByTagName(s)[0],
					p = /^http:/.test(d.location)?'http':'https';
				if(!d.getElementById(id)){
					js = d.createElement(s);
					js.id = id;
					js.src = p + '://platform.twitter.com/widgets.js';
					fjs.parentNode.insertBefore(js, fjs);
				}
			}(document, 'script', 'twitter-wjs');
		
			//configure the paths of the images, plus corresponding target links
			slideshowimages("images/lakes.jpg","images/upstate.PNG", "images/coma1.jpg","images/avill.jpg", "images/conference.PNG",  "images/car.jpg", "images/grad_mom.jpg", "images/lifeSup.jpg", "images/memmom.jpg", "images/re/family.jpg", "images/car2.jpg", "images/coma1.jpg", "images/fly.jpg");
			//configure the speed of the slideshow, in miliseconds
			var slideshowspeed = 3000;
			var whichlink = 0;
			var whichimage = 0;
			function slideit(){
				if(!document.images)
				return
				document.images.slide.src = slideimages[whichimage].src;
				whichlink = whichimage;
				if (whichimage < slideimages.length - 1)
					whichimage++;
				else
				whichimage = 0;
				setTimeout("slideit()", slideshowspeed);
			}
			slideit();

			
		
//fade in code
$(document).ready(function () {
    $('div.hidden').fadeIn(800).removeClass('hidden');
});