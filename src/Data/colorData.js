export const AvatarColor = {
  A: "#3498db",
  B: "#2ecc71",
  C: "#e74cf2",
  D: "#f39c12",
  E: "#9b59b6",
  F: "#1abc9c",
  G: "#d35400",
  H: "#2980b9",
  I: "#8e44ad",
  J: "#27ae60",
  K: "#c0392b",
  L: "#16a085",
  M: "#d35400",
  N: "#c0392b",
  O: "#f39c12",
  P: "#9b59b6",
  Q: "#1abc9c",
  R: "#e74c3c",
  S: "#3498db",
  T: "#2ecc71",
  U: "#8e44ad",
  V: "#2980b9",
  W: "#27ae60",
  X: "#16a085",
  Y: "#d354ff",
  Z: "#f39c12",
};

const currentTheme = "light";

const ThemeColor = {
  light: {
    primaryBackground: "#fff",
    primaryText: "#222",
    secondaryText: "#fff",
    websiteTheme: "#ffbcac",
    websiteGradient: "linear-gradient(to right, #bc4e9c, #f80759)",
    success: "#27ae60",
    danger: "#e74c3c",
    buttonColor: "#33475b",
    buttonHoverColor: "rgba(51, 71, 91,0.8)",
    linkColor: "#3498db",
    inputFieldBackground: "#f0f0f0",
    graphBorderColor: "#f80759",
    graphBackgroundColor: "#bc4e9c",
  },
};

export const theme = ThemeColor[currentTheme];
