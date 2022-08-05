import React,{useState,useContext} from 'react'
import {Box,Typography,Button,Stack,Grid,TextField} from '@mui/material'
import plainImage from '../assets/plain.jpg'
import redImage from '../assets/red.jpg'
import greenImage from '../assets/green.jpg'
import sizeImage from '../assets/size.jpg'
import ratingImage from '../assets/rating.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartContext from '../context/CartContext'
import { productList } from '../components/productList'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const colorOption = {
    
    '&:hover':{
        backgroundColor:"#fff",
        border:2,
        borderColor:'primary.main',
    }
}

const bodyText={
    fontSize:{xs:14,sm:16,md:18,lg:20}
}

const headText={
    fontSize:{xs:20,sm:22,md:24,lg:26}
}

const qtyTxt={
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'primary.light',
    },
    '&:hover fieldset': {
      borderColor: 'primary.light',
    },
    
    '& input:valid:focus + fieldset':{
        borderColor:'primary.light'
    },
    '& .MuiFilledInput-root':{
        borderColor:"primary.light"
    }
  },
  "& .MuiInputBase-root.Mui-disabled":{
    color:"primary.dark",
    '& fieldset': {
        borderColor: 'primary.light',
      },
  },
  input:{color: 'primary.dark'}
}


const reviews=[
    {
    body:'Fun for kids from 3 till 18',
    date:'2021-04-21 05:15:45'
    },
    {
    body:'10/10 AMAZING',
    date:'2021-04-16 01:53:45'
    },
    {
    body:'Great,just like in the picture.',
    date:'2021-04-21 05:15:45'
    },
    {
    body:'Beautiful, great quality and very fast deliver. Thank you so much :-)',
    date:'2021-03-25 20:18:45'
    },

]
const Product = () => {
    let {cart,addToCart} = useContext(CartContext)
    let [displayImg,setDisplayImg]=useState(plainImage)
    let [selected,setSelected]=useState('BLUE')
    let [qty,setQty] =useState(1)

    const theme = useTheme();
    const lg_up = useMediaQuery(theme.breakpoints.up('lg'));
    const xs_only = useMediaQuery(theme.breakpoints.only('xs'));
    const sm_only = useMediaQuery(theme.breakpoints.only('sm'));
    const md_only = useMediaQuery(theme.breakpoints.only('md'));
    let colorSelect=(c)=>{
        if(c!=selected){
            setSelected(c)
            if (c=="BLUE"){
                setDisplayImg(plainImage)
            }
            else if (c=="RED"){
                setDisplayImg(redImage)
            }
            else if (c=="GREEN"){
                setDisplayImg(greenImage)
            }
        
    }
    }

    let add=()=>{
        let item
        switch(selected){
            case 'BLUE':
                item=productList[0]
                break;
                
            case 'RED':
                item=productList[1]
                break;

            case 'GREEN':
                item=productList[2]
                break;
        }
        
        addToCart(item,qty)
    }
  return (
    <Box>
    <Box  display="flex" p={{xs:2,md:8}}  gap={4} justifyContent='center' flexDirection={{xs:'column',md:'row'}}>
        
            
                <Box display="flex" justifyContent='center'>
                    {xs_only&&<img src={displayImg} width='200px'/>}
                    {sm_only&&<img src={displayImg} width='400px'/>}
                    {md_only&&<img src={displayImg} width='500px'/>}
                    {lg_up&&<img src={displayImg} width='600px'/>}
                </Box>
           

                <Box >
                    <Stack gap={1}>
                        <Typography variant="h4" color="primary.dark">The Cubeplex</Typography>
                        <Typography variant="h5" color="primary.main">$14.99</Typography>
                        <Box>
                            <Typography variant="h6" color="primary.dark">Color: {selected.toLocaleLowerCase()}</Typography>
                            <Stack direction="row" gap={1} padding={2}>
                            <Box sx={{border:selected=="RED"?2:0,borderColor:'primary.main',...colorOption}} onClick={()=>{colorSelect("RED")}}>
                                <img src={redImage} height="80" />
                            </Box>    
                            
                            <Box sx={{border:selected=="BLUE"?2:0,borderColor:'primary.main',...colorOption}} onClick={()=>{colorSelect("BLUE")}}>
                                <img src={plainImage} height="80" />
                            </Box> 

                            <Box sx={{border:selected=="GREEN"?2:0,borderColor:'primary.main',...colorOption}} onClick={()=>{colorSelect("GREEN")}}>
                                <img src={greenImage} height="80" />
                            </Box> 
                            </Stack>
                        </Box>
                        <Box>
                            <Typography variant="h6">Quantity:</Typography>
                            <Box display="flex" alignItems='center' justifyContent='space-evenly' sx={{m:2,border:2,borderColor:'primary.main',width:'160px'}}>
                                <RemoveIcon sx={{fontSize:'35px','&:hover':{color:'primary.main'}}} onClick={()=>{qty>1&&setQty(qty-1)}}/>
                                <TextField sx={{...qtyTxt,width:'50px'}} value={qty} disabled/>
                                <AddIcon  sx={{fontSize:'35px','&:hover':{color:'primary.main'}}} onClick={()=>{setQty(qty+1)}}/>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="body1" color="primary.main">Free Shipping!</Typography>
                            <Typography variant="body1" color="primary.main">We do not accept returns at this time</Typography>
                        </Box>
                        <Button sx={{m:4,mx:{xs:2,md:8,lg:12}}} variant='contained' onClick={add} >Add to cart </Button>
                    </Stack>
                    
                    
                </Box>
            
        
        
    </Box>

    <Box display='flex' alignItems={{xs:'center',lg:'flex-start'}} justifyContent={{xs:"center",lg:'space-between'}} flexDirection={{xs:"column",lg:"row"}}>
                    {xs_only&&<img src={sizeImage} width='200px' style={{objectFit:'contain'}}/>}
                    {sm_only&&<img src={sizeImage} width='400px' style={{objectFit:'contain'}}/>}
                    {md_only&&<img src={sizeImage} width='500px' style={{objectFit:'contain'}}/>}
                    {lg_up&&<img src={sizeImage} width='600px' style={{objectFit:'contain'}}/>}
        <Box px={{xs:2,sm:4,md:12}}>
            <Stack gap={2}>
               <Typography variant="h4" align="center">Details</Typography> 
               <Stack>
                    <Typography variant="h5" sx={headText}>Description:</Typography> 
                    <Typography variant="h6" sx={bodyText}>

                        This educational toy comes with ball spinning and cube rotation. This toy can train kids' hand-eye coordination, concentration, patience, strategic thinking, and problem-solving ability.
                        For kids of all sizes! The Cubeplex is a good parent-child game that will enhance your relationship with your child while allowing your children to have a good time.
                        High-quality material
                        This little magic beans toy is made of high-quality material, which is strong, drop-resistant, non-toxic, eco-friendly, and durable.
                        Relieve stress
                        If your children have huge pressure in learning, the ball spinning toy is a perfect relaxed tool. This toy can effectively relieve stress and aid relax while playing.
                        The two sides of the colored bead rotating toy are designed with protruding bumps, which can prevent slipping and can also massage children’s hands.
                    </Typography> 
                </Stack>

                <Stack>
                    <Typography variant="h5" sx={headText}>Material:</Typography> 
                    <Typography variant="h6" sx={bodyText}>
                        ABS plastic
                    </Typography> 
                </Stack>

                <Stack>
                    <Typography variant="h5" sx={headText}>Item Size:</Typography> 
                    <Typography variant="h6" sx={bodyText}>11*10 cm/4.32*3.93inch(L*W)
                    </Typography> 
                </Stack>
            </Stack>
            
        </Box>
    </Box>

    <Box sx={{border:1,m:8,mx:{xs:2,sm:4,md:16,lg:40}}}>
        <Stack>
            <Typography variant="h5" sx={{py:4,px:4}}>Customer Reviews</Typography>
            {reviews.map((r,i)=>(
                <Box sx={{borderTop:1,mx:{xs:2,lg:4},p:2}} key={i}>
                <Stack gap={1}>
                    <img src={ratingImage} width="64px" style={{padding:4}}/>      
                    <Typography variant="body1" >{r.body}</Typography>
                    <Typography variant="subtitle2" >{r.date}</Typography>
                </Stack>
            </Box>
            ))}

            
        </Stack>
    </Box>
    </Box>
  )
}

export default Product