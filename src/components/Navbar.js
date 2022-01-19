import React from 'react'
import { 
  AppBar,
  Box, 
  Button, 
  Container, 
  IconButton, 
  Toolbar,
  Typography
} from '@mui/material'
import HospitalLogo from '../assets/hospital-building.png'

const Navbar = () => {
  return (
    <Container maxWidth >
      <Box 
        sx={{ 
          flexGrow: 1  
        }}
      >
        <AppBar position='fixed'>
          <Toolbar variant='dense'>
            <IconButton
              size='large'
              edge='start'
              aria-label='logo'
              // sx={{ mr: 2 }}
            >
              <Box 
                component='img'
                sx={{
                  height: 40,
                  width: '100%'
                }}
                alt='Logo Hospital'
                src={HospitalLogo}
              />
            </IconButton>
            <Typography variant='body1' sx={{ mr : 4 }} >Hospital R</Typography>
            <Button color='inherit' >Fiture</Button>
            <Button color='inherit' >Overview</Button>
            <Button color='inherit' >Team</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
   
  )
}

export default Navbar
