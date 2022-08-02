import React,{useState,useEffect,useContext} from 'react'
import {Box,Grid, Typography,Button} from '@mui/material'
import CartItem from '../components/CartItem'
import { loadStripe } from '@stripe/stripe-js';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { toUnitless } from '@mui/material/styles/cssUtils';
import CartContext from '../context/CartContext'



const scrollBar = {
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 2
    
  },
  '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0,0,0,.5)',
      
    }
}
const Cart = () => {
    const stripePromise = loadStripe('pk_test_51LS2bhBGz49829C1HtmtZBUgl7Kl9Z3tjweJtdHhiyErVKikssJp8inmYBSHr0UUImABKvtTJP9TZJ13mRUaLDC400ujwgFDN9');
    let {cart,upQty,downQty,removeItem,cartTotal}= useContext(CartContext)
    let [total,setTotal]=useState(0);
    useEffect(()=>{
        cart&&localStorage.setItem('cart',JSON.stringify(cart))
     
        setTotal(cartTotal())

        
           
      },[cart])

    

    let stripeCart=()=>{
        let stCar=[]
        cart.map((item,i)=>{
            stCar.push({
                price: item.id,
                quantity: item.qty
            })
        })
        console.table(stCar)
        return stCar;
    }
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        
        const { error } = await stripe.redirectToCheckout({
          lineItems: stripeCart(),
          mode: 'payment',
          successUrl: 'https://shenpop.netlify.app/',
          cancelUrl: 'https://shenpop.netlify.app/',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          }
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
      };
  
    return (
    <Box height={{xs:'88vh',md:'91vh'}} pb={2} >
      <Typography variant='h5' fontFamily='Edu VIC WA NT Beginner' sx={{px:2, pb:{xs:2,md:4}}}>Your Shopping Cart</Typography>
        <Box overflow='auto' height={{xs:.6,sm:.6,md:.70}} sx={{...scrollBar,borderBottomWidth:1,borderBottomStyle:'groove',borderColor:'#eee',mx:1}}>
          {cart==null?console.log('null'):console.log(cart)}
       { cart&&cart.map((item,i)=>{
         

            return (
            <CartItem item={item}
            removeItem={()=>{removeItem(item)}} 
            upQuantity={()=>{upQty(item)}} 
            downQuantity={()=>{downQty(item)}} key={i} />);

        })}
        </Box>
        <Box justifyContent='center'  display='flex' flexDirection='column' p={2}>
            <Typography variant='h6' align='right' fontFamily='Edu VIC WA NT Beginner'>Total: {total.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}</Typography>
            <Button variant='outlined'sx={{m:2}}disabled={cart&&cart.length===0} onClick={()=>{handleClick()}} >Checkout</Button></Box>
        
    </Box>
  )
}

export default Cart