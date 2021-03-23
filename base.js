/* -------------------------------------------------------------------------- */
/*                                 burger menu                                */
/* -------------------------------------------------------------------------- */

// recover the button
var burgerButton = document.getElementsByClassName("span-burger");


// recover the span
var span = document.getElementsByClassName("burger");

//recover burger to slide
var slideMenu = document.getElementsByClassName("burger-slide");


//recover logo
var logo = document.getElementById("Logo-img");
var logoPath = logo.querySelectorAll('.line path');
console.log(logoPath)
// recover logo text
var spanName=document.getElementById("name");

// add action to span element
burgerButton[0].addEventListener("click", burgerSlide, false);

function burgerSlide() {
    slideMenu[0].style.cssText = "animation: burger 1s cubic-bezier(1,-0.19,.15,1.19) forwards;";
    burgerButton[0].removeEventListener("click", burgerSlide, false);
    burgerButton[0].addEventListener("click", burgerSlideReturn, false);
    setTimeout(function(){
        changeColorLogo();
    }, 500);
}

function burgerSlideReturn() {
    console.log("ok");
    slideMenu[0].style.cssText = "animation: burgerReverse 1s cubic-bezier(1,-0.19,.15,1.19) forwards;";
    // add action to span element
    burgerButton[0].removeEventListener("click", burgerSlideReturn, false);
    burgerButton[0].addEventListener("click", burgerSlide, false);
    setTimeout(function(){
        for(let i=0;i<logoPath.length;i++){
            logoPath[i].setAttribute("style","fill:none;stroke:white;stroke-miterlimit:10;stroke-width:3.123080248673974px")
        }
        span[0].style.cssText = "transform: rotate(0deg);background-color:white";
        span[2].style.cssText = "transform: rotate(0deg);background-color:white";
        span[1].style.cssText = "opacity:1;";
        spanName.style.cssText="color:white;";

    },600);
}

function changeColorLogo() {
    console.log("change");
    for(let i=0;i<logoPath.length;i++){
        logoPath[i].setAttribute("style","fill:none;stroke:black;stroke-miterlimit:10;stroke-width:3.123080248673974px")
    }
    span[0].style.cssText = "transform: rotate(45deg) translate(-5px, -4px);background-color:#101111";
    span[2].style.cssText = "transform: rotate(-45deg) translate(0px, -1px);background-color:#101111";
    span[1].style.cssText = "opacity:0;";
    spanName.style.cssText="color:black;";
    spanName.style.setProperty('--after-border-top', localStorage.getItem("border-top"));

}

function changeColorLogoReverse() {
    console.log("change");
    for(let i=0;i<logoPath.length;i++){
        logoPath[i].setAttribute("style","fill:none;stroke:white;stroke-miterlimit:10;stroke-width:3.123080248673974px")
    }
    for (var i = 0; i < span.length; i++) {
        span[i].style.cssText = "background-color: white;";
    }
}

/* -------------------------------------------------------------------------- */
/*                               slideshow index                              */
/* -------------------------------------------------------------------------- */
 ///recover carousel container
 const carouselSlide=document.querySelector(".carousel-slide");
 const carouselImages=document.getElementsByClassName("slide")

