import React from 'react'
import {Box,Grid, IconButton, Stack, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const cartText={
    fontSize:{xs:'18px', lg:'20px', xl:'22px'}
}

const CartItem = ({item,removeItem,upQuantity,downQuantity}) => {
  
    
  
    return (
    <Grid  borderRadius={0}  sx={{p:0.5,borderTop:1,borderColor:'#ccc'}} container display='flex'  flexDirection='row' justifyContent='space-between'
     py={0} px={0} my={2}>
        <Grid container alignItems='center' item xs={3.5}>
            
                <Box justifyContent='center' alignItems='center' display='flex'>
                    <img src={item.src} alt={item.title}  height='80px' width='80px' objectFit='cover'/>
                </Box>
                
        </Grid>

        

        <Grid item xs={8.5}>
        <Stack >
            <Box display='flex' justifyContent='space-between'>
            <Typography variant='h6' align='right' sx={{color:'primary.main',...cartText}}>{item.title}</Typography>
                <IconButton onClick={removeItem} sx={{color:'primary.main'}}><DeleteForeverOutlinedIcon/></IconButton>
            </Box>
            
            <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='flex-end' >
                <Box>
                    <Typography variant='h6' align='center' sx={{fontSize:{xs:'14px', lg:'16px', xl:'18px'}}}>Qty:  </Typography>
                    <Box flexDirection='row' display='flex' alignItems='center' paddingX={4}>
                    
                        <IconButton onClick={downQuantity} sx={{ml:1,color:'primary.main'}}><RemoveIcon/></IconButton>
                        <Typography variant='body1'>{item.qty}</Typography>
                        <IconButton onClick={upQuantity} sx={{color:'primary.main'}}><AddIcon/></IconButton>
                    </Box>
                </Box>
                <Typography variant='h6' sx={cartText} >{(item.referance_price*item.qty).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}</Typography>
            </Box>
        </Stack>
        </Grid>
    </Grid>
  )
}

export default CartItem