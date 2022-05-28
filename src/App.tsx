import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import SearchPage from './pages/Search/Search';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './global/Style';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<SearchPage movieTitle={''} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
