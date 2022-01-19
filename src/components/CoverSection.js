import { 
  Box,
  Container,
  Grid,
  styled,
  Typography
} from '@mui/material'
import React from 'react'
import ImageCover from '../assets/Doctors-pana.png'

const CoverSectionBar = styled('div')({
  width: '100%',
  height: 800,
  background: {ImageCover},
  backgroundPosition: '0px 0px',
  backgroundSize: 'cover'
})


const CoverSection = () => {
  return (
    <>
    <Container>
      <Grid 
        container
        direction='row'
        spacing={2}
        justifyContent='space-between'
        alignItems='center'
        sx={{
          // mt: -14,
          pt: 4,
          mb: 4
        }}
      >
        <Grid 
          item 
          xs={12}
          xl={6}
          md={5}
          lg={5}
          sx={{
            // mt: 15
            // ml: 4
          }}
        >
          <Typography
            variant='h2'
            color="primary"
            sx={{
              fontWeight: 800
            }}
          >
            Welcome To Hospital R
          </Typography>
          <Typography variant='body2'>
          This is the example of landing page using ReactJS and Material UI
          </Typography>
        </Grid>
        <Grid
          item
          xs='auto'
          xl='auto'
          md='auto'
          lg='auto'
          // xs={12}
        >
          <Box 
            component='img'
            src={ImageCover}
            sx={{
              position: 'relative',
              zIndex: -1,
              p: 2,
              // mt: -20,
              // mt: 8,
              height: 250,
              // maxHeight: '100%',
              // width: 'auto',
              // maxHeight: '100%',
              maxWidth: '100%',
              // objectFit: 'cover',
              // boxShadow: 'inse'
              // backgroundPosition: '0px 0px',
              // backgroundSize: 'cover',
              // mr: 8,
              top: 0,
              // right: -50
            }}
          /> 
          {/* <CoverSectionBar /> */}
        </Grid>
      </Grid> 
    </Container>
    </>
  )
}

export default CoverSection
