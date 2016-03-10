/**  
 * index.js
 * main Js file
 **/

window.tbtw = window.tbtw || {};

tbtw.respond = {
  
  init: function() {
    tbtw.mobile = true;
    
    $(window).resize(function(e) {
      tbtw.respond.mobileChange();
    });
    
    setTimeout(function() {
      tbtw.respond.mobileChange();
    }, 0);
  },
  
  mobileChange: function() {
    var newmobile = $(window).width() < 767;
    
    if (newmobile !== tbtw.mobile || typeof tbtw.mobile === "undefined" ) {
      tbtw.respond.mobileClassing(newmobile);
      $(window).trigger('mobileChange', newmobile);
      tbtw.mobile = newmobile;
    }
  },
  
  mobileClassing: function(newmobile) {
    if (newmobile) {
      $('body').addClass('mobile');
      $('body').removeClass('desktop');
    } else {
      $('body').removeClass('mobile');
      $('body').addClass('desktop');
    }
    
  }
  
};

tbtw.resizeHero = {
  
  heroResize: ($('.hero-resize')),
  defaultHeroHeight: 850,
  mobileHeight: 450,
  sectionOffset: 3,
  
  init: function() {
    
    $(window).resize(function(e) { tbtw.resizeHero.setHero(); });
    $(window).scroll(function(e) { tbtw.resizeHero.setHero(); });
    setTimeout(function() {
      tbtw.resizeHero.setHero();
    }, 0);
  },
  
  setHero: function() {
    var h = 380;
    if(tbtw.mobile) {
      tbtw.resizeHero.heroResize.css({'height': '', 'min-height': ''});
    } else {
      h = $(window).height() - tbtw.resizeHero.sectionOffset;
      if(h <= tbtw.resizeHero.mobileHeight) {
        tbtw.resizeHero.heroResize.css({'height': (tbtw.resizeHero.mobileHeight+'px'), 'min-height': (tbtw.resizeHero.mobileHeight+'px')});
      } else if(h >= tbtw.resizeHero.defaultHeroHeight) {
        tbtw.resizeHero.heroResize.css({'height': (tbtw.resizeHero.defaultHeroHeight+'px'), 'min-height': (tbtw.resizeHero.defaultHeroHeight+'px')});
      } else {
        tbtw.resizeHero.heroResize.css({'height': (h+'px'), 'min-height': (h+'px')});
      }
    }
  }
  
};




// init on document ready

jQuery(document).ready(function() {
  
  tbtw.respond.init();
  
  tbtw.resizeHero.init();
  
});


