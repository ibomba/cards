
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: '-50% center',
        end: '200% center',
        scrub: 'true',
        markers: 'true',
        toggleActions: ''
    }
})

tl.to('.animated-element', {
    x: 800,
    duration: 5
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