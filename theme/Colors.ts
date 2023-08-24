// export type ColorTheme = {
//   mainColor: string;
//   baseColor: string;
// };

// const sharedColors = {
//   black: '#000000',
//   white: '#FFFFFF',
// };


// type SharedColors = typeof sharedColors;

// export type TColors = ColorTheme & SharedColors;

// type ColorPalettes = {
//   blue: TColors;
//   purple: TColors;
//   green: TColors;
//   orange: TColors;
// };

// const Colors: ColorPalettes = {
//   blue: {
//     mainColor: '#0095ff',
//     baseColor: '#d7eeff',
//     ...sharedColors,
//   },
//   purple: {
//     mainColor: '#9000ff',
//     baseColor: '#eed9ff',
//     ...sharedColors,
//   },
//   green: {
//     mainColor: '#64bc00',
//     baseColor: '#e5ffc8',
//     ...sharedColors,
//   },
//   orange: {
//     mainColor: '#ff8400',
//     baseColor: '#ffdfbc',
//     ...sharedColors,
//   },
// };

// export default Colors;

const commonColor = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
};

const blue = {
    mainColor: '#0095ff',
    baseColor: '#d7eeff',
    ...commonColor,
};

const purple = {
    mainColor: '#9000ff',
    baseColor: '#eed9ff',
    ...commonColor,
};

const green = {
    mainColor: '#64bc00',
    baseColor: '#e5ffc8',
    ...commonColor,
};

const orange = {
    mainColor: '#ff8400',
    baseColor: '#ffdfbc',
    ...commonColor,
};

export default { blue, purple, green, orange };
