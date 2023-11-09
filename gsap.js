
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: 'top center',
        end: 'bottom center',
        scrub: 'true',
        // markers: 'true',
    }
})

tl.to('.animated-element', {
    x: 800
})






// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)