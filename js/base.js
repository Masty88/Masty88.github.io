/* -------------------------------------------------------------------------- */
/*                                  Lazy Load                                 */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video .lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});

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
var logoPath = logo.querySelectorAll(".line path");
var pathToFill = document.getElementById("path-tofill");

// recover logo text
var spanName = document.getElementById("name");
var spanLine = document.getElementById("line-nav");

// add action to span element
burgerButton[0].addEventListener("click", burgerSlide, false);

/* -------------------------------- function -------------------------------- */

function burgerSlide() {
    slideMenu[0].style.cssText = "animation: burger 1s cubic-bezier(1,-0.19,.15,1.19) forwards;";
    burgerButton[0].removeEventListener("click", burgerSlide, false);
    burgerButton[0].addEventListener("click", burgerSlideReturn, false);
    setTimeout(function () {
        changeColorLogo();
    }, 500);
}

function burgerSlideReturn() {
    console.log("ok");
    slideMenu[0].style.cssText = "animation: burgerReverse 1s cubic-bezier(1,-0.19,.15,1.19) forwards;";
    // add action to span element
    burgerButton[0].removeEventListener("click", burgerSlideReturn, false);
    burgerButton[0].addEventListener("click", burgerSlide, false);
    setTimeout(function () {
        for (let i = 0; i < logoPath.length; i++) {
            logoPath[i].setAttribute("style", "fill:none;stroke:white;stroke-miterlimit:10;stroke-width:3.123080248673974px");
        }
        span[0].style.cssText = "transform: rotate(0deg);background-color:white";
        span[2].style.cssText = "transform: rotate(0deg);background-color:white";
        span[1].style.cssText = "opacity:1;";
        spanName.style.cssText = "color:white;";
        spanLine.style.cssText = "color:white;";
    }, 600);
}

function changeColorLogo() {
    console.log("change");
    for (let i = 0; i < logoPath.length; i++) {
        logoPath[i].setAttribute("style", "fill:none;stroke:black;stroke-miterlimit:10;stroke-width:3.123080248673974px");
    }
    span[0].style.cssText = "transform: rotate(45deg) translate(-5px, -4px);background-color:#101111";
    span[2].style.cssText = "transform: rotate(-45deg) translate(0px, -1px);background-color:#101111";
    span[1].style.cssText = "opacity:0;";
    spanName.style.cssText = "color:black;";
    spanLine.style.cssText = "color:black;";
}

function changeColorLogoReverse() {
    console.log("change");
    for (let i = 0; i < logoPath.length; i++) {
        logoPath[i].setAttribute("style", "fill:none;stroke:white;stroke-miterlimit:10;stroke-width:3.123080248673974px");
    }
    for (var i = 0; i < span.length; i++) {
        span[i].style.cssText = "background-color: white;";
    }
}

/* -------------------------------------------------------------------------- */
/*                                NAV ON SCROLL                               */
/* -------------------------------------------------------------------------- */
var mainNav = document.getElementsByClassName("mainnav");

//listern on scrool
window.addEventListener("scroll", function () {
    mainNav[0].style.cssText = "background-color:#101111;";
});

/* -------------------------------------------------------------------------- */
/*                               PAGE TRANSITION                              */
/* -------------------------------------------------------------------------- */

var divTransition = document.getElementsByClassName("page-transition");
//recover the logo
var logoTransition = document.getElementsByClassName("logo-transition");
var logoTSvg = document.querySelector(".line");
var logoTransitionPath = document.querySelectorAll(".line path");
console.log(logoTransitionPath);
//recover the link
var linkTranstion = document.getElementsByClassName("link-transition");
//burger

//recover the global wrapper
var globalWrapper = document.getElementsByClassName("wrapper");
//intro transition
var divTransitionIntro = document.getElementsByClassName("page-transition-intro");

linkTransitionListener();

window.onload = initTRans();

/* -------------------------------- function -------------------------------- */

function linkTransitionListener() {
    for (let i = 0; i < linkTranstion.length; i++) {
        linkTranstion[i].addEventListener("click", checkIndex);
    }
}

function checkIndex(event) {
    var indexLink = Array.from(linkTranstion).indexOf(event.target);
    for (let i = 0; i < divTransition.length; i++) {
        divTransition[i].style.display = "flex";
        divTransition[i].addEventListener("animationend", function () {
            logoTransition[i].style.display = "flex";
            logoTransitionPath[i].addEventListener("animationend", function () {
                let hrefPage = linkTranstion[indexLink].dataset.link;
                window.location.href = hrefPage;
            });
        });
    }
}

