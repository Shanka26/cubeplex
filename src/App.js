import React,{useState} from 'react'
import { Box } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {CartProvider} from './context/CartContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary:{
      light:'#fff',
      main:'#1c5080',
      dark:'#333'
    }
  },
  typography:{
    fontFamily:'Nunito',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box backgroundColor='primary.light' display='flex' flexDirection='column'>
      <Router>
        <CartProvider>
          <Header/>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/shop" element={<Product/>}/>
          {/* <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/contact" element={<Contact/>}/> */}
          </Routes>
          <Footer/>
        </CartProvider>
    </Router>
    
    </Box>
    </ThemeProvider>
  );
}

export default App;
