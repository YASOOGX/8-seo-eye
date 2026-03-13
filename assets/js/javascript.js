// start basic
// // //////load
document.getElementsByTagName('body')[0].classList.add('loaderlodging__body');
window.onload = function() {
    document.getElementsByClassName('loaderlodging')[0].classList.add('remove');
    document.getElementsByClassName('loaderlodging__body')[0].classList.add('afterloading');
}
let header = document.querySelector("header");
let end = document.querySelector(".end")


window.onscroll = function () {
    if (scrollY >= 300) {
        header.classList.add("header-fixed");
        end.classList.add("d-block");
    } else {
        header.classList.remove("header-fixed");
        end.classList.remove("d-block");
    }
};

// let Pop_btn = document.querySelectorAll(".pop-btn");
// let Pop_img = document.querySelectorAll(".pop-img");
// let Pop_vid = document.querySelectorAll(".vid");

// Pop_btn.forEach((item, index) => {
//   item.onclick = () => {
//     Pop_img.forEach((item2, index2) => {
//       if (index == index2) {
//         item2.classList.add("flex");
//       }
//       item2.onclick = () => {
//         item2.classList.remove("flex");
//       };
//     });
//   };
// });
// end basic

let bg_phone = document.querySelector("header .phone-slide");
let phone_slider = document.querySelector("  header .phone-slide .links");
let bar = document.querySelector("  header  .bar");
let closes = document.querySelector("  header  .closes");

bar.onclick = () => {
  setTimeout(() => {
    phone_slider.classList.add("left-0");
  }, 10);
  bg_phone.classList.add("d-flex");
};
closes.onclick = () => {
  setTimeout(() => {
    bg_phone.classList.remove("d-flex");
  }, 1500);
  phone_slider.classList.remove("left-0");
};


// cola.forEach(ele => {
  //   if(ele.classList.item("show")){
    //     cola.forEach(ele2=>{
      //       ele2.classList.remove("show")
      //     })
      //   }
      // });
      
      
      let cola =document.querySelectorAll(".collapse")
let collapse = document.querySelectorAll(".help .row .col")
let collapse_rotate = document.querySelectorAll(".help .row .change")
let collapse_btn = document.querySelectorAll(".help .blus-open-info")

collapse.forEach((ele,ind)=>{
    ele.onclick=()=>{
        // cola.forEach(ele2=>{
        //     ele2.classList.remove("show")
        //   })
        collapse_rotate.forEach((ele2,ind2)=>{
            if(ind==ind2){
                ele2.classList.toggle("rotate")
            }
            else{
            }
        })
        collapse_btn.forEach((ele2,ind2)=>{
            if(ind==ind2){
                ele2.classList.toggle("bg-prime")
            }
            else{
                
            }
        })
    }
})
// /////////////////////////////////////
// // plugins
// $(".fade1")
//   .slick({
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     fade: true,
//     cssEase: "linear",
//     rtl: true,
//   })
//   .slickAnimation();
// // start swip photo

// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   autoplay: true,
//   speed: 300,
//   asNavFor: '.slider-nav',
//   rtl: true,
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   autoplay: true,
//   speed: 300,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//     rtl: true,
// });

// // $(".autoplay")
// //   .slick({
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2300,
// //     rtl:true
// //   }).slickAnimation();
// // ////autoplay 2


// // end slider
// ////////////////////////
// // start animation scroll
AOS.init();
// // end animation scroll
// //////////////////////////////
// // // start auto type
// document.addEventListener("DOMContentLoaded", function() {
//   const exampleText = ['عميد الكليه'];
//   const exampleTyping = new AutoTyping('.auto', exampleText, {
//       typeSpeed: 50,
//       deleteSpeed: 50,
//       waitBeforeDelete: 2000,
//       waitBetweenWords: 500,
//   });
//   exampleTyping.start()
// });
// // ///////////////////////////////
// start pop up
$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
  });

  $(".image-popup-fit-width").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".image-popup-no-margins").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".videoplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },

        // you may add here more sources
      },

      srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
  });
});
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      // titleSrc: function(item) {
      // 	return item.el.attr('title') + ' by Marsel Van Oosten';
      // }
    },
  });
});
(function($){
  "use strict";

  if (screen.width <= 350) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }
   else if (screen.width <= 768) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }
  else if (screen.width <= 991) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }
  else if (screen.width >= 991) {
    $(".autoplay2").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }


  
  if (screen.width <= 350) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }
   else if (screen.width <= 768) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }
  else if (screen.width <= 991) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }
  else if (screen.width >= 991) {
    $(".autoplay3").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      rtl:true
    });
  }

})(jQuery);


