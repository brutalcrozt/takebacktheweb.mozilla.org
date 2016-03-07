/**  
 * index.js
 * main Js file
 **/

window.tbtw = window.tbtw || {};

tbtw.resizeHero = {
  
  heroResize: ($('.hero-resize')),
  defaultHeroHeight: 850,
  mobileHeight: 350,
  sectionOffset: 3,
  
  init: function() {
    tbtw.resizeHero.setHero();
    $(window).resize(function(e) { tbtw.resizeHero.setHero(); });
    $(window).scroll(function(e) { tbtw.resizeHero.setHero(); });
  },
  
  setHero: function() {
    
    var h = $(window).height() - tbtw.resizeHero.sectionOffset;
    if(h <= tbtw.resizeHero.mobileHeight) {
      tbtw.resizeHero.heroResize.css({'height': (tbtw.resizeHero.mobileHeight+'px'), 'min-height': (tbtw.resizeHero.mobileHeight+'px')});
    } else if(h >= tbtw.resizeHero.defaultHeroHeight) {
      tbtw.resizeHero.heroResize.css({'height': (tbtw.resizeHero.defaultHeroHeight+'px'), 'min-height': (tbtw.resizeHero.defaultHeroHeight+'px')});
    } else {
      tbtw.resizeHero.heroResize.css({'height': (h+'px'), 'min-height': (h+'px')});
    }
    
  }
  
};




// init on document ready

jQuery(document).ready(function() {
  
  tbtw.resizeHero.init();
  
});


