import React,{useState,useEffect,useContext} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box,Button,Grid,Typography,Stack,AppBar,Toolbar ,IconButton,Modal,Badge} from '@mui/material';
import logo from '../assets/Cube.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Cart from '../pages/Cart'
import CartContext from '../context/CartContext'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import {
  Link,
  useNavigate
} from "react-router-dom";


const headButton={
    fontSize:20,
    color:'primary.light',
    
    // fontWeight:700,
  }
  const menuHead={
    fontSize:40,
    color:'primary.light',
    '&:hover':{
      color:'primary.main',
      backgroundColor:'primary.light'
    }
    // fontFamily:'Edu VIC WA NT Beginner',
    // fontWeight:700,
  }
let menuButton={
    color:'primary.light',
    fontSize:{xs:24,sm:24,md:24}
}

const menuStyle = {
    position: 'absolute',
    width: {xs:'100%',md:'30%'},
    height: '100%',
    backgroundColor: 'primary.main',
    
    justifyContent:'center',
    alignItems:'flex-start',
    // paddingTop:24,
    // display: 'flex',
    marginBottom:12
   
  };
  const cartStyle = {
    position: 'absolute',
    right:'0%',
    width: {xs:'100%',sm:'50%',lg:'30%',xl:'25%'},
    height: '100%',
    backgroundColor:'#eee'
    
   
  };
  

  
 
const Header = (
    {homePage,aboutPage,shopPage}
    ) => {
    let [menuOpen,setMenuOpen]=useState(false)
    let [cartOpen,setCartOpen]=useState(false)
    let [count,setCount]=useState(1)
    let {cart,cartCount}=useContext(CartContext)
    let navigate = useNavigate()


    
    useEffect(() => {
      setCount(cartCount())
  }, [cart])


  return (
    // #ddd9ce
    <AppBar position="sticky" sx={{
        boxShadow:2,
       
        // backgroundColor:'#71857d',
        backgroundColor:'primary.main',
        // paddingX:0
        }}>
         
        <Toolbar sx={{ my:{xs:0,lg:0},paddingX:{xs:1,sm:2},boxShadow:0}}>
        <Grid container display="flex" width='100%'>

          <Grid container item xs={2} md={4} justifyContent="flex-start">
            <Stack gap={4} justifyContent='flex-end' sx={{flexDirection:'row',display:{xs:'none',lg:'flex'}}}>
            <Button sx={headButton} onClick={homePage}>Home</Button>
              <Button sx={headButton} onClick={aboutPage}>About</Button>
              
              <Button sx={headButton}   onClick={shopPage}>Shop</Button>
              
            </Stack>
            <IconButton sx={{display:{xs:menuOpen?'none':'flex',lg:'none'}}}onClick={()=>{setMenuOpen(!menuOpen)}}>
                {menuOpen?<CloseIcon sx={menuButton}/>:<MenuIcon sx={menuButton} />}
            </IconButton>
          </Grid>

          <Grid container item xs={8} md={4} justifyContent="center" alignItems='center'>
            
            <Box onClick={()=>{navigate('/')}}>
              <img src={logo} alt={'Cubeplec logo'} height="50px" />
            </Box>
          </Grid>


          <Grid container item xs={2} md={4} justifyContent="flex-end">
          <IconButton 
            // className="snipcart-checkout" 
              onClick={()=>{setCartOpen(true)}}
               sx={{
              marginLeft:{xs:1,sm:2,md:2},display:menuOpen?'none':'block',
              marginRight:{xs:0,md:0}}} >

                <Badge
                //  badgeContent={1} 
                 badgeContent={count} 
                 color="error" >
                  <ShoppingCartIcon sx={menuButton}/> 
                </Badge>
              
            </IconButton>
          </Grid>
        </Grid>
          
        </Toolbar>
        <Modal
        open={menuOpen}
        onClose={()=>setMenuOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        
        <Box flexDirection='column' backgroundColor= 'primary.light' sx={menuStyle}>
          <Box display='flex' justifyContent="flex-end" alignItems='flex-start' height='20vh'>
          <IconButton onClick={()=>{setMenuOpen(false)}} sx={{margin:1}}>
            <CloseIcon sx={{fontSize:40,color:'primary.light'}}/>
          </IconButton>
        </Box>
        <Box >
          <Stack 
          // sx={{position: 'absolute',top:'10%'}}
          >
          <Button  sx={{...menuHead}} onClick={()=>{setMenuOpen(false);homePage()}}>Home</Button>
            <Button sx={{...menuHead}} onClick={()=>{aboutPage();setMenuOpen(false)}}>About</Button>
            
            <Button sx={{...menuHead}}  onClick={()=>{shopPage();setMenuOpen(false)}}>Shop</Button>
            
          </Stack>
        </Box>
        </Box>
      </Modal>



      <Modal
        open={cartOpen}
        onClose={()=>setCartOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        
        <Box flexDirection='column'  backgroundColor= 'rgba(0,0,0,.4)' sx={cartStyle}>
          <Box display='flex' backgroundColor= 'primary.main'justifyContent="flex-start"  height="6vh">
            <IconButton onClick={()=>{setCartOpen(false)}} sx={{margin:1,color:'primary.light'}}>
              <ArrowBackOutlinedIcon sx={{fontSize:20,py:2}}/>
            </IconButton>
          </Box>
        <Box >
          <Cart/>
        </Box>
        </Box>
      </Modal>
      </AppBar>
  )
}

export default Header