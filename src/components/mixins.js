export const fluidType = (
  viewportWidthMin,
  viewportWidthMax,
  fontSizeMin,
  fontSizeMax,
  unit
) => {
  return `
   & {
      font-size: ${fontSizeMin}${unit};

      @media screen and (min-width: ${viewportWidthMin}${unit}) {
        font-size: calc(${fontSizeMin}${unit} + (${fontSizeMax} - ${fontSizeMin}) * ((100vw - ${viewportWidthMin}${unit}) / (${viewportWidthMax} - ${viewportWidthMin})));
      }

      @media screen and (min-width: ${viewportWidthMax}${unit}) {
        font-size: ${fontSizeMax}${unit};
      }
    }
  `
}
