import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material';
import {
  HashRouter as Router,
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
import Slide from '@mui/material/Slide';


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
  let[page,setPage]=useState(<Home shopPage={()=>{changePage('shop')}}/>)
  let[checked,setChecked]=useState(true)
  const [direction, setDirection] = React.useState('left');

  let renderPage=(p)=>{
    switch(p){
      case 'shop':
        setPage(<Product/>)
        break;
      case 'about':
        setPage(<About/>)
        break;
      default:
        setPage(<Home shopPage={()=>{changePage('shop')}}/>)
        break;

    }

  }

  useEffect(() => {
    
    
  },[page])

  let changePage = (p) => {
    if(page!=p){
    setChecked(false) 
    setDirection('right')
    setTimeout(()=>{
      setChecked(true)
      window.scrollTo(0, 0)
      renderPage(p)
      setDirection('left')
    },300)
  }
  }

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
    <Box backgroundColor='primary.light' display='flex' flexDirection='column'>
      {/* <Router> */}
        
          <Header homePage={()=>{changePage('home')}} aboutPage={()=>{changePage('about')}} shopPage={()=>{changePage('shop')}}/>
          {/* <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/shop" element={<Product/>}/>
          
          </Routes> */}
          
          <Slide direction={direction} in={checked} mountOnEnter 
      //     onEntered={() => setDirection('right')}
      // onExited={() => setDirection('left')}
      >
            <Box>{page}</Box>
          
        </Slide>
          <Footer homePage={()=>{changePage('home')}} aboutPage={()=>{changePage('about')}} shopPage={()=>{changePage('shop')}}/>
        
    {/* </Router> */}
    
    </Box>
    </CartProvider>
    </ThemeProvider>
  );
}

export default App;
