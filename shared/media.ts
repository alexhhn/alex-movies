const sizes = {
  mobile: '480px',
  tablet: '840px',
  laptop: '1072px',
  desktop: '1440px',
};

const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  mobileOnly: `(max-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  tabletOnly: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopOnly: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopOnly: `(max-width: ${sizes.desktop})`,
};

export default devices;
