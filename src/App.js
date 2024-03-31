import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import StyleContext from './context/StyleContext';
import { useContext } from 'react';
import Body from './components/Body';

function App() {
  const theme = useContext(StyleContext);

  return (
    <div className="App">
      <StyleContext.Provider value={theme.style}>
        <Header />
        <Body />
      </StyleContext.Provider>
    </div>
  );
}

export default App;
