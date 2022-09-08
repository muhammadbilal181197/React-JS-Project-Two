import { Box, Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/Companies.scss";
import icon1 from "../../Images/company_logo1.svg";
import icon2 from "../../Images/company_logo2.svg";
import icon3 from "../../Images/company_logo3.svg";
import orangeicon from "../../Images/orange-icon.svg";

const card = [
    {
        icon: icon1,
        heading: "Business strategy",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
    {
        icon: icon2,
        heading: "Digitalization",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
    {
        icon: icon3,
        heading: "Risk assessment",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
];

const Companies = () => {
    return (
        <Box className="Companies" sx={{ mt:{xs:5 ,lg:10}, mb: 10 }}>
            <Container>
                <Typography variant="h2" className="font_poppins text_primary" sx={{ mb: {xs:2,md:3} }}>
                    We help more than 1500 companies from all sectors
                </Typography>
                <Typography variant="h3" className="font_poppins text_secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                </Typography>

                <Grid container spacing={4} sx={{ pt: 5 }}>
                    {card.map((value) => (
                        <Grid item xs={12} md={4}>
                            <Card sx={{}} className="card">
                                <CardActionArea>
                                    <CardMedia component="img" image={value.icon} alt="card-icon" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="card_heading font_poppins" sx={{textAlign:{xs:"center", sm:"start"}}}>
                                            {value.heading}
                                        </Typography>
                                        <Typography variant="body2" className="card_tagline font_poppins" sx={{textAlign:{xs:"center", sm:"start"}}}>
                                            {value.tagline}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="card-action" >
                                    <Button className="btn font_poppins" sx={{ mr: 1.5 }}>
                                        Learn More
                                    </Button>
                                    <img src={orangeicon} alt="arrow-icon" />
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Companies;
