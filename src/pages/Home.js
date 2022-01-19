import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import About from '../components/About'
import CoverSection from '../components/CoverSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
          sx={{
            mt: 8,
            px: 2
          }}
        >
          <CoverSection />
          <About />
      </Box>
      
      {/* <CoverSection />
      <About /> */}
    </>
  )
}

export default Home
