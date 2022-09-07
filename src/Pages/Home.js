import { Box } from "@mui/material";
import React from "react";
import Footer from "../Components/Common/Footer";
import NavBar from "../Components/Common/NavBar";
import Clients from "../Components/Home/Clients";
import Companies from "../Components/Home/Companies";
import Energy from "../Components/Home/Energy";
import Experience from "../Components/Home/Experience";
import FinSweet from "../Components/Home/FinSweet";
import HeroSection from "../Components/Home/HeroSection";
import News from "../Components/Home/News";
import SoftwareSolution from "../Components/Home/SoftwareSolution";

const Home = () => {
    return (
        <Box>
            <NavBar />
            <HeroSection />
            <Companies />
            <SoftwareSolution />
            <Energy />
            <Clients />
            <Experience />
            <FinSweet />
            <News />
            <Footer />
        </Box>
    );
};

export default Home;
