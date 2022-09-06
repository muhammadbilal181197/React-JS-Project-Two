import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../Components/Common/NavBar'
import Companies from '../Components/Home/Companies'
import HeroSection from '../Components/Home/HeroSection'
import SoftwareSolution from '../Components/Home/SoftwareSolution'

const Home = () => {
  return (
    <Box>
    <NavBar/>
    <HeroSection/>
    <Companies/>
    <SoftwareSolution/>
    </Box>
  )
}

export default Home