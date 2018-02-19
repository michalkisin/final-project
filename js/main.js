jQuery(document).ready(function($) {
  $(".mobile-menu-list").hide();
  $(".mobile-menu").click(function() {
      $(".mobile-menu-list").slideToggle('slow');
  });
});

jQuery(document).ready(function($) {
  $(".topics").click(function() {
      $(".topics").css( "background-color", "#9eb8c9");
      $(".topics-button").css( "border", "none");
  });
});

jQuery(document).ready(function($) {
  $(".comment-red").hide();
  $(".seriously img:nth-of-type(2)").hide();
  $(".seriously-red").click(function() {
      $(".article:nth-of-type(n+1)").css( "background-color", "#f6f4f7");
      $(".article").css( "color", "#bc3428");
      $(".article a").css( "color", "#bc3428");
      $(".comment-white").hide();
      $(".comment-red").show();
      $(".author-img img").css("border", "5px solid #bc3428");
      $(".seriously-red").text("Change it back");
      $(".article:nth-of-type(n+2)").css( "background-color", "#fcfafd");
      $(".article:nth-of-type(n+3)").css( "background-color", "#f2f0f3");
      $(".article:nth-of-type(n+4)").css( "background-color", "#f6f4f7");
      $(".seriously-red").css("color", "gray");
      $(".seriously-red").css("border", "2px solid gray");
      $(".seriously-red").css("background", "#fff");
      $(".main-content-header a").css("background", "#e82429");
      $(".main-content-header a").css("color", "#fff");
      $(".seriously img:nth-of-type(1)").hide();
      $(".seriously img:nth-of-type(2)").show();

  });
});



jQuery(document).ready(function($) {
  $(".close-ad").click(function() {
      $(".ad").hide();
  });
});

jQuery(document).ready(function($) {
  $(".topics-search-header").hide();
  $(".topics-button").click(function() {
      $(".topics-search-header").slideToggle('slow');
  });
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

//Gallery
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item-gallery-slides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
};

//TABS
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});


//EVENTS

jQuery(document).ready(function($) {
  $(".events-item-front").click(function() {
      $(".events-item-back").show();
  });
});






