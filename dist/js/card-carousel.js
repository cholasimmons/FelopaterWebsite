const config = {
    type: 'carousel',
    startAt: 1,
    perView: 4,
    gap: 4,
    focusAt: 'center',
    autoplay: '4800',
    hoverpause: true,
    keyboard: true,
    breakpoints: {
      1280: {
        perView: 4,
      },
      1024: {
        perView: 3,
      },
      768: {
        perView: 2,
      }
    }
  }
  new Glide('.glide', config).mount()