import React from 'react'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
)

const MainLayout = () => {
  return (
    <MainLayoutRoot>
      <Navbar />
      <Outlet />
    </MainLayoutRoot>
  )
}

export default MainLayout
