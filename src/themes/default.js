const theme = {
  // Fonts, colors, etc.
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
    heading: "Arial, sans-serif",  // Added a different font for headings
    body: "Helvetica, sans-serif", // Default body font
  },

  typography: {
    h1: {
      fontFamily: "Space Grotesk, sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: "3rem",
    },
    h2: {
      fontFamily: "Space Grotesk, sans-serif",
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
    p: {
      fontFamily: "Helvetica, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },

  // Colors for layout
  colors: {
    primary1: "#854CE6",
    background1: "#222A35",
    button: "#854CE6",
    background2: "#19212C",
    text: "#C8CFD8",
    text1: "#F2F5F7",
    text2: "#626970",
    text3: "#575C66",
    footerBackground: "#00012B",
    // Added for light theme
    primaryLight: "#9A66E3", // Light variant of primary1 for light theme
    backgroundLight: "#F9F9F9", // Light background color
    textLight: "#333", // Dark text for light theme
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: 'screen and (max-width: 480px)',  // Added extra small breakpoint for very small screens
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },

  // Box Shadows for UI Elements
  shadows: {
    button: "0px 4px 6px rgba(0, 0, 0, 0.1)",  // Soft shadow for buttons
    card: "0px 8px 15px rgba(0, 0, 0, 0.2)",  // Card shadows
  },

  // Spacing units for consistent layout
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
};

export default theme;
