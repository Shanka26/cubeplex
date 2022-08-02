import { Box,Paper, Typography,Grid } from '@mui/material'
import React from 'react'
import spinImage from '../assets/spin.jpg'
import funIcon from '../assets/happy-icon.svg'
import relaxIcon from '../assets/face-massage-icon.svg'
import brainIcon from '../assets/ideas-icon.svg'
import safeIcon from '../assets/protect-icon.svg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const featureStyle = {
    width: '140px',
    height: '140px',
    boxShadow:4,
    display: 'flex',
    justifyContent: 'center',
    borderRadius:12,
    flexDirection:'column',
    padding:4,
    margin:4,
}
const textStyle = {
    color:'primary.main',
    pt:2,
    fontSize:'18px'
}
const About = () => {

    const theme = useTheme();
    const md_up = useMediaQuery(theme.breakpoints.up('md'));
    const xs_only = useMediaQuery(theme.breakpoints.only('xs'));
    const sm_only = useMediaQuery(theme.breakpoints.only('sm'));
    
  return (
    <Box display='flex' flexDirection={{xs:'column',lg:'row'}} justifyContent={{xs:"center",lg:'space-around'}} p={{xs:2,md:8}}>
        <Box display='flex' justifyContent='center'><img src={spinImage} height={md_up?"650px":(xs_only?"310px":"500px")} /></Box>

        <Box display='flex' >
            
            <Grid container justifyContent='center'>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant='h4' sx={{py:4}} align='center'>Enjoy exercising your brain</Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: {xs:'center',md:'flex-end'},alignItems:'flex-end'}}>
                    <Box sx={{...featureStyle}}>
                        <img src={funIcon} height="64px"/>
                        <Typography align='center'sx={textStyle}>Lots of fun</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: {xs:'center',md:'flex-start'},alignItems:'flex-end'}}>
                    <Box sx={{...featureStyle}}>
                        <img src={relaxIcon} height="64px"/>
                        <Typography align='center'sx={textStyle}>Stress relieving</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: {xs:'center',md:'flex-end'},alignItems:'flex-start'}}>
                    <Box sx={{...featureStyle}}>
                        <img src={brainIcon} height="64px"/>
                        <Typography  variant='body1' align='center'sx={textStyle}>Encourages problem solving</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: {xs:'center',md:'flex-start'},alignItems:'flex-start'}}>
                    <Box sx={{...featureStyle}}>
                        <img src={safeIcon} height="64px"/>
                        <Typography align='center'sx={textStyle}>Safe to play with</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        

    </Box>
  )
}

export default About