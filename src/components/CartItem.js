import React from 'react'
import {Box,Grid, IconButton, Stack, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



const CartItem = ({item,removeItem,upQuantity,downQuantity}) => {
  
    
  
    return (
    <Grid  borderRadius={1} container display='flex' flexDirection='row' justifyContent='space-between'
     py={0} px={0} my={2}>
        <Grid item xs={6}>
            <Stack direction="row" p={2}>
                <Box justifyContent='center' pr={2} display='flex'>
                    <img src={item.src} alt={item.title}  height='80px' width='80px' objectFit='cover'/>
                </Box>
                
                <Typography variant='h6' align='right' fontFamily='Edu VIC WA NT Beginner'>{item.title}</Typography>
            </Stack>
            
        </Grid>

        

        <Grid item xs={6}>
        <Stack >
            <Box display='flex' justifyContent='flex-end'>
                <IconButton onClick={removeItem} ><DeleteForeverOutlinedIcon/></IconButton>
            </Box>
            
            <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='flex-end' pt={2} pr={2}>
                <Box>
                    <Typography variant='h6' align='center' fontFamily='Edu VIC WA NT Beginner'>Qty</Typography>
                    <Box flexDirection='row' display='flex' alignItems='center' paddingX={4}>
                        <IconButton onClick={downQuantity}><RemoveIcon/></IconButton>
                        <Typography variant='body1' fontFamily='Edu VIC WA NT Beginner'>{item.qty}</Typography>
                        <IconButton onClick={upQuantity}><AddIcon/></IconButton>
                    </Box>
                </Box>
                <Typography variant='h6' sx={{pb:1}} fontFamily='Edu VIC WA NT Beginner'>{(item.referance_price*item.qty).toLocaleString('en-US', {
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