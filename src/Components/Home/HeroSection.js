import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../../Styles/Home/HeroSection.scss";
import icon1 from "../../Images/icon1.svg";
import icon2 from "../../Images/icon2.svg";
import icon3 from "../../Images/icon3.svg";
import main from "../../Images/main1.png";

const HeroSection = () => {
    const [State, setState] = React.useState("services_btn");
    const [State2, setState2] = React.useState("services_font");

    const Change1 = () => {
        setState("services_btn");
        setState2("services_font");
    };

    const Change2 = () => {
        setState2("services_btn");
        setState("services_font");
    };

    return (
        <Box className="hero-section">
            <Container sx={{ pt: { xs: "5%", sm: "2%" } }}>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", lg: "normal" } }}>
                            <Typography variant="h1" className="font_poppins text_primary" sx={{ my: { xs: 1.5, lg: 2 }, textAlign: { xs: "center", lg: "start" } }}>
                                Prosper with our bespoke solutions
                            </Typography>
                            <Typography variant="h2" sx={{ mb: { xs: 3, lg: 3 }, textAlign: { xs: "center", lg: "start" } }} className="font_poppins text_secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 3, lg: 5 }, flexDirection: { xs: "column", sm: "row" } }}>
                                <Button variant="contained" onClick={Change1} className={State} sx={{ mr: { sm: 3.5 }, mb: { xs: 2, sm: 0 } }}>
                                    See our services
                                </Button>
                                <Button variant="contained" onClick={Change2} className={State2}>
                                    See All Services
                                </Button>
                            </Box>
                            <Typography variant="h2" sx={{ mb: 2 }} className="text_tertiary font_poppins">
                                Worked with 100+ Companies
                            </Typography>
                            <Box sx={{ mb: { xs: "5%", lg: "10%" } }}>
                                <Grid container>
                                    <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: { xs: "center", lg: "start" } }}>
                                        <img src={icon1} alt="logo icon" />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sx={{ my: { xs: "5%", lg: "0" }, display: "flex", justifyContent: { xs: "center", lg: "start" } }}>
                                        <img src={icon2} alt="logo icon" className="icon-padding" />
                                    </Grid>
                                    <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: { xs: "center", lg: "start" } }}>
                                        <img src={icon3} alt="logo icon" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid itme xs={12} lg={6} sx={{ display: "flex", justifyContent: { xs: "center" }, alignItems: "flex-end" }}>
                        <img src={main} alt="man-icon" className="img-fluid img1" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
