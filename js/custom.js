jQuery(document).ready(function($){"use strict";if($('.mslider').length){$('.mslider').bxSlider({mode:'fade',pager:false,auto:true,});}
if($('.prod-slider').length){$('.prod-slider').bxSlider({pagerCustom:'#bx-pager',auto:true,});}
if($('.mslider-inner').length){$('.mslider-inner').bxSlider({mode:'fade',pager:false,controls:false,auto:true,speed:2000,});}
if($('.blog-slider').length){$('.blog-slider').bxSlider({mode:'fade',pager:false,auto:true,});}
if($('.testim-slider').length){$('.testim-slider').bxSlider({mode:'fade',controls:false,auto:true,});}
if($('.testim-slider').length){$('.testim-slider').bxSlider({pager:false,controls:false,auto:true,});}
if($('.fslider').length){$('.fslider').bxSlider({pager:true,controls:false,auto:true,});}
if($('.pbxslider').length){$('.pbxslider').bxSlider({minSlides:1,maxSlides:4,slideWidth:404,slideMargin:1,pager:false,auto:true,moveSlides:1,});}
if($('.pro-cat-slider').length){$('.pro-cat-slider').bxSlider({minSlides:1,moveSlides:1,maxSlides:4,slideWidth:300,pager:false,auto:false,responsive:true,});}
if($('.hp3-slider').length){$('.hp3-slider').bxSlider({slideWidth:262,minSlides:1,maxSlides:2,slideMargin:30,pager:false,moveSlides:1,});}
if($('#paralax').length){$('#paralax').parallax("30%",0.4);}
$("area[data-rel^='prettyPhoto']").prettyPhoto();$(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000,autoplay_slideshow:false});$(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000,autoplay_slideshow:false});});