import React from 'react';
import { getsColorsFor } from './utils/color';

const Learn_1 = () => {
  const [theme, setTheme] = React.useState('dark');

  const onThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  React.useInsertionEffect(() => {
    const { color, bgColor } = getsColorsFor(theme);
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .theme-button {
        color: ${color};
        background-color: ${bgColor};
        padding: 1rem;
        border: 1px solid black;
        border-radius: 0.25rem;
        cursor: pointer;
        margin: auto;
      }
    `;

    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [theme]);

  return (
    <>
      <button onClick={onThemeChange} className="theme-button">
        Change my theme
      </button>

      <button className="theme-button">Button Demo</button>
    </>
  );
};

export default Learn_1;
