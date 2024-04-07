const currentTheme = "light";

const fontFamily = {
  fontFamily: "Segoe UI",
};
const bold = {
  ...fontFamily,
  fontWeight: "600",
};

const light = {
  ...fontFamily,
};

export const webFontSize = {
  boldHeading: {
    ...bold,
    fontSize: `50px`,
  },
  boldSubHeading: {
    ...bold,
    fontSize: `22px`,
  },
  boldDescription: {
    ...bold,
    fontSize: `16px`,
  },
  lightHeading: {
    ...light,
    fontSize: "50px",
  },
  lightSubHeading: {
    ...light,
    fontSize: `22px`,
  },
  lightDescription: {
    ...light,
    fontSize: `16px`,
  },
};

// const theme = "#f86f03";
const theme = "#000";

const themeHover = "#f86f99";

const ThemeColor = {
  light: {
    primaryBackground: "#FFFFFF",
    websiteTheme: theme,
    primaryText: "#000",
    secondaryText: "#000",
    success: "#27ae60",
    danger: "#e74c3c",
    buttonColor: theme,
    buttonHoverColor: themeHover,
    linkColor: "#3498db",
    inputFieldBackground: "#f0f0f0",
    inputFieldText: "#333333",
  },
};

export const themeColor = ThemeColor[currentTheme];
