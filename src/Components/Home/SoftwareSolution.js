import { Box, Typography, Container, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import "../../Styles/Home/SoftwareSolution.scss";
import icon1 from "../../Images/cube-icon.svg";
import icon2 from "../../Images/star-icon.svg";
import icon3 from "../../Images/heart-icon.svg";

const card = [
    {
        icon: icon1,
        heading: "Invoicing",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
    {
        icon: icon2,
        heading: "Support",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
    {
        icon: icon3,
        heading: "Surveying",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
];

const SoftwareSolution = () => {
    return (
        <Box className="Software" sx={{ mt:{ md:10, xs:5}, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Container sx={{my:"5%"}}>
                <Grid container>
                    <Grid item xs={12} md={6.5}>
                        <Typography variant="h2" className="font_poppins text_primary" sx={{ mb: {xs:2,md:3} }}>
                            We are building software solution that solves your business challenges
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5.5}>
                        <Typography variant="body1" className="font_poppins text_secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{ pt: 5 }}>
                    {card.map((value) => (
                        <Grid  item xs={12} md={4}>
                            <Card sx={{}} className="card">
                                <CardActionArea>
                                    <CardContent className="card-content">
                                        <img src={value.icon} alt="icon" className="img-fluid" />
                                        <Typography gutterBottom variant="h5" component="div" className="card_heading font_poppins">
                                            {value.heading}
                                        </Typography>
                                        <Typography variant="body2" className="card_tagline font_poppins">
                                            {value.tagline}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SoftwareSolution;
