import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; 
import { ToggleButton } from '../toggle/ToggleStyles';

const Toggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </ToggleButton>
  );
};

export default Toggle;
