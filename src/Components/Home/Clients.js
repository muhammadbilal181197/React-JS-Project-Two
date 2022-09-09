import { Box, Container, Button, Grid, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import "../../Styles/Home/Clients.scss";
import rebonicon from "../../Images/rebon.svg";
import group from "../../Images/group-icon.png";
import groupimg from "../../Images/group2.png";
import orangeicon from "../../Images/orange-icon.svg";
const Clients = () => {
    const Refinput1 = useRef();
    const Refinput2 = useRef();
    const Refinput3 = useRef();

    const btn1 = useRef();
    const btn2 = useRef();
    const btn3 = useRef();

    const group1 = useRef();
    const group2 = useRef();
    const group3 = useRef();

    const Handle1 = () => {
        Refinput1.current.style.display = "block";
        Refinput2.current.style.display = "none";
        Refinput3.current.style.display = "none";
        btn1.current.style.backgroundColor = "#ffffff";
        btn1.current.style.color = "#f58a07";
        btn2.current.style.backgroundColor = "#edf7ff";
        btn2.current.style.color = "rgba(6, 50, 85, 0.3)";
        btn3.current.style.backgroundColor = "#edf7ff";
        btn3.current.style.color = "rgba(6, 50, 85, 0.3)";
        group1.current.style.display="flex"
        group2.current.style.display="none"
        group3.current.style.display="none"


    };
    const Handle2 = () => {
        Refinput1.current.style.display = "none";
        Refinput2.current.style.display = "block";
        Refinput3.current.style.display = "none";
        btn2.current.style.backgroundColor = "#ffffff";
        btn2.current.style.color = "#f58a07";
        btn1.current.style.backgroundColor = "#edf7ff";
        btn1.current.style.color = "rgba(6, 50, 85, 0.3)";
        btn3.current.style.backgroundColor = "#edf7ff";
        btn3.current.style.color = "rgba(6, 50, 85, 0.3)";
        group1.current.style.display="none"
        group2.current.style.display="flex"
        group3.current.style.display="none"
    };
    const Handle3 = () => {
        Refinput1.current.style.display = "none";
        Refinput2.current.style.display = "none";
        Refinput3.current.style.display = "block";
        btn3.current.style.backgroundColor = "#ffffff";
        btn3.current.style.color = "#f58a07";
        btn1.current.style.backgroundColor = "#edf7ff";
        btn1.current.style.color = "rgba(6, 50, 85, 0.3)";
        btn2.current.style.backgroundColor = "#edf7ff";
        btn2.current.style.color = "rgba(6, 50, 85, 0.3)";
        group1.current.style.display="none"
        group2.current.style.display="none"
        group3.current.style.display="flex"
    };
    useEffect(() => {
        Refinput1.current.style.display = "block";
        Refinput2.current.style.display = "none";
        Refinput3.current.style.display = "none";
        group1.current.style.display="flex"
        group2.current.style.display="none"
        group3.current.style.display="none"
        btn1.current.style.backgroundColor = "#ffffff";
        btn1.current.style.color = "#f58a07";


    });

    return (
        <Box sx={{ mt: 10 }} className="Client">
            <Container className="Clients">
                <img src={rebonicon} alt="rebon-icon" className="rebon" />
                <Box sx={{ pt: 5, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
                    <Box>
                        <Button variant="Outlined" ref={btn1} onClick={Handle1} className="font_poppins btn1 font-size" sx={{}}>
                            Business strategy
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="Outlined" ref={btn2} onClick={Handle2} className="font_poppins btn2 font-size" sx={{ mx: 3, my: 3 }}>
                            Digitalization
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="Outlined" ref={btn3} onClick={Handle3} className="font_poppins btn3 font-size" sx={{}}>
                            Risk assessment
                        </Button>
                    </Box>
                </Box>
                <Grid container sx={{ pt: { xs: "50px"}, pb: "50px" }}>
                    <Grid itme xs={12} lg={6} ref={Refinput1}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{ pb: "3.5%" }}>
                            Helping clients with research and strategy for their business
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ pb: { lg: "6%" } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ pb: "6%" }}>
                            Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
                            <Typography variant="body2" className="font_poppins text_services">
                                See all services
                                <img src={orangeicon} alt="orange-icon-arrow" className="img-fluid" />
                            </Typography>
                        </Box>
                    </Grid>
                    {/* grid 2 */}
                    <Grid itme xs={12} lg={6} ref={Refinput2}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{ pb: "3.5%" }}>
                        Clients helping with research and strategy for their business
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ pb: { lg: "6%" } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ pb: "6%" }}>
                            Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
                            <Typography variant="body2" className="font_poppins text_services">
                                See all services
                                <img src={orangeicon} alt="orange-icon-arrow" className="img-fluid" />
                            </Typography>
                        </Box>
                    </Grid>
                    {/* grid 3 */}
                    <Grid itme xs={12} lg={6} ref={Refinput3}>
                        <Typography variant="h1" className="font_poppins text_primary" sx={{ pb: "3.5%" }}>
                            Helping clients with strategy and research for their business
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ pb: { lg: "6%" } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                        </Typography>
                        <Typography variant="body1" className="font_poppins text_secondary" sx={{ pb: "6%" }}>
                            Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
                            <Typography variant="body2" className="font_poppins text_services">
                                See all services
                                <img src={orangeicon} alt="orange-icon-arrow" className="img-fluid" />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid itme xs={12} lg={6} className="img" ref={group1}>
                        <img src={group} alt="people-group-icon" className="img-fluid2" />
                    </Grid>
                    <Grid itme xs={12} lg={6} className="img" ref={group2}>
                        <img src={groupimg} alt="people-group-icon" className="img-fluid2 img-border" />
                    </Grid>
                    <Grid itme xs={12} lg={6} className="img" ref={group3}>
                        <img src={group} alt="people-group-icon" className="img-fluid2" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Clients;
