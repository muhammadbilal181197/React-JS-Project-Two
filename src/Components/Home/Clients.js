import { Box, Container, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../../Styles/Home/Clients.scss";
import rebonicon from "../../Images/rebon.svg";
import group from "../../Images/group-icon.png"
import orangeicon from "../../Images/orange-icon.svg"
const Clients = () => {
    return (
        <Box sx={{ mb: 10, mt: 10 }} className="Client">
            <Container className="Clients">
                <img src={rebonicon} alt="rebon-icon" className="rebon" />
                <Box sx={{ pt: 5 }}>
                    <Button variant="contained" className="font_poppins btn1 font-size" sx={{}}>
                        Business strategy
                    </Button>
                    <Button variant="outlined" className="font_poppins btn2 font-size" sx={{ mx: 3 }}>
                        Digitalization
                    </Button>
                    <Button variant="outlined" className="font_poppins btn3 font-size" sx={{}}>
                        Risk assessment
                    </Button>
                </Box>
                <Grid container sx={{pt:"90px"}}>
                    <Grid item xs={6.5}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{pb:"3.5%"}}>
                            Helping clients with research and strategy for their business
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{pb:"6%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                            <br />
                            <br />
                            Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                        </Typography>
                        <Box>
                            <Typography variant="body2" className="font_poppins text_services">
                                See all services
                            <img src={orangeicon} alt="orange-icon-arrow" className="img-fluid"/>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5.5} className="img">
                        <img src={group} alt="people-group-icon" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Clients;
