import {React} from 'react';
import './App.css';
import ScanLayout from  './layout/ScanLayout'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar />
      </AppBar>
      <ScanLayout />
    </>
  );
}

export default App;
