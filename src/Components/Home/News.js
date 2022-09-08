import { Box, Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/News.scss";
import icon1 from "../../Images/news1.svg";
import icon2 from "../../Images/news2.svg";

import icon3 from "../../Images/new3.svg";

import orangeicon from "../../Images/orange-icon.svg";

const card = [
    {
        icon: icon1,
        heading: "Why you have to digitalize in 2021",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
    {
        icon: icon2,
        heading: "Our internal process and longerm vision",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
    {
        icon: icon3,
        heading: "Helping the next generation of leaders",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
    },
];

const News = () => {
    return (
        <Box className="News" sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
            <Container sx={{my:"5%"}}>
                <Typography variant="h2" className="font_poppins text_primary" sx={{ mb:{lg: 3} }}>
                    Latest Blog & News
                </Typography>

                <Grid container spacing={4} sx={{ pt: 5 }}>
                    {card.map((value) => (
                        <Grid item xs={12} md={4}>
                            <Card sx={{}} className="card">
                                <CardActionArea>
                                    <CardMedia component="img" image={value.icon} alt="card-icon" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h1" component="div" className="card_heading font_poppins" sx={{textAlign:{xs:"center", sm:"start"}}}>
                                            {value.heading}
                                        </Typography>
                                        <Typography variant="body2" className="card_tagline font_poppins" sx={{textAlign:{xs:"center", sm:"start"}}}>
                                            {value.tagline}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="card-action">
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

export default News;
