import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import "../../Styles/Home/Experience.scss";
import experience from "../../Images/experience.svg";

const Experience = () => {
    return (
        <Box className="Experience" sx={{mt:{xs:5,lg:10}}}>
            <Grid container sx={{display:"flex", justifyContent:"center"}}>
                <Grid item xs={12} lg={6}>
                    <Box sx={{display:"flex"}}>
                        <img src={experience} alt="icon" className="img-fluid"/>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6} sx={{display:"flex"}}>
                    <Box className="bg-orange" sx={{pl:{lg:13,md:3}, my:{xs:8, lg:"0"}}}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{ pb: "4%" }}>
                            Energy of a start-up combined with 30 years of experience.
                        </Typography>
                        <Box sx={{display:'flex', justifyContent:{md:"start", xs:'center'}}}>
                            <Button variant="contained" className="font_poppins btn1" sx={{}}>
                                See Job Vacancies
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Experience;
