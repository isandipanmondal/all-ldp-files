$(document).ready(function () {
	$('#FabricTab').easyResponsiveTabs({
	type: 'default', //Types: default, vertical, accordion           
	width: 'auto', //auto or any width like 600px
	fit: true,   // 100% fit in a container
	closed: 'accordion', // Start closed if in accordion view
	activate: function(event) { // Callback function if tab is switched
	var $tab = $(this);
	var $info = $('#tabInfo');
	var $name = $('span', $info);
	$name.text($tab.text());
	$info.show();
	}
	});

$("ul.resp-tabs-list > li").removeClass("resp-tab-active");     
$("div.resp-tabs-container > h2").removeClass("resp-tab-active");     
$("div.resp-tabs-container > div").removeClass("resp-tab-content-active");    
$("div.resp-tabs-container > div").hide();
$('ul.resp-tabs-list > li[aria-controls="tab_item-0"]').addClass("resp-tab-active");     
$('div.resp-tabs-container > h2[aria-controls="tab_item-0"]').addClass("resp-tab-active");     
$('div.resp-tabs-container > div[aria-labelledby="tab_item-0"]').addClass("resp-tab-content-active");    
$('div.resp-tabs-container > div[aria-labelledby="tab_item-0"]').show();

});



// 
$('.applications-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".prevArrow"),
  nextArrow: $(".nextArrow"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});


// 

/*var btn = $('#scroll-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(function() {
  $('.scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 100, 'linear');
  });
});*/



