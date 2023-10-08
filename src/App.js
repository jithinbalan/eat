import {React,useState} from 'react';
import './App.css';
import Scanner from './components/Scanner';
import DrawerAppBar from  './components/AppBar'
function App() {
    const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };

  return (
    <div className="App">
      <DrawerAppBar onDetected={onDetected} camera={camera} result={result}  setCamera={setCamera}/>
    </div>
  );
}

export default App;
