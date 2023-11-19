// Start

let tl = gsap.timeline()

tl.from('.navbar', {
    duration: 0.4,
    y: -100,
})

tl.from('.left ul', {
    duration: 0.4,
    x: -100,
})

tl.from('.home', {
    duration: 0.4,
    y: 600,
    opacity: 0
})

tl.from('.section-2', {
    duration: 0.4,
    y: 600,
    opacity: 0
})

// Others

gsap.from('.aside-logo', {
    scrollTrigger: {
        trigger: '.left ul',
        scroller: '.container',
        start: 'top 9%',
        end : 'bottom 15%',
        scrub:true
    },
    // duration: 1,
    opacity: 0,
    y: -100
  })

gsap.from('.top-btn', {
    scrollTrigger: {
        trigger: '.left ul',
        scroller: '.container',
        start: 'top 9%',
        end : 'bottom 15%',
        scrub:true
    },
    opacity: 0,
})