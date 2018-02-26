$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});

jQuery(document).ready(function($) {
  $(".mobile-menu-list").hide();
  $(".mobile-menu").click(function() {
      $(".mobile-menu-list").slideToggle('slow');
      $(".topics-search-header").show();
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
	  if($(".seriously-red").text() == 'Change it back'){
		  $(".article:nth-of-type(n+1)").css( "background-color", "#bc3428");
	      $(".article").css( "color", "#ffffff");
	      $(".article a").css( "color", "#ffffff");
	      $(".comment-white").show();
	      $(".comment-red").hide();
	      $(".author-img img").css("border", "5px solid #ffffff");
	      $(".article:nth-of-type(n+2)").css( "background-color", "#c7372a");
	      $(".article:nth-of-type(n+3)").css( "background-color", "#b13125");
	      $(".article:nth-of-type(n+4)").css( "background-color", "#bc3428");
	      $(".seriously-red").css("color", "#fff");
	      $(".seriously-red").css("border", "1px solid #0071c1");
	      $(".seriously-red").css("background", "linear-gradient(to bottom, #0071c1, #b6d6ed)");
	      $(".main-content-header a").css("background", "#fff");
	      $(".main-content-header a").css("color", "#282634");
	      $(".seriously img:nth-of-type(1)").show();
	      $(".seriously img:nth-of-type(2)").hide();
	      $(".seriously-red").text("Change my color");
	  }
	  else{
	      $(".article:nth-of-type(n+1)").css( "background-color", "#f6f4f7");
	      $(".article").css( "color", "#bc3428");
	      $(".article a").css( "color", "#bc3428");
	      $(".comment-white").hide();
	      $(".comment-red").show();
	      $(".author-img img").css("border", "5px solid #bc3428");
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
	      $(".seriously-red").text("Change it back");
	  }
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
//LIGHTBOX
function openModal(src){
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("img01");
	modal.style.display = "block";
    modalImg.src = src;
    var span = document.getElementsByClassName("close")[0];
}
function closeModal(){
	document.getElementById('myModal').style.display = "none";
}

//ADD COMMENTS
function appendCmnt(){
  if(document.getElementById('cmntName').value == ''){
    document.getElementById('validVal').innerHTML = "Name can not be empty";
    document.getElementById('validVal').style.visibility = 'visible';
    return;
  }
  if(document.getElementById('cmntText').value == ''){
    document.getElementById('validVal').innerHTML = "Comment can not be empty";
    document.getElementById('validVal').style.display = '';
    document.getElementById('validVal').style.visibility = 'visible';
    return;
  }
  var dvchild = document.createElement("DIV");
  dvchild.className = "all-comments-row";
  dvchild.innerHTML = "<span class=\"all-comments-img\"><img src=\"images/items/default-avatar.png\"></span>";
  dvchild.innerHTML += "<span class=\"all-comments-name\">";
  dvchild.innerHTML += document.getElementById('cmntName').value;
  dvchild.innerHTML += "</span><div class=\"all-comments-message\">";
  dvchild.innerHTML += document.getElementById('cmntText').value;
  dvchild.innerHTML += "</div>";
  
  var firstCmnt = document.getElementById('all-comments').getElementsByTagName("div")[0];
  document.getElementById('all-comments').insertBefore(dvchild, firstCmnt);
  
  document.getElementById('cmntName').value = '';
  document.getElementById('cmntText').value = '';
  document.getElementById('validVal').style.visibility = 'hidden';
}

//BOOKS
//tabs
document.getElementById('tab-2').style.display = 'none';
var lnks = document.getElementsByClassName('tab-link');
//lnks[0].className = 'active';
function openPage(elm) {
	
	var lnks = document.getElementsByClassName('tab-link');
	if(elm == 'tab2'){
		document.getElementById('tab-1').style.display = 'none';
		document.getElementById('tab-2').style.display = 'block';
		
		lnks[0].style.backgroundColor = '#811d15';
		lnks[1].style.backgroundColor = '#bc3428';
	}
	else{
		document.getElementById('tab-1').style.display = 'block';
		document.getElementById('tab-2').style.display = 'none';
		lnks[0].style.backgroundColor = '#bc3428';
		lnks[1].style.backgroundColor = '#811d15';
	}
}
//BOOKS
//load more
function loadmore(btn){
  if(document.getElementById('more-books').style.height == document.getElementById('more-books').scrollHeight + 'px'){
    document.getElementById('more-books').style.height = '0px';
    btn.innerText = 'LOAD MORE';
  }else{
    document.getElementById('more-books').style.height = document.getElementById('more-books').scrollHeight + 'px';
    btn.innerText = 'LOAD LESS';
  }
  document.getElementById('more-books').style.height = document.getElementById('more-books').scrollHeight + 'px';
  btn.style.display = 'none';
}

//EVENTS
//load more
function loadmoreEv(btn){
  if(document.getElementById('more-events').style.height == document.getElementById('more-events').scrollHeight + 'px'){
    document.getElementById('more-events').style.height = '0px';
    btn.innerText = 'LOAD MORE';
  }else{
    document.getElementById('more-events').style.height = document.getElementById('more-events').scrollHeight + 'px';
    btn.innerText = 'LOAD LESS';
  }
  document.getElementById('more-events').style.height = document.getElementById('more-events').scrollHeight + 'px';
  btn.style.display = 'none';
}

//ITEM
//scroll to all comments
  $(document).ready(function(){
	$('.comment').click(function(){
		$('html, body').animate({scrollTop : 2650},800);
		return false;
	});
	
});

//ARTICLES
//load more
function loadmoreArc(btn){
  if(document.getElementById('more-articles').style.height == document.getElementById('more-articles').scrollHeight + 'px'){
    document.getElementById('more-articles').style.height = '0px';
    btn.innerText = 'LOAD MORE';
  }else{
    document.getElementById('more-articles').style.height = document.getElementById('more-articles').scrollHeight + 'px';
    btn.innerText = 'LOAD LESS';
  }
  document.getElementById('more-articles').style.height = document.getElementById('more-articles').scrollHeight + 'px';
  btn.style.display = 'none';
}

//PLAYGROUND
//handicrafts
//load more
function loadmoreHend(btn){
  if(document.getElementById('more-handicrafts').style.height == document.getElementById('more-handicrafts').scrollHeight + 'px'){
    document.getElementById('more-handicrafts').style.height = '0px';
    btn.innerText = 'LOAD MORE';
  }else{
    document.getElementById('more-handicrafts').style.height = document.getElementById('more-handicrafts').scrollHeight + 'px';
    btn.innerText = 'LOAD LESS';
  }
  document.getElementById('more-handicrafts').style.height = document.getElementById('more-handicrafts').scrollHeight + 'px';
  btn.style.display = 'none';
}
//recipes
//load more
function loadmoreRes(btn){
  if(document.getElementById('more-recipes').style.height == document.getElementById('more-recipes').scrollHeight + 'px'){
    document.getElementById('more-recipes').style.height = '0px';
    btn.innerText = 'LOAD MORE';
  }else{
    document.getElementById('more-recipes').style.height = document.getElementById('more-recipes').scrollHeight + 'px';
    btn.innerText = 'LOAD LESS';
  }
  document.getElementById('more-recipes').style.height = document.getElementById('more-recipes').scrollHeight + 'px';
  btn.style.display = 'none';
}
//art
//load more
function loadmoreArt(btn){
  if(document.getElementById('more-art').style.height == document.getElementById('more-art').scrollHeight + 'px'){
    document.getElementById('more-art').style.height = '0px';
    btn.innerText = 'LOAD MORE';
  }else{
    document.getElementById('more-art').style.height = document.getElementById('more-art').scrollHeight + 'px';
    btn.innerText = 'LOAD LESS';
  }
  document.getElementById('more-art').style.height = document.getElementById('more-art').scrollHeight + 'px';
  btn.style.display = 'none';
}


















