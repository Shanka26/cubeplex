import React from 'react'
import { Box,Button,Typography,Link,Stack,AppBar,Toolbar ,IconButton,Modal} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import {

    useNavigate
  } from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate()
    
  return (
    <AppBar  sx={{
        position:"relative",
        
        boxShadow:0,
        backgroundColor:'primary.main'}}>
        <Toolbar sx={{ my:{xs:4,lg:2},justifyContent: 'space-between', boxShadow:0,padding:2}}>
       
            <Box  display='flex' flexDirection='column' gap={1} width='100%' alignItems='center' justifyContent='center' >
                <Box display='flex' width='100%' paddingBottom={2} justifyContent='space-between' >
                    <Box>
                        <Stack>
                            <Typography variant='h5'
                                sx={{fontSize:{xs:20,md:28},fontFamily:'Edu VIC WA NT Beginner'}}>
                                    ShenPop Fluid Art Creations
                            </Typography>
                            <Stack direction='row' gap={2} justifyContent='center' padding={1}>
                                <Typography variant='subtitle1' onClick={()=>{navigate('/about')}} sx={{color:'#eee'}}>About</Typography>
                                <Typography variant='subtitle1' onClick={()=>{navigate('/shop')}} sx={{color:'#eee'}}>Shop</Typography>
                                <Typography variant='subtitle1' onClick={()=>{navigate('/contact')}} sx={{color:'#eee'}}>Contact</Typography>
                                
                            </Stack>
                        </Stack>
                    </Box>

                    <Box>
                        <IconButton>
                            <FacebookIcon sx={{color: 'white',fontSize:32}}/>
                        </IconButton>

                        <IconButton>
                            <InstagramIcon sx={{color: 'white',fontSize:32}}/>
                        </IconButton>

                        <IconButton>
                            
                        </IconButton>
                    </Box>
                </Box>

                <Box  paddingTop={4}display='flex' width='100%' justifyContent='center'>
                    <Typography>{"Copyright © "} ShenPop Fluid Art Creations</Typography>
                </Box>
                <Box  display='flex' width='100%' justifyContent='center'>
                    <Typography variant='body1' as={Link} fontSize={12} color='#eee' href='https://shanka.tech/' target='_blank'> Created by Shanka</Typography>
                </Box>
            </Box>
            
          
        </Toolbar>
       
      </AppBar>
  )
}

export default Footer