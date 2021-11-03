export const hueColor = '190'

export default {
  header: {
    height: '3rem',
  },
  colors: {
    primary: `hsl(${hueColor}, 64%, 22%)`,
    secondary: `hsl(${hueColor}, 64%, 22%)`,
    primaryAlt: `hsl(${hueColor}, 64%, 15%)`,
    title: `hsl(${hueColor}, 64%, 18%)`,
    text: `hsl(${hueColor}, 24%, 35%)`,
    textLight: `hsl(${hueColor}, 8%, 60%)`,
    input: `hsl(${hueColor}, 24%, 97%)`,
    body: `hsl(${hueColor}, 100%, 99%)`,
    white: '#fff',
    black: '#000',
    scrollBar: `hsl(${hueColor}, 12%, 90%)`,
    scrollBarThumb: `hsl(${hueColor}, 12%, 75%)`,
    overlayShadow:
      'linear-gradient(180deg,rgba(2,0,36,0) 0%,rgba(20,80,92,0.7) 50%,hsl(190deg 100% 16%) 100%)',
    overlayShadowStrong:
      'linear-gradient(180deg,rgba(2,0,36,0) 0%,rgb(0 73 87 / 70%) 50%,hsl(190deg 100% 10%) 100%)',
  },

  grid: {
    container: '120rem',
    gutter: '1.6rem',
  },

  border: {
    radius: {
      r8: '.8rem',
      r16: '1.6rem',
    },
  },

  font: {
    family: {
      bodyFont: 'Open Sans, sans-serif;',
      titleFont: 'Raleway, sans-serif',
    },
    weights: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    sizes: {
      biggestFont: '2.5rem',
      h1: '1.5rem',
      h2: '1.25rem',
      h3: '1rem',
      normal: '.938rem',
      small: '.813rem',
      smaller: '.75rem',
    },
  },

  spacings: {
    mb025: '.25rem',
    mb05: '.5rem',
    mb075: '.75rem',
    mb1: '1rem',
    mb125: '1.25rem',
    mb15: '1.5rem',
    mb2: '2rem',
    mb25: '2.5rem',
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
    fixed: 100,
  },

  image: {
    transition: '.3s',
    hidden: 'hidden',
    scale: 'scale(1.1)',
  },

  minWidth968: {
    sizes: {
      biggestFont: '4rem',
      h1: '2.25rem',
      h2: '1.75rem',
      h3: '1.25rem',
      normal: '1rem',
      small: '.875rem',
      smaller: '.813rem',
    },
  },
}
