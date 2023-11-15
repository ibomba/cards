



gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-logo',
        start: '30%',
        end: '60%',
        scrub: 'true',
        // markers: 'true'
    }
})

tl.to('.nav-logo', {
    y: 100
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