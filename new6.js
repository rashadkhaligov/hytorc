
(function($) {
  $(document).ready(function() {
    // social sidebar
    function repositionSideBar() {
      var containerInner = $('#container_inner');
      var position = containerInner.position();
      var rightBorder = position.left + containerInner.width();
      var totalWidth = $(window).width();
      
      $('#social-fixed').css('right', (totalWidth - rightBorder - 30) + 'px');
    }
    
    // print link
    $("#print").click(function(event) { window.print(); event.preventDefault(); });
    
    // link red elements
    $('.slider_red[data-url!=""]').css('cursor', 'pointer').click(function() {
      window.location = $(this).attr('data-url');
    });
    
    // call initially and on all resizes
    repositionSideBar();
    $(window).resize(function() {
      repositionSideBar();
    });
    
    // colorbox
    $('[rel="lightbox[myImageSet]"]').colorbox({rel:'lightbox[myImageSet]'});
  });
})(jQuery);
jQuery('a.t3colorbox').colorbox({current:"Bild {current} von {total}",previous:"vor",next:"zurÃ¼ck",close:"schliessen",slideshowStart:"Slideshow starten",slideshowStop:"Slideshow anhalten",slideshowAuto:true,initialWidth:"320px",initialHeight:"320px",maxWidth:"98%",maxHeight:"98%",});window.addEventListener("orientationchange",function(){if($('#cboxOverlay').is(':visible')){$.colorbox.load(true);}},false);