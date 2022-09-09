import { Box, Container, Grid, Typography, Stack, Avatar } from "@mui/material";
import React, { useRef, useEffect } from "react";
import "../../Styles/Home/FinSweet.scss";
import ceo from "../../Images/ceo-icon.svg";
import videoclip from "../../Images/video.mp4";
import play from "../../Images/play.svg";
import pause from "../../Images/pause.png";

const FinSweet = () => {
    const VideoInput = useRef();
    const PlayInput = useRef();
    const PauseInput = useRef();
    const playtext = useRef();
    const pausetext = useRef();

    const PlayVideo = () => {
        VideoInput.current.play();
        PlayInput.current.style.display = "none";
        PauseInput.current.style.display = "block";
        playtext.current.style.display="none"
        pausetext.current.style.display="block"
    };
    const PauseVideo = () => {
        VideoInput.current.pause();
        PlayInput.current.style.display = "block";
        PauseInput.current.style.display = "none";
        playtext.current.style.display="block"
        pausetext.current.style.display="none"
    };

    useEffect(() => {
        PlayInput.current.style.display = "block";
        PauseInput.current.style.display = "none";
        playtext.current.style.display="block"
        pausetext.current.style.display="none"
        
    });

    return (
        <Box sx={{ mt: { lg: 10, xs: 5 } }} className="FinSweet">
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
                    <Grid xs={12} lg={6} className="videoPlayer">
                        <Box className="position" sx={{ display: "flex", alignItems: "center" }}>
                            <img src={play} ref={PlayInput} alt="play-icon" className="playicon" onClick={PlayVideo} />
                            <img src={pause} ref={PauseInput} alt="play-icon" className="pauseicon" onClick={PauseVideo} />
                            <Typography variant="body2" className="video-text font_poppins" ref={playtext} sx={{ pl: 2 }}>
                                Play
                            </Typography>
                            <Typography variant="body2" className="video-text font_poppins" ref={pausetext} sx={{ pl: 2 }}>
                                Pause
                            </Typography>
                        </Box>
                        <Box className="video_parent" sx={{}}>
                            <video ref={VideoInput} className="video" >
                                <source src={videoclip} />
                            </video>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FinSweet;