function initTRans() {
    globalWrapper[0].style.display = "block";
    console.log("ok");
    globalWrapper[0].addEventListener("animationend", function () {
        divTransitionIntro[0].style.display = "none";
        globalWrapper[0].style.cssText = "animation:none;";
    });
}

/* -------------------------------------------------------------------------- */
/*                               PAGE HOME                                    */
/* -------------------------------------------------------------------------- */

// recover the div for start this script
var home = document.getElementById("wrapper_home");
if (home) {
    /* ----------------------------- recover the var ---------------------------- */

    //recover carousel container
    var carouselSlide = document.querySelector(".carousel-slide");
    // recover images
    var carouselImages = document.getElementsByClassName("slide");
    // counter
    let counter = 1;

    /* ------------------------------- media query ------------------------------ */

    //js media query desktop and tablet
    var x = window.matchMedia("(min-width: 1024px)");
    // recover the window size
    var windowSize = document.documentElement.clientWidth;

    /* ----------------------------- text animation ----------------------------- */

    // Wrap every letter in a span
    var textWrapper = document.querySelector(".ml12");
    var textWrapper2 = document.querySelector(".ml13");
    var textWrapper3 = document.querySelector(".ml14");
    var textWrapper4 = document.querySelector(".ml15");
    var textWrapper5 = document.querySelector(".ml16");
    var textWrapper6 = document.querySelector(".ml11");
    //regex to replace
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S{8,}/g, "<span class='letter'>$&<br>");
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S{2}\s\S{7}/, "<span class='letter'>$&<br>");
    textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S{2}\s\S{5}/, "<span class='letter'>$&<br>");
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S{2}\s\S{6}/g, "<span class='letter'>$&<br>");
    textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S{8,}/g, "<span class='letter'>$&<br>");
    textWrapper6.innerHTML = textWrapper6.textContent.replace(/\S{2}\s\S{5}/, "<span class='letter'>$&<br>");

    /* -------------------- listener to resize to prevent bug ------------------- */

    // add listener because of different translate in different screen, prevent bug when screen switch fro portrait
    //to landscape
    window.addEventListener("resize", function () {
        //resize if windwo size is smaller tha 1024
        if (windowSize <= 1024) {
            //reload to homepage
            location.href = "index.html";
            return false;
        } else {
            //reload the home page
            location.href = "index.html";
            return false;
        }
    });

    //textWrapper.innerHTML = textWrapper.textContent.replace(/\S{8,}\s+\S{12}s+\S{9}/, "<span class='letter'>$&<br>");
    function animateTextY(index) {
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: index,
                translateY: [400, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 300 + 30 * i,
            });
    }
    function animateTextX(index) {
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: index,
                translateX: [800, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 30 * i,
            });
    }

    //call the slideshow function
    slideShow();

    /* -------------------------------- function -------------------------------- */

    function slideShow() {
        // If media query matches
        if (x.matches) {
            // know how much we have to slide
            var windowSize = document.documentElement.clientWidth;
            // move one picture
            carouselSlide.style.transform = "translateX(" + -windowSize * counter + "px)";

            carouselTranslate(document.documentElement.clientWidth, "translateX(");

            // move one picture because the picture are 100% width and counter is one
            carouselSlide.style.transform = "translateX(" + -windowSize * counter + "px)";

            anime
                .timeline({
                    loop: false,
                })
                .add({
                    targets: ".ml12 .letter",
                    translateX: [800, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1200,
                    delay: (el, i) => 500 + 30 * i,
                });

            anime
                .timeline({
                    loop: false,
                })
                .add({
                    targets: ".ml16 .letter",
                    translateX: [800, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1200,
                    delay: (el, i) => 500 + 30 * i,
                });

            // to prevent bad window size so the images will be at the wrong place
            window.addEventListener("resize", myScriptX);

            function myScriptX() {
                // recover again to prevent bug on
                let windowSize = document.documentElement.clientWidth;
                console.log("ok");
                carouselSlide.style.transform = "translateX(" + -windowSize + "px)";
                counter = 1;
            }
        } else {
            var windowSizeH = document.documentElement.clientHeight;

            // move one picture
            carouselSlide.style.transform = "translateY(" + -windowSizeH * counter + "px)";

            anime
                .timeline({
                    loop: false,
                })
                .add({
                    targets: ".ml12 .letter",
                    translateX: [400, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1200,
                    delay: (el, i) => 300 + 30 * i,
                });
            carouselTranslate(document.documentElement.clientHeight, "translateY(");

            window.addEventListener("resize", myScriptY);

            /* --------------------------- function to resize --------------------------- */

            function myScriptY() {
                let windowSizeH = document.documentElement.clientHeight;
                console.log("ok");
                carouselSlide.style.transform = "translateY(" + -windowSizeH + "px)";
                counter = 1;
            }
        }

        /* -------------------------------------------------------------------------- */
        /*                                  Anime Js                                  */
        /* -------------------------------------------------------------------------- */
        function fitElementToParent(el, padding) {
            var timeout = null;

            function resize() {
                if (timeout) clearTimeout(timeout);
                anime.set(el, {
                    scale: 100,
                });
                var pad = padding || 0;
                var parentEl = el.parentNode;
                var elOffsetWidth = el.offsetWidth - pad;
                var parentOffsetWidth = parentEl.offsetWidth;
                var ratio = parentOffsetWidth / elOffsetWidth;
                timeout = setTimeout(
                    anime.set(el, {
                        scale: ratio,
                    }),
                    10
                );
            }
            // resize();
            // window.addEventListener('resize', resize);
        }

        var sphereAnimation = (function () {
            var sphereEl = document.querySelector(".sphere-animation");
            var spherePathEls = sphereEl.querySelectorAll(".Layer_1 path");
            var pathLength = spherePathEls.length;
            var hasStarted = false;
            var aimations = [];

            fitElementToParent(sphereEl);

            var breathAnimation = anime({
                begin: function () {
                    for (var i = 0; i < pathLength; i++) {
                        aimations.push(
                            anime({
                                targets: spherePathEls[i],
                                stroke: {
                                    value: ["rgba(255,255,255,1)", "rgba(80,80,80,.5)"],
                                    duration: 1000,
                                },
                                translateX: [8, -16],
                                translateY: [4, -8],
                                easing: "easeOutQuad",
                                autoplay: false,
                            })
                        );
                    }
                },
                update: function (ins) {
                    aimations.forEach(function (animation, i) {
                        var percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
                        animation.seek(animation.duration * percent);
                    });
                },
                duration: Infinity,
                autoplay: false,
            });

            var shadowAnimation = anime(
                {
                    targets: "#sphereGradient",
                    x1: "25%",
                    x2: "25%",
                    y1: "0%",
                    y2: "75%",
                    duration: 20000,
                    easing: "easeOutQuint",
                    autoplay: false,
                },
                0
            );

            function init() {
                breathAnimation.play();
                shadowAnimation.play();
            }

            init();
        })();
        // duplicate for clone slide
        var sphereAnimation2 = (function () {
            var sphereEl2 = document.querySelector(".sphere-animation2");
            var spherePathEls2 = sphereEl2.querySelectorAll(".Layer_1 path");
            var pathLength2 = spherePathEls2.length;
            var hasStarted = false;
            var aimations = [];

            fitElementToParent(sphereEl2);

            var breathAnimation = anime({
                begin: function () {
                    for (var i = 0; i < pathLength2; i++) {
                        aimations.push(
                            anime({
                                targets: spherePathEls2[i],
                                stroke: {
                                    value: ["rgba(255,255,255,1)", "rgba(80,80,80,.5)"],
                                    duration: 1000,
                                },
                                translateX: [8, -16],
                                translateY: [4, -8],
                                easing: "easeOutQuad",
                                autoplay: false,
                            })
                        );
                    }
                },
                update: function (ins) {
                    aimations.forEach(function (animation, i) {
                        var percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
                        animation.seek(animation.duration * percent);
                    });
                },
                duration: Infinity,
                autoplay: false,
            });

            var shadowAnimation = anime(
                {
                    targets: "#sphereGradient",
                    x1: "25%",
                    x2: "25%",
                    y1: "0%",
                    y2: "75%",
                    duration: 20000,
                    easing: "easeOutQuint",
                    autoplay: false,
                },
                0
            );

            function init() {
                breathAnimation.play();
                shadowAnimation.play();
            }

            init();
        })();
    }

    //@parameter size--> client width or height -->document.documentElement.clientWidth
    //@parameter translate--->"translateX(" or "translateY("
    //function--->translate size of screen
    function carouselTranslate(size, translate) {
        //recover again for ios oterwhise don'twork
        let counter = 1;
        //recover again to prevent bug on ios device
        let carouselSlide = document.querySelector(".carousel-slide");
        //recover again to prevent bug on ios device
        let carouselImages = document.getElementsByClassName("slide");
        // recover button prev
        var prevBtn = document.getElementsByClassName("prev");
        //recover button netx
        var nextBtn = document.getElementsByClassName("next");

        // button listener
        nextBtn[0].addEventListener("click", () => {
            if (counter >= carouselImages.length - 1) {
                return;
            }
            // recover again the window size to prevent bug on ios
            let windowSize = size;
            // add a transition style
            carouselSlide.style.transition = "transform 1s cubic-bezier(1,-0.19,.15,1.19)";
            // counter plus one
            counter++;
            console.log(counter + 1);
            // translate x
            carouselSlide.style.transform = translate + -windowSize * counter + "px)";
            if (x.matches) {
                animateTextX(".ml1" + (counter + 1) + " .letter");
                animateTextX(".ml1" + (counter + 1) + " .letter");
                if (counter + 1 === 5) {
                    animateTextX(".ml1" + (counter + 1) + " .letter");
                    animateTextX(".ml11  .letter");
                } else if (counter + 1 === 1) {
                    animateTextX(".ml1" + (counter + 1) + " .letter");
                    animateTextX(".ml15  .letter");
                } else if (counter + 1 === 2) {
                    animateTextX(".ml1" + (counter + 1) + " .letter");
                    animateTextX(".ml16  .letter");
                } else if (counter + 1 === 6) {
                    animateTextX(".ml12" + (counter + 1) + " .letter");
                    textWrapper.style.cssText = "visibility:hidden;";
                }
            } else {
                animateTextY(".ml1" + (counter + 1) + " .letter");
            }
            console.log(".ml1" + (counter + 1) + " .letter");
        });

        //add event to this button
        prevBtn[0].addEventListener("click", function () {
            //if we have negative coununter
            if (counter <= 0) {
                //stop the function
                return;
            }
            // recover again the window size to prevent bug on ios
            let windowSize = size;
            //add transition style
            carouselSlide.style.transition = "transform 1s cubic-bezier(1,-0.19,.15,1.19)";
            //counter minus one
            counter--;
            //and translate the x
            carouselSlide.style.transform = translate + -windowSize * counter + "px)";
            console.log(counter + 1);
            //animate text
            if (x.matches) {
                animateTextX(".ml1" + (counter + 1) + " .letter");
                if (counter + 1 === 5) {
                    animateTextX(".ml1" + (counter + 1) + " .letter");
                    animateTextX(".ml11  .letter");
                } else if (counter + 1 === 2) {
                    animateTextX(".ml1" + (counter + 1) + " .letter");
                    animateTextX(".ml16  .letter");
                } else if (counter + 1 === 1) {
                    animateTextX(".ml1" + (counter + 1) + " .letter");
                    textWrapper4.style.cssText = "visibility:hidden;";
                }
            } else {
                animateTextY(".ml1" + (counter + 1) + " .letter");
            }
            console.log(".ml1" + (counter + 1) + " .letter");
        });

        // event end with listener when transition end reset the transition
        carouselSlide.addEventListener("transitionend", () => {
            // if the images at index counter so the laste one or the first one
            if (carouselImages[counter].id === "lastclone") {
                // recover again the window size to prevent bug on ios
                let windowSize = size;
                console.log("ok");
                //if we are at the of the image we want to remove the transition and jump back to the first image
                carouselSlide.style.transition = "none";
                // update the counter
                counter = carouselImages.length - 2;
                // and the we transform
                carouselSlide.style.transform = translate + -windowSize * counter + "px)";
                if (x.matches) {
                } else {
                    animateTextY(".ml1" + counter + " .letter");
                }
            }
            // if we are at the beginning
            if (carouselImages[counter].id === "firstclone") {
                // recover again the window size to prevent bug on ios
                let windowSize = size;
                //if we are at the of the image we want to remove the transition and jump back to the first image
                carouselSlide.style.transition = "none";
                // update the counter
                counter = carouselImages.length - counter;
                // and the we transform to go back to first one
                carouselSlide.style.transform = translate + -windowSize * counter + "px)";
                if (x.matches) {
                } else {
                    animateTextY(".ml1" + counter + " .letter");
                }
            }
        });
    }
}

/* -------------------------------------------------------------------------- */
/*                               PAGE PORTFOLIO                               */
/* -------------------------------------------------------------------------- */
//recover main
var mainPortfolio = document.getElementById("portfolio");
//var back potfolio
var backPortfolio = document.getElementById("back__portfolio");
//var main portfolio
var frontPortfolio = document.getElementById("portfolio__main__mobile");

if (mainPortfolio) {
    var x = window.matchMedia("(min-width: 1024px)");
    var y = window.matchMedia("(min-width: 768px)");
    var deviceIsMobile = false; //At the beginning we set this flag as false. If we can detect the device is a mobile device in the next line, then we set it as true.

    if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            navigator.userAgent.substr(0, 4)
        )
    ) {
        deviceIsMobile = true;
        console.log("ok");
    }

    if ((x.matches || y.matches) && deviceIsMobile === false) {
        console.log(deviceIsMobile);

        back__portfolio.style.cssText = "overflow-y: visible;background-color:#101111;width:300%;overflow-x: auto;position: fixed;opacity:1;";
        mainPortfolio.style.cssText = "overflow-y: visible;";

        /* ------------ script found on stackoverflow to prevent default ------------ */

        const eventListenerOptionsSupported = () => {
            let supported = false;

            try {
                const opts = Object.defineProperty({}, "passive", {
                    get() {
                        supported = true;
                    },
                });

                window.addEventListener("test", null, opts);
                window.removeEventListener("test", null, opts);
            } catch (e) {}

            return supported;
        };

        const defaultOptions = {
            passive: false,
            capture: false,
        };
        const supportedPassiveTypes = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];
        const getDefaultPassiveOption = (passive, eventName) => {
            if (passive !== undefined) return passive;

            return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
        };

        const getWritableOptions = (options) => {
            const passiveDescriptor = Object.getOwnPropertyDescriptor(options, "passive");

            return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined ? Object.assign({}, options) : options;
        };

        const overwriteAddEvent = (superMethod) => {
            EventTarget.prototype.addEventListener = function (type, listener, options) {
                const usesListenerOptions = typeof options === "object" && options !== null;
                const useCapture = usesListenerOptions ? options.capture : options;

                options = usesListenerOptions ? getWritableOptions(options) : {};
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

        /* --------------- transform scroll form vertical to horizontal -------------- */
        //recover the div to scroll
        var divToscroll = document.getElementById("portfolio");
        // recover backslider
        var backPortfolio = document.getElementById("back__portfolio");
        //recover the project in fron porfolio
        var frontproject = document.getElementsByClassName("project");

        scrollBack();

        //add listener to scroll
        divToscroll.addEventListener("wheel", function (e) {
            if (e.type != "wheel") {
                return;
            }
            console.log("ok");
            let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;
            delta = delta * -50;
            document.documentElement.scrollLeft -= delta;
            // safari needs also this
            document.body.scrollLeft -= delta;
            e.preventDefault();
        });

        /* -------------------------------- function -------------------------------- */

        function scrollBack() {
            //give event to all project
            for (let i = 0; i < frontproject.length; i++) {
                frontproject[i].addEventListener("mouseover", translateXBack);
                frontproject[i].addEventListener("mouseout", removeTranslate);

                function translateXBack() {
                    backPortfolio.style.transform = "translateX(" + -i * 10 + "%)";
                    backPortfolio.style.transition = "transform 0.5s cubic-bezier(1,-0.19,.15,1.19)";
                }

                function removeTranslate() {
                    document.removeEventListener("mouseover", translateXBack);
                }
            }
        }
    } // If media query matches and device is mobile
    else if (y.matches || (x.matches && deviceIsMobile === true)) {
        // portfolio y hidde
        mainPortfolio.style.cssText = "overflow-y: hidden;";
        var windowSize = document.documentElement.clientWidth;
        window.addEventListener("resize", function () {
            if (windowSize <= 1024) {
                location.href = "porfolio.html";
                return false;
            } else {
                location.href = "porfolio.html";
                return false;
            }
        });
    }
}

/* -------------------------------------------------------------------------- */
/*                                PROJECT PAGE                                */
/* -------------------------------------------------------------------------- */

var projectPage = document.getElementById("project__page");

if (projectPage) {
    var nexProj = document.getElementsByClassName("next_proj");
    var prevProj = document.getElementsByClassName("prev_proj");

    var thumb = document.getElementsByClassName("cursor");
    var container = document.getElementsByClassName("container");

    nexProj[0].addEventListener("click", plusSlides);
    prevProj[0].addEventListener("click", minusSlides);

    for (let i = 0; i < thumb.length; i++) {
        thumb[i].addEventListener("click", function () {
            console.log("ok");
            showSlides((slideIndex = i + 1));
        });
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides() {
        showSlides((slideIndex += 1));
    }

    function minusSlides() {
        showSlides((slideIndex -= 1));
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    }
}
