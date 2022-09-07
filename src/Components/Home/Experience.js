import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import "../../Styles/Home/Experience.scss";
import experience from "../../Images/experience.svg";

const Experience = () => {
    return (
        <Box className="Experience ">
            <Grid container>
                <Grid item xs={6}>
                    <Box>
                        <img src={experience} alt="icon" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className="bg-orange" sx={{pl:13}}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{ pb: "4%" }}>
                            Energy of a start-up combined with 30 years of experience.
                        </Typography>
                        <Box>
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
