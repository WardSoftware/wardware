import logo from './logo.svg';

import './App.css';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div>
      <MenuBar />
      <div className="App">
        
        <p style={{padding: 10}}>Great things, Coming Soon.</p>
        <img src={require("./loading.png")} className="App-logo" alt="logo" />
        <a href='https://reactjs.org' className="reactnotice">
          <p style={{padding: 15, fontSize: 20}}>
            Made with React
          </p>
          <img  src={logo} style={{height: "10vmin", padding: 10}} alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
