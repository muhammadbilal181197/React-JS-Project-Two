import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../../Styles/Home/Energy.scss";
import girlicon from "../../Images/main-girl.png"

const Energy = () => {
    return (
        <Box className="Energy">
            <Container>
                <Grid container >
                    <Grid item xs={6.5}>
                        <Box>
                            <Typography variant="h1" className="font_poppins text_primary" sx={{mt:"18%", mb:"5%"}}>
                                The energy of a start-up combined with 30 years of experience.
                            </Typography>
                            <Typography variant="body1" className="font_poppins text_secondary" sx={{mb:"8%"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                            </Typography>
                            <Box sx={{display:"flex"}}>
                                <Box>
                                    <Typography  variant="h6" className="text_inside1 font_poppins" sx={{mb:"4%"}}>
                                        15+
                                    </Typography>
                                    <Typography variant="h2" className="text_inside2 font_poppins" sx={{mb:"3.5%"}}>
                                        Awards received
                                    </Typography>
                                    <Typography variant="body2" className="text_inside3 font_poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" className="text_inside1 font_poppins" sx={{mb:"4%"}}>
                                        500+
                                    </Typography>
                                    <Typography variant="h2" className="text_inside2 font_poppins" sx={{mb:"3.5%"}}>
                                        Clients served
                                    </Typography>
                                    <Typography variant="body2" className="text_inside3 font_poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5.5}>
                        <Box>
                            <img src={girlicon} alt="main-girl-icon"  />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Energy;
