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
