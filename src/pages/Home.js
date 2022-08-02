import React from 'react'
import {Box,Typography,Button,Stack} from '@mui/material'
import mainImage from '../assets/main_image.png'
import spinImage from '../assets/spin.jpg'
import comfortImage from '../assets/comfort.jpg'
import redImage from '../assets/red.jpg'
import greenImage from '../assets/green.jpg'
import Faq from '../components/Faq'
import Video from '../components/Video'
import {
  Link,
  useNavigate
} from "react-router-dom";
// import mainImage from '../assets/plain.jpg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const bodyText={
  fontSize:{xs:16,sm:18,md:20,lg:22}
}

const headText={
  fontSize:{xs:28,sm:28,md:32,lg:40}
}



const Home = () => {
  const theme = useTheme();
  const lg_up = useMediaQuery(theme.breakpoints.up('lg'));
  const xs_only = useMediaQuery(theme.breakpoints.only('xs'));
  const sm_only = useMediaQuery(theme.breakpoints.only('sm'));
  const md_only = useMediaQuery(theme.breakpoints.only('md'));
  const md_down = useMediaQuery(theme.breakpoints.down('md'));
  const md_up = useMediaQuery(theme.breakpoints.up('md'));
  
 
   const navigate=useNavigate()
  return (
    <Box >
      <Box borderRadius={0} p={4} backgroundColor='#1c5080'  display='flex' flexDirection={{xs:'column',md:'row'}} justifyContent="center">
        
        {xs_only&&<img src={mainImage} height='300px' style={{objectFit:'contain', borderRadius:8}}/>}
        {sm_only&&<img src={mainImage} height='400px' style={{objectFit:'contain', borderRadius:8}}/>}
        {md_only&&<img src={mainImage} height='500px' style={{objectFit:'contain', borderRadius:8}}/>}
        {lg_up&&<img src={mainImage} height='600px' style={{objectFit:'contain', borderRadius:8}}/>}
        
        <Box py={4} px={{xs:4,lg:12}} >
          <Box position='relative' top="25%" left={{xs:'0%',md:'10%'}}>
          <Typography variant="h3" align="center" color="primary.light"  sx={headText}>The New Brain-Teasing Toy</Typography>
        <Typography variant="h5" align="center" color="primary.light" sx={{pt:2,...bodyText}}> text Body of text Body of text Body of textBody of textBody of textvvvv vBody of text v</Typography>
          </Box>
        
        </Box>
        
      </Box>
      <Box flexDirection={{xs:'column',md:'row'}} display="flex" p={{xs:4}}
       justifyContent={{xs:'center',md:'space-around'}} alignItems={{xs:'center',md:'flex-start'}}>
        {/* <img src={spinImage} style={{borderRadius:0,objectFit:'contain'}} height="650px" /> */}
        
        {md_down&&<Box>
          <Typography variant="h3" align="center" color="primary.dark" sx={{position:'relative',top:'30%',...headText}}>Features an intuitive design</Typography>
        </Box>}
        <Box width={{xs:'300px',sm:'400px',md:'500px',lg:'680px'}} p={4}><Video/></Box>
        {md_up&&<Box>
          <Typography variant="h3" align="center" color="primary.dark" sx={{mt:{xs:4,md:12},...headText}}>Features an intuitive design</Typography>
        </Box>}
        
      </Box>

      <Box backgroundColor='#c25953' py={2} flexDirection={{xs:'column',md:'row'}} display="flex" justifyContent='space-between' >
      <Box>
          <Typography variant="h3" align="center" color="primary.light" sx={{position:'relative',top:'35%',left:{xs:'0%',md:'60%',lg:'120%',xl:'180%'},...headText}}>Comfortable grip</Typography>
        </Box>
        <Box sx={{position:'relative',right:'0%'}} py={2} display='flex' justifyContent='flex-end'>
          {xs_only&&<img src={comfortImage} style={{borderRadius:0,objectFit:'contain' ,position:'relative',right:'0%'}} width="300px" />}
          {sm_only&&<img src={comfortImage} style={{borderRadius:0,objectFit:'contain'}} width="400px" />}
          {md_only&&<img src={comfortImage} style={{borderRadius:0,objectFit:'contain'}} width="500px" />}
          {lg_up&&<img src={comfortImage} style={{borderRadius:0,objectFit:'contain'}} width="600px" />}
        </Box>
      </Box>

      <Box  display='flex' flexDirection={{xs:'column',lg:'row'}} padding={4} gap={2} justifyContent={{xs:'center',lg:'space-evenly'}} alignItems='center'>
        {xs_only&&<Box gap={1} display='flex'>
          <img src={redImage} style={{borderRadius:0,objectFit:'contain'}} height="140px" />
          <img src={greenImage} style={{borderRadius:0,objectFit:'contain'}} height="140px" />
        </Box>}

        {sm_only&&<Box gap={4} display='flex'>
          <img src={redImage} style={{borderRadius:0,objectFit:'contain'}} height="240px" />
          <img src={greenImage} style={{borderRadius:0,objectFit:'contain'}} height="240px" />
        </Box>}

        {md_only&&<Box gap={4} display='flex'>
          <img src={redImage} style={{borderRadius:0,objectFit:'contain'}} height="340px" />
          <img src={greenImage} style={{borderRadius:0,objectFit:'contain'}} height="340px" />
        </Box>}

        {lg_up&&<Box gap={2} display='flex'>
          <img src={redImage} style={{borderRadius:0,objectFit:'contain'}} height="400px" />
          <img src={greenImage} style={{borderRadius:0,objectFit:'contain'}} height="400px" />
        </Box>}
        
        <Box justifyContent='center' display='flex' flexDirection='column' alignItems='center'>
          <Typography variant="h3" color="primary.dark" sx={headText} align='center'>Multiple colors to choose from</Typography>
          <Button variant='contained' onClick={()=>{navigate('/shop')}} sx={{m:2}}> Shop Now</Button>
        </Box>
        
        
      </Box>
      <Box p={8} px={{xs:4,lg:30}}>
        <Typography variant="h3" align="center" color="primary.dark" sx={{pb:8,...headText}}>FAQ</Typography>
        <Faq/>
      </Box>
    </Box>
  )
}

export default Home