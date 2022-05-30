import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SearchPage from './pages/Search/Search';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './global/Style';
import CssBaseline from '@mui/material/CssBaseline';
import Related from './pages/Related/Related';
import LastViewed from './pages/LastViewed/LastViewed';

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
