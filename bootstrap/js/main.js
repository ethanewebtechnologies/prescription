/*/////////////////////////////////////////////////////////////////////////
 //                                                                       //
 //       DESIGNED & DEVELOPED BY ETHANE TECHNOLOGIES PVT. LTD.           //
 //                                                                       //
 //   YOU ARE UNDER SURVEILLANCE OF ETHANE TECHNOLOGIES PRIVATE LIMITED   //
 //                                                                       //
 // ILLEGAL HACKING ATTEMPT IS SUBJECT TO A SERIOUS INTERNATIONAL CRIME   //
 //                                                                       // 
 /////////////////////////////////////////////////////////////////////////
 */
/*Author: Sumit Sharma*/
//new WOW().init();
$("img.lazyload").lazyload();
    $('#options').flagStrap({
        countries: {
            "US": "USA",
            "AU": "Australia",
            "GB": "United Kingdom",
            "US": "United States"
        },
        buttonSize: "btn-sm",
        buttonType: "btn-info",
        labelMargin: "10px",
        scrollable: false,
        scrollableHeight: "350px"
    });
    $('.carousel .vertical .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=1;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
     $('#bootstrap-touch-slider').bsTouchSlider();
      $(document).ready(function() {
          $('[data-toggle="popover"]').popover({ trigger: "hover" });   
//          $(".tb").popover({ trigger: "hover" });
              $('.optical-slider').owlCarousel({
                loop: true,
                margin: 10,
                 dots: false,
                  lazyLoad:true,
                 nav: true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              });
                 $('.optical-slider1').owlCarousel({
                loop: true,
                margin: 10,
                 lazyLoad:true,
                 nav: true,
                  dots: false,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              });
                 $('.optical-slider2').owlCarousel({
                loop: true,
                margin: 10,
                 nav: true,
                  lazyLoad:true,
                  dots: false,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 20
                  }
                }
              });
            
                $('.owl-carousel.brand-slider').owlCarousel({
                    loop: true,
                    margin: 40,
                     lazyLoad:true,
                     nav: true,
                     dots: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items:2,
                            nav: true
                        },
                        600: {
                            items: 3,
                            nav: true
                        },
                        1000: {
                            items: 5,
                            nav: true,
                            loop: false,
                            margin: 150
                        }
                    }
                });
            });
           function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        var tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];

    displayElement.innerHTML = "<div class='range_value'>" + "<span class='lft_value'>" + "$ " + slide1 + " </span>  $" + slide2 + "</div>";
}

window.onload = function () {
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}

//--------------------------------------------CUSTOM SELECT BOX -------------------------------------------------------------------------
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//--------------------------------------------END CUSTOM SELECT BOX -------------------------------------------------------------------------
//
//
//$(document).ready(function() {
//  var bigimage = $("#big");
//  var thumbs = $("#thumbs");
//  //var totalslides = 10;
//  var syncedSecondary = true;
//
//  bigimage
//    .owlCarousel({
//    items: 1,
//    slideSpeed: 2000,
//    nav: true,
//    autoplay: true,
//    dots: false,
//    loop: true,
//    responsiveRefreshRate: 200,
//    navText: [
//      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
//      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
//    ]
//  })
//    .on("changed.owl.carousel", syncPosition);
//
//  thumbs
//    .on("initialized.owl.carousel", function() {
//    thumbs
//      .find(".owl-item")
//      .eq(0)
//      .addClass("current");
//  })
//    .owlCarousel({
//    items: 4,
//    dots: true,
//    nav: true,
//    navText: [
//      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
//      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
//    ],
//    smartSpeed: 200,
//    slideSpeed: 500,
//    slideBy: 4,
//    responsiveRefreshRate: 100
//  })
//    .on("changed.owl.carousel", syncPosition2);
//
//  function syncPosition(el) {
//    //if loop is set to false, then you have to uncomment the next line
//    //var current = el.item.index;
//
//    //to disable loop, comment this block
//    var count = el.item.count - 1;
//    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
//
//    if (current < 0) {
//      current = count;
//    }
//    if (current > count) {
//      current = 0;
//    }
//    //to this
//    thumbs
//      .find(".owl-item")
//      .removeClass("current")
//      .eq(current)
//      .addClass("current");
//    var onscreen = thumbs.find(".owl-item.active").length - 1;
//    var start = thumbs
//    .find(".owl-item.active")
//    .first()
//    .index();
//    var end = thumbs
//    .find(".owl-item.active")
//    .last()
//    .index();
//
//    if (current > end) {
//      thumbs.data("owl.carousel").to(current, 100, true);
//    }
//    if (current < start) {
//      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
//    }
//  }
//
//  function syncPosition2(el) {
//    if (syncedSecondary) {
//      var number = el.item.index;
//      bigimage.data("owl.carousel").to(number, 100, true);
//    }
//  }
//
//  thumbs.on("click", ".owl-item", function(e) {
//    e.preventDefault();
//    var number = $(this).index();
//    bigimage.data("owl.carousel").to(number, 300, true);
//  });
//});

$(document).ready(function(){
    $("#cart").click(function(){
       $(this).toggleClass("open");
    });
});