if ( carouselSlide) {
  console.log("ok");

 carouselSlide=document.querySelector(".carousel-slide");
 carouselImages=document.getElementsByClassName("slide")
// find the chent X and Y
var windowCenterX =  document.documentElement.clientWidth / 2;
var windowCenterY =  document.documentElement.clientHeight / 2;
console.log("window center" + windowCenterX);
console.log("window center" + windowCenterY);


// counter
let counter=1;
var x = window.matchMedia("(min-width: 1024px)");

var windowSize=document.documentElement.clientWidth;
window.addEventListener("resize",function(){
  if(windowSize <= 1024){
    location.href="index.html";
return false;
  }else{
    console.log("mediaresi2");
    location.href="index.html";
return false;
  }
});

slideShow();
function slideShow(){
  carouselSlide.style.transition= "";
  if (x.matches) { // If media query matches
    // button listener
    // recover button prev
    var prevBtn=document.getElementsByClassName("prev");
    //recover button netx
    var nextBtn=document.getElementsByClassName("next");
  // know how much we have to slide

  var windowSize=document.documentElement.clientWidth;

  // move one picture
  carouselSlide.style.transform = "translateX(" + (-windowSize * counter) + "px)";

  // button listener

  nextBtn[0].addEventListener("click",()=>{
      if(counter>=carouselImages.length -1){
          return;
      }
      let windowSize=document.documentElement.clientWidth;
      carouselSlide.style.transition= "transform 1s cubic-bezier(1,-0.19,.15,1.19)";
      counter++;
      carouselSlide.style.transform= "translateX(" + (-windowSize * counter) + "px)";
      console.log(carouselImages[2].id);
  });

  //add event to this button
  prevBtn[0].addEventListener("click",function(){
      if(counter<=0){
          return;
      }
      let windowSize=document.documentElement.clientWidth;
      carouselSlide.style.transition= "transform 1s cubic-bezier(1,-0.19,.15,1.19)"
      counter--;
      carouselSlide.style.transform= "translateX(" + (-windowSize * counter) + "px)";
  });

  // event end with listener when transition end reset the transition
  carouselSlide.addEventListener("transitionend",()=>{
      if(carouselImages[counter].id ==="lastclone"){
        let windowSize=document.documentElement.clientWidth;
          console.log("ok");
          //if we are at the of the image we want to remove the transition and jump back to the first image
          carouselSlide.style.transition="none";
          // update the counter
          counter=carouselImages.length -2;
          // and the we transform
          carouselSlide.style.transform= "translateX(" + (-windowSize * counter) + "px)";
      }
      if(carouselImages[counter].id ==="firstclone"){
        let windowSize=document.documentElement.clientWidth;
          //if we are at the of the image we want to remove the transition and jump back to the first image
          carouselSlide.style.transition="none";
          // update the counter
          counter=carouselImages.length - counter;
          // and the we transform to go back to first one
          carouselSlide.style.transform= "translateX(" + (-windowSize * counter) + "px)";
      }
  });

  window.addEventListener("resize", myScript);

  function myScript(){
    let windowSize=document.documentElement.clientWidth;
    console.log("ok");
    carouselSlide.style.transform= "translateX(" + (-windowSize) + "px)";
    counter=1;
  }


  } else {
  console.log("android");
  // button listener
    // recover button prev
    var prevBtn=document.getElementsByClassName("prev");
    //recover button netx
    var nextBtn=document.getElementsByClassName("next");
  // know how much we have to slide

  var windowSizeH=document.documentElement.clientHeight;

  // move one picture
  carouselSlide.style.transform = "translateY(" + (-windowSizeH * counter) + "px)";

  // button listener

  nextBtn[0].addEventListener("click",()=>{
      if(counter>=carouselImages.length -1){
          return;
      }
      let windowSizeH=document.documentElement.clientHeight;
      carouselSlide.style.transition= "transform 1s cubic-bezier(1,-0.19,.15,1.19)";
      counter++;
      carouselSlide.style.transform= "translateY(" + (-windowSizeH * counter) + "px)";
  });

  //add event to this button
  prevBtn[0].addEventListener("click",function(){
      if(counter<=0){
          return;
      }
      let windowSizeH=document.documentElement.clientHeight;
      carouselSlide.style.transition= "transform 1s cubic-bezier(1,-0.19,.15,1.19)"
      counter--;
      carouselSlide.style.transform= "translateY(" + (-windowSizeH * counter) + "px)";
  });

  // event end with listener when transition end reset the transition
  carouselSlide.addEventListener("transitionend",()=>{
      if(carouselImages[counter].id ==="lastclone"){
        let windowSizeH=document.documentElement.clientHeight;
          console.log("ok");
          //if we are at the of the image we want to remove the transition and jump back to the first image
          carouselSlide.style.transition="none";
          // update the counter
          counter=carouselImages.length -2;
          // and the we transform
          carouselSlide.style.transform= "translateY(" + (-windowSizeH * counter) + "px)";
      }
      if(carouselImages[counter].id ==="firstclone"){
        let windowSizeH=document.documentElement.clientHeight;
          //if we are at the of the image we want to remove the transition and jump back to the first image
          carouselSlide.style.transition="none";
          // update the counter
          counter=carouselImages.length - counter;
          // and the we transform to go back to first one
          carouselSlide.style.transform= "translateY(" + (-windowSizeH * counter) + "px)";
      }
  });

  window.addEventListener("resize", myScript);

  function myScript(){
    let windowSizeH=document.documentElement.clientHeight;
    console.log("ok");
    carouselSlide.style.transform= "translateY(" + (-windowSizeH) + "px)";
    counter=1;

  }


  }





/* -------------------------------------------------------------------------- */
/*                                  Anime Js                                  */
/* -------------------------------------------------------------------------- */
function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 100});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
 // resize();
 // window.addEventListener('resize', resize);
}

