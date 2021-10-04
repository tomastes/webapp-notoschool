





export const darkTheme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    plansBg:"#1f1b24",
    planBg:"#07070b79",
    titleBg:"#1f1b24",
    btnSubscribeBg:"#1f1b24"

  },
  boxShadows:{
    boxShadow1: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}
export const whiteTheme = {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "gray",
    background1: "whitesmoke",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    backgroundwhite:"whitesmoke",
    planBg:"white",
    titleBg:"whitesmoke",
    btnSubscribeBg:"whitesmoke"
  },
  boxShadows:{
    boxShadow1: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}


//export const theme = localStorage.getItem("mode") === "dark" ? darkTheme : whiteTheme;
