import { Box, Container, Grid, Typography, Stack, Avatar } from "@mui/material";
import React from "react";
import "../../Styles/Home/FinSweet.scss";
import ceo from "../../Images/ceo-icon.svg";

const FinSweet = () => {
    return (
        <Box sx={{ mt: 10, mb: 10 }} className="FinSweet">
            <Container>
                <Grid container spacing={4}>
                    <Grid xs={6}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{mt:"10%"}}>
                            Finsweet was a dream to work with
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{mt:"4%", mb:"8%"}}>
                            Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }} className="tertiary_padding">
                            <Stack direction="row">
                                <Avatar alt="feedback icon boy" src={ceo} sx={{ width: 56, height: 56 }} />
                            </Stack>
                            <Box>
                                <Typography variant="h2" className="ceo_name font_poppins">
                                    Chikelu Neo
                                </Typography>
                                <Typography variant="body2" className="ceo_at font_poppins">
                                    CEO at MazeAI
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={6} className="iframe">
                        <Box sx={{}}>
                            <iframe
                                width="560"
                                height="450"
                                src="https://www.youtube.com/embed/IEHvYw51AL0"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FinSweet;