var sphereAnimation = (function() {

  var sphereEl = document.querySelector('.sphere-animation');
  var spherePathEls = sphereEl.querySelectorAll('.Layer_1 path');
  var pathLength = spherePathEls.length;
  var hasStarted = false;
  var aimations = [];

  fitElementToParent(sphereEl);

  var breathAnimation = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(255,255,255,1)', 'rgba(80,80,80,.5)'], duration: 1000},
          translateX: [8, -16],
          translateY: [4, -8],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });



  var shadowAnimation = anime({
      targets: '#sphereGradient',
      x1: '25%',
      x2: '25%',
      y1: '0%',
      y2: '75%',
      duration: 20000,
      easing: 'easeOutQuint',
      autoplay: false
    }, 0);

  function init() {

    breathAnimation.play();
    shadowAnimation.play();
  }

  init();

})();
}

}

/* -------------------------------------------------------------------------- */
/*                               PAGE PORTFOLIO                               */
/* -------------------------------------------------------------------------- */
//recover main
var mainPortfolio=document.getElementById("portfolio");

if ( mainPortfolio) {


var x = window.matchMedia("(min-width: 1024px)");
var deviceIsMobile = false; //At the beginning we set this flag as false. If we can detect the device is a mobile device in the next line, then we set it as true.


if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
   deviceIsMobile = true;
   console.log("ok");
}

  if (x.matches && deviceIsMobile===false ) {
    console.log(deviceIsMobile);
    console.log("ok");
    const eventListenerOptionsSupported = () => {
      let supported = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          get() {
            supported = true;
          }
        });

        window.addEventListener('test', null, opts);
        window.removeEventListener('test', null, opts);
      } catch (e) {}

      return supported;
    }

    const defaultOptions = {
      passive: false,
      capture: false
    };
    const supportedPassiveTypes = [
      'scroll', 'wheel',
      'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave',
      'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'
    ];
    const getDefaultPassiveOption = (passive, eventName) => {
      if (passive !== undefined) return passive;

      return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
    };

    const getWritableOptions = (options) => {
      const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');

      return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined
        ? Object.assign({}, options)
        : options;
    };

    const overwriteAddEvent = (superMethod) => {
      EventTarget.prototype.addEventListener = function (type, listener, options) {
        const usesListenerOptions = typeof options === 'object' && options !== null;
        const useCapture          = usesListenerOptions ? options.capture : options;

        options         = usesListenerOptions ? getWritableOptions(options) : {};
        options.passive = getDefaultPassiveOption(options.passive, type);
        options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;

        superMethod.call(this, type, listener, options);
      };

      EventTarget.prototype.addEventListener._original = superMethod;
    };

    const supportsPassive = eventListenerOptionsSupported();

    if (supportsPassive) {
      const addEvent = EventTarget.prototype.addEventListener;
      overwriteAddEvent(addEvent);
    }


  var divToscroll=document.getElementById("portfolio");

  divToscroll.addEventListener('wheel', function(e)
  {
    if(e.type != 'wheel')
    {
      return;
    }
    console.log("ok");
    let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
    delta = delta * (-50);
    document.documentElement.scrollLeft -= delta;
    // safari needs also this
    document.body.scrollLeft -= delta;
    e.preventDefault();
  });
  }// If media query matches
   else if(x.matches && deviceIsMobile===true){
    mainPortfolio.style.cssText="overflow-y: hidden;"
    var windowSize=document.documentElement.clientWidth;
    window.addEventListener("resize",function(){
      if(windowSize <= 1024){
        location.href="porfolio.html";
    return false;
      }else{
        console.log("mediaresi2");
        location.href="porfolio.html";
    return false;
      }
    });

   }

}


/* -------------------------------------------------------------------------- */
/*                               PAGE TRANSITION                              */
/* -------------------------------------------------------------------------- */
/*var trans = document.getElementById("transition");
var trans2 = document.getElementById("transition2");

//recover link
var linkPortfolio=document.getElementsByClassName("portfolio");
linkPortfolio[0].addEventListener("click", transition);


function transition(link) {
  var promise= new Promise((resolve,reject)=>{
    trans.style.display="block";
    trans.animate([{ left: "1920"+ "px" }, { left: "-1920" + "px" }], {
      duration: 10000,
      iterations: 1,
      fill: "forwards"
    });
    trans.addEventListener("animationend", resolve(link))
  })
  promise.then((value)=>{
    window.location.href=value;//at the end
  })
}

function myFunction(link){
window.location=link;//at the end
}
*/
