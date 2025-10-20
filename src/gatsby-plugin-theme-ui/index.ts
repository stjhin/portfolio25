import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui"
import { merge } from "theme-ui"

// Merge and override colors: dark background and white token
const override = {
  colors: {
    white: `#f7fbff`,
    background: `#f7fbff`,
    // Link color token that inverts by color mode
    link: `#000000`,
    modes: {
      dark: {
        background: `#00071b`,
        link: `#f7fbff`,
      },
    },
  },
  styles: {
    // Global anchor styles
    a: {
      color: `link`,
      textDecoration: `underline`,
      '&:hover': {
        color: `#007bff`,
      },
    },
  },
  // Ensure theme-ui Link variants inherit the inverted link color
  links: {
    primary: {
      color: `link`,
    },
    secondary: {
      color: `link`,
    },
    nav: {
      color: `link`,
    },
  },
}

const theme = merge(originalTheme, override)

export default theme
