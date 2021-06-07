import './App.css';
import React from 'react';
import Bill from './components/commons/Bill/index';
import { lightBlue, deepPurple, brown, yellow } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const darkState = true;
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? yellow[200] : lightBlue[500];
  const mainSecondaryColor = darkState ? brown['400'] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Bill />
      </div>
    </ThemeProvider>
  );
}

export default App;
