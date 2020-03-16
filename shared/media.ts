const sizes = {
  mobile: '480px',
  tablet: '840px',
  laptop: '1072px',
  desktop: '1440px',
};

const devices = {
  notMobile: `(min-width: ${sizes.mobile})`,
  mobileOnly: `(max-width: ${sizes.mobile})`,
  notTablet: `(min-width: ${sizes.tablet})`,
  tabletOnly: `(max-width: ${sizes.tablet})`,
  notLaptop: `(min-width: ${sizes.laptop})`,
  laptopOnly: `(max-width: ${sizes.laptop})`,
  notDesktop: `(min-width: ${sizes.desktop})`,
  desktopOnly: `(max-width: ${sizes.desktop})`,
};

export default devices;
