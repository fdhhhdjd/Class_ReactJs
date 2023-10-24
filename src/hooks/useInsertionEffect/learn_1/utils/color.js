const getsColorsFor = (theme) => {
  const colors =
    theme === 'light' ? { color: 'black', bgColor: 'white' } : { color: 'white', bgColor: 'black' };
  return colors;
};

export { getsColorsFor };
