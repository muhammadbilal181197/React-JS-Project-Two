import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../../Styles/Home/Energy.scss";
import girlicon from "../../Images/main-girl.png"

const Energy = () => {
    return (
        <Box className="Energy">
            <Container>
                <Grid container sx={{alignItems:"flex-end"}}>
                    <Grid itme xs={12} lg={6}>
                        <Box sx={{mb:"2%"}}>
                            <Typography variant="h1" className="font_poppins text_primary" sx={{mt:{xs:"5%",lg:"18%"}, mb:{xs:2,lg:"4%"}}}>
                                The energy of a start-up combined with 30 years of experience.
                            </Typography>
                            <Typography variant="body1" className="font_poppins text_secondary" sx={{mb:{xs:"5%",lg:"7%"}}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                            </Typography>
                            <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row"}}}>
                                <Box sx={{display:"flex", alignItems:{xs:"center",md:"start"}, flexDirection:"column", mb:{xs:"4%",lg:"0"}}}>
                                    <Typography  variant="h6" className="text_inside1 font_poppins" sx={{mb:{xs:"2%",lg:"4%"}}}>
                                        15+
                                    </Typography>
                                    <Typography variant="h2" className="text_inside2 font_poppins" sx={{mb:{xs:2,lg:"3.5%"}}}>
                                        Awards received
                                    </Typography>
                                    <Typography variant="body2" className="text_inside3 font_poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",  alignItems:{xs:"center",md:"start"}, flexDirection:"column"}}>
                                    <Typography variant="h6" className="text_inside1 font_poppins" sx={{mb:{xs:"2%",lg:"4%"}}}>
                                        500+
                                    </Typography>
                                    <Typography variant="h2" className="text_inside2 font_poppins"  sx={{mb:{xs:2,lg:"3.5%"}}}>
                                        Clients served
                                    </Typography>
                                    <Typography variant="body2" className="text_inside3 font_poppins">
                                        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid itme xs={12} lg={6}>
                        <Box sx={{display:"flex", justifyContent:"center"}}>
                            <img src={girlicon} alt="main-girl-icon"  className="img-fluid"/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Energy;
