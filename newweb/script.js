
function locomotivescroll() {
    gsap.registerPlugin(ScrollTrigger);


    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: ".main" });
    // --- SETUP END ---

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotivescroll()


function cursoreffect() {
    var page1content = document.querySelector("#page1content")
    var cursor = document.querySelector("#cursor")

    page1content.addEventListener("mousemove", function (pos) {
        gsap.to(cursor, {
            x: pos.x,
            y: pos.y
        })
    })
    page1content.addEventListener("mouseenter", function (pos) {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1content.addEventListener("mouseleave", function (pos) {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursoreffect()

// function page4animation() {
//     var page4content = document.querySelector(".page4")
//     var cursor2 = document.querySelector("#cursor2")

//     // page4content.addEventListener("mousemove", function (det) {
//     //     gsap.to(cursor2, {
//     //         x: det.x,
//     //         y: det.y
//     //     })
//     // })
//     page4content.addEventListener("mousemove", function (det) {
//         cursor2.style.left = det.x + "px"
//         cursor2.style.top = det.y + "px"
//     })




//     page4content.addEventListener("mouseenter", function (det) {
//         gsap.to(cursor2, {
//             scale: 1,
//             opacity: 1
//         })
//     })
//     page4content.addEventListener("mouseleave", function (det) {
//         gsap.to(cursor2, {
//             scale: 0,
//             opacity: 0
//         })
//     })
// }
// page4animation()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
  });

var tl=gsap.timeline()

tl.from(".loader h2",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader h2",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader",{
    opacity:0
})

tl.to(".loader",{
    display: "none"
})

tl.from("#page1content h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.1
})

// tl.from("#para",{
//     y:100,
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })
