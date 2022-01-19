import { 
  Box,
  Container,
  Grid, 
  Typography 
} from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container maxWidth>
      <Grid 
        container
        spacing={3}
        // direction='row'
      >
        <Grid
          item
          xl={6}
          md={6}
          lg={6}
        >
          <Typography variant='h4' sx={{ fontWeight: 500 }} >About Us</Typography>
          <Typography paragraph align='justify' >
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Ut quis feugiat tortor. Nulla fringilla a urna a egestas. Praesent eget blandit velit. 
            Praesent sit amet placerat nisl, gravida volutpat augue. Nulla dapibus laoreet lorem, ac dignissim urna laoreet non. 
            Cras nibh velit, ultricies ut arcu a, commodo rhoncus eros. Praesent sagittis massa nec mi facilisis suscipit. 
            Vivamus in nibh non eros molestie bibendum. Maecenas tincidunt, arcu eget blandit ultricies, nunc ligula fermentum sapien, vel mollis dui velit nec libero. 
            Praesent vitae tincidunt velit. In hac habitasse platea dictumst. Sed sollicitudin purus non tempor ornare. 
            Aenean et ipsum sed tortor semper tristique eu vitae lectus.
          </Typography>
        </Grid>
        <Grid
          item
          xl
          lg
          md
        >
          <Typography variant='h4' sx={{ fontWeight: 500 }} >Our Vision</Typography>
          <Box component='div' mb={1}>
            <Typography variant='h6'mb={1} >Our Vision</Typography>
            <ol>
              <li>
                <Typography variant='subtitle1' align='justify'>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Ut quis feugiat tortor.
              </Typography>
              </li>
              <li>
                <Typography variant='subtitle1' align='justify'>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Ut quis feugiat tortor.
              </Typography>
              </li>
              <li>
                <Typography variant='subtitle1' align='justify'>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Ut quis feugiat tortor.
              </Typography>
              </li>
            </ol>
          </Box>
          <Box component='div' mb={1} >
            <Typography variant='h6'mb={1} >Our Vision</Typography>
            <Typography variant='subtitle1' align='justify' >
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Ut quis feugiat tortor. Nulla fringilla a urna a egestas. Praesent eget blandit velit. 
              Praesent sit amet placerat nisl, gravida volutpat augue. Nulla dapibus laoreet lorem, ac dignissim urna laoreet non. 
              Cras nibh velit, ultricies ut arcu a, commodo rhoncus eros. Praesent sagittis massa nec mi facilisis suscipit. 
              Vivamus in nibh non eros molestie bibendum. Maecenas tincidunt, arcu eget blandit ultricies, nunc ligula fermentum sapien, vel mollis dui velit nec libero. 
              Praesent vitae tincidunt velit.
            </Typography>
          </Box>
        </Grid>
    </Grid>
    </Container>
  )
}

export default About
