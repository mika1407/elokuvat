import React from 'react';
// Komponentit , Components
import Header from './components/Header';

//tyylit styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
