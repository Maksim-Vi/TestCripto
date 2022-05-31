import React from 'react'
import {Container, Box, Typography, Button } from "@mui/material";
import './header_content.scss'

const Content = () => {
  return (
    <Container className='header_content_container' maxWidth="sm" >
        <Typography variant="h2" component="div" gutterBottom>The home of digital asset trading</Typography>
        <Box className='btn_container'>
            <Button className='btn_sign_up' variant="contained">Sign Up</Button>
            <Button className='btn_view_demo' variant="outlined">View Demo</Button>
        </Box>
    </Container>
  )
}

export default Content