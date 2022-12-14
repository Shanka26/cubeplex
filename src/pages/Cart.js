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
    const stripePromise = loadStripe('pk_live_51LS2bhBGz49829C1SP1jrLJNMUwyMN2M4FE0n8ZwRVZuCk2yV4eUrl0gb6ktmdZUOUeihQXE6xatYSgje90oRH4e00tYre6l3D');
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
          successUrl: 'https://cubeplex.shop',
          cancelUrl: 'https://cubeplex.shop',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          }
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
      };
  
    return (
    <Box  pb={2}  >
      <Typography variant='h5' sx={{p:2, pb:{xs:2,md:4}}}>Your Cart</Typography>
      <Box height={{xs:'80vh',md:'80vh'}} display='flex' justifyContent='space-between' flexDirection='column'>
        <Box overflow='auto'   height={{xs:.6,sm:.6,md:.70}} sx={{...scrollBar,borderBottomWidth:0,borderBottomStyle:'groove',borderColor:'#eee',mx:1}}>
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
            <Typography variant='h6' align='right' >Total: {total.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}</Typography>
            <Button variant='contained'sx={{m:2}}disabled={cart&&cart.length===0} onClick={()=>{handleClick()}} >Checkout</Button></Box>
            </Box>
    </Box>
  )
}

export default Cart