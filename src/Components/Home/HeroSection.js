import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../../Styles/Home/HeroSection.scss";
import icon1 from "../../Images/icon1.svg";
import icon2 from "../../Images/icon2.svg";
import icon3 from "../../Images/icon3.svg";
import main from "../../Images/main1.png";

const HeroSection = () => {
    return (
        <Box className="hero-section">
            <Container sx={{ pt: "4%" }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant="h1" sx={{ my: 4 }} className="font_poppins text_primary">
                                Prosper with our bespoke solutions
                            </Typography>
                            <Typography variant="h2" sx={{ mb: 5 }} className="font_poppins text_secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 7 }}>
                                <Button variant="contained" className="font_poppins services_btn" sx={{ mr: 3.5 }}>
                                    See our services
                                </Button>
                                <Typography variant="h2" className="font_poppins services_font">
                                    See All Services{" "}
                                </Typography>
                            </Box>
                            <Typography variant="h2" sx={{ mb: 3 }} className="text_tertiary font_poppins">
                                Worked with 100+ Companies
                            </Typography>
                            <Box>
                                <img src={icon1} alt="logo icon" />
                                <img src={icon2} alt="logo icon" className="icon-padding" />
                                <img src={icon3} alt="logo icon" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid itme xs={6} >
                        <img src={main} alt="man-icon" className="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
