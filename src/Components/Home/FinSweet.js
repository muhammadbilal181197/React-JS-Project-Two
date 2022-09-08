import { Box, Container, Grid, Typography, Stack, Avatar } from "@mui/material";
import React from "react";
import "../../Styles/Home/FinSweet.scss";
import ceo from "../../Images/ceo-icon.svg";
import videoclip from "../../Images/video.mp4";
import play from "../../Images/play.svg";

const FinSweet = () => {
    return (
        <Box sx={{ mt: 10, mb: 10 }} className="FinSweet">
            <Container>
                <Grid container>
                    <Grid xs={12} lg={6}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{ mt: { lg: "10%", xs: "0" } }}>
                            Finsweet was a dream to work with
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ mt: { lg: "4%", xs: "2%" }, mb: { lg: "8%", xs: "4%" } }}>
                            Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "start" } }} className="tertiary_padding">
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
                    <Grid xs={12} lg={6} className="iframe">
                        <Box className="video_parent" sx={{}}>
                            <video width="560" height="450" controls className="video" sx={{ borderRadius: "30px" }}>
                            <Typography variant="body1" className="font_poppins play-text">
                                Play Video
                            </Typography>
                                <source src={videoclip} />
                                <img src={play} alt="play icon" className="playicon" />
                            </video>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FinSweet;
