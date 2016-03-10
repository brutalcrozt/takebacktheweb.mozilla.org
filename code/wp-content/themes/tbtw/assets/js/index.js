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




/*  
 * SCROLL TO ANCHOR
 */

tbtw.scrollToAnchor = {

  init: function() {
    $('a.scroll-to[href*=#]:not([href=#])').click(function (e) {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
        var myOffset = $(this).data('offset') || 20,
          mySpeed = $(this).data('speed') || 600,
          myEase = $(this).data('ease') || 'swing',
          myDefault = $(this).data('default') || 'true';
    
        if(target.length) {
      
          var myTop =  target.offset().top - myOffset;
          tbtw.scrollToAnchor.scrollTo(myTop, mySpeed, myEase);
      
          if(myDefault === 'true') {
            e.preventDefault();
          }
        }
      }
    });
  },
  
  scrollTo: function(myTop, mySpeed, myEase) {
    $('html,body').animate({
      scrollTop: myTop
    }, mySpeed, myEase);
  
    // stop scrolling on user input
    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup scrollstart touchstart touchmove", function() {
        $('html, body').stop();
    });
  }

};


// init on document ready

jQuery(document).ready(function() {
  
  tbtw.respond.init();
  
  tbtw.resizeHero.init();
  
  tbtw.scrollToAnchor.init();
  
});


