import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const colorTheme = {
  light: {
    background: "#fff",
    "gray-50": "#f2f2f2",
    "gray-100": "#E0E0E0",
    "gray-150": "#BDBDBD",
    "gray-200": "#828282",
    "text-normal": "#4f4f4f",
    "text-strong": "#333",
    link: "#1750FF",
  },
}

const currentTheme = colorTheme.light

const defaultTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 768,
      sm: 1024,
      md: 1200,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: `'Raleway', sans-serif`,
  },
  palette: {
    gray: {
      50: currentTheme["gray-50"],
      100: currentTheme["gray-100"],
      150: currentTheme["gray-150"],
      200: currentTheme["gray-200"],
    },
    background: currentTheme["background"],
    text: {
      strong: currentTheme["text-strong"],
      normal: currentTheme["text-normal"],
    },
    link: currentTheme.link,
  },
  overrides: {
    MuiInput: {
      input: {
        borderRadius: 10,
        backgroundColor: currentTheme["gray-50"],
        height: 40,
        padding: "0 20px",
        color: currentTheme["text-normal"],
        "&::placeholder": {
          color: currentTheme["gray-150"],
          opacity: 1,
        },
      },
      inputMultiline: {
        padding: "10px 20px",
        lineHeight: 1.5
      }
    },
    MuiContainer: {
      root: {
        maxWidth: 1440,
        padding: 60,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 10,
        minWidth: 148,
        textTransform: "none",
        height: 40,
        fontSize: '1rem'
      },
      contained: {
        boxShadow: "unset",
        "&:hover": {
          boxShadow: "unset",
        },
        "&:active": {
          boxShadow: "unset",
        },
      },
    },
    MuiAccordion: {
      root: {
        boxShadow: "unset",
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: 0,
      },
    },
    MuiIcon: {
      root: {
        overflow: "visible",
        fontSize: "1.25rem",
        display: "flex",
      },
      fontSizeSmall: {
        fontSize: "1rem",
      },
      fontSizeLarge: {},
    },
    MuiNativeSelect: {
      root: {
        padding: '0 20px',
      },
      select: {
        borderRadius: 10,
        paddingRight: 'unset',
        "&:focus": {

          borderRadius: 10
        }
      },

    },
  },
})

export default defaultTheme
