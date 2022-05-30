import { Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Home from './pages/Home/Home';
import Related from './pages/Related/Related';
import SearchPage from './pages/Search/Search';
import LastViewed from './pages/LastViewed/LastViewed';

import Navbar from './components/Navbar/Navbar';

import { theme } from './global/Style';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchPage movieTitle={''} />} />
        <Route path="related" element={<Related movieTitle={''} />} />
        <Route path="lastviewed" element={<LastViewed />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
