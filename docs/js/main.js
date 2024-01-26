;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: 0
			}, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	$(function(){
		goToTop();
		loaderPage();
		fullHeight();
	});


}());



document.getElementById("myHeader").innerHTML = `
<nav class="navbar navbar-light navbar-expand bg-light justify-content-center">
	<a href="index.html"><h1 class="coral" style="margin-top: 10%; margin-bottom: -2%;" >Javier Arias</h1></a>
	</div>
</nav>

<nav class="navbar navbar-light navbar-expand bg-light justify-content-center" style="margin-bottom: -0.5%;" >

	<div class="w-100 justify-content-center">
		<ul class="navbar-nav w-100 justify-content-center">
			<li class="nav-item ${window.location.pathname.includes("index") ? "active" : '' }"><a class="nav-link" style="text-align: center" href="index.html"> <i class="bi bi-briefcase"></i> Work </a></li>
			<li class="nav-item ${window.location.pathname.includes("personal") ? "active" : '' }" id="aboutBtn"><a class="nav-link" style="text-align: center" href="personal.html"> <i class="bi bi-controller"></i> Personal </a></li>
			<li class="nav-item ${window.location.pathname.includes("info") ? "active" : '' }" id="aboutBtn"><a class="nav-link" style="text-align: center" href="info.html"> <i class="bi bi-person"></i> About</a></li>
			<li class="nav-item ${window.location.pathname.includes("resume") ? "active" : '' }" id="aboutBtn"><a class="nav-link" style="text-align: center" href="resume.html"> <i class="bi bi-file-earmark-person"></i> Resume</a></li>
		</ul>
	</div>
</nav>

<nav class="navbar navbar-light navbar-expand bg-light justify-content-center">

	<div class="w-100" id="navbar-collapse-1">
		<ul class="navbar-nav w-100 justify-content-center">
			<li class="nav-item">
				<button class="btn btn-light">
					<a href="https://github.com/javiarias">
						<i class="bi bi-github"></i>
					</a>
				</button></li>
			<li class="nav-item">
			<button class="btn btn-light">
				<a href="https://radape.itch.io/">
					<i class="fab fa-itch-io"></i>
				</a>
			</button></li>
			<li class="nav-item">
			<button class="btn btn-light">
				<a href="https://www.linkedin.com/in/javier-arias-6b219a202/">
					<i class="bi bi-linkedin"></i>
				</a>
			</button></li>
			<li class="nav-item">
			<button class="btn btn-light">
				<a href="mailto:franciscojavieragz@gmail.com">
					<i class="bi bi-envelope-fill"></i>
				</a>
			</button></li>
		</ul>
	</div>
</nav>
`