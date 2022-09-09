import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import "../../Styles/Common/Footer.scss";
import icon1 from "../../Images/icon-left.svg";
import icon2 from "../../Images/icon-right.svg";
import logo from "../../Images/Logo-white.svg";
import facebook from "../../Images/facebook.svg";
import youtube from "../../Images/youtube.svg";
import instagram from "../../Images/instagram.svg";
import twitter from "../../Images/twitter.svg";

const Footer = () => {
    return (
        <Box className="Footer">
            <img src={icon1} alt="icon left" className="icon1" />
            <img src={icon2} alt="icon right" className="icon2" />
            <Box className="Foot" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Container sx={{ mt: {sm:"4%", xs:"5%"} , mb:"4%"}}>
                    <Grid container sx={{ pb: "6%" }}>
                        <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: { xs: "center", lg: "start" }, flexDirection: "column", pb: { xs: 8, lg: "0" } }}>
                            <Box>
                                <img src={logo} alt="brand-icon" />
                            </Box>
                            <Typography variant="h1" className="font_poppins text_primary" sx={{ my: 4 }}>
                                Bespoke software solutions
                            </Typography>
                            <Box className="footer_icon" sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                                <Box>
                                    <img src={facebook} alt="facebook icon"></img>
                                </Box>
                                <Box sx={{}}>
                                    <img src={youtube} alt="twitter icon"></img>
                                </Box>
                                <Box>
                                    <img src={instagram} alt="linkedin icon"></img>
                                </Box>
                                <Box sx={{}}>
                                    <img src={twitter} alt="tiktok icon"></img>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start"}, pb:{xs:2.5,sm:0} }}>
                            <Typography variant="h6" className="font_poppins footer_heading" sx={{ mb: { lg: "18%", xs: "8%" } }}>
                                Company
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{ mb: "8%" }}>
                                About Us
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{ mb: "8%" }}>
                                Careers
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{ mb: "8%" }}>
                                Services
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{ mb: "8%" }}>
                                Blog
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start"},pb:{xs:2.5,sm:0} }}>
                            <Typography variant="h6" className="font_poppins footer_heading" sx={{ mb: { lg: "18%", xs: "8%" } }}>
                                Connect
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{ mb: "8%" }}>
                                hi@finsweet.com
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{ mb: "8%" }}>
                                +(123) 456-7890
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={4} sx={{ display: "flex", flexDirection: "column", alignItems: {xs:"center",lg:"start"},pb:{xs:2.5,sm:0} }}>
                            <Typography variant="h6" className="font_poppins footer_heading" sx={{ mb: {lg:"10%", xs:"4%"} }}>
                                Join Newsletter
                            </Typography>
                            <Box sx={{ mb: {lg:"5%",xs:"3%"} }}>
                                <input type="text" placeholder="Type email here" className="font_poppins Input" />
                            </Box>
                            <Box>
                                <Button variant="contained" className="font_poppins btn">
                                    Subscribe
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "space-between",flexDirection:{xs:"column-reverse", lg:"row" , alignItems:"center"} }}>
                        <Box>
                            <Typography variant="body2" className="font_poppins footer_tagline">
                                © All rights reserved – Finsweet
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", pb:{lg:"0",xs:2} }}>
                            <Typography variant="body2" className="font_poppins footer_tagline" sx={{pr:{lg:10, xs:3}}}>
                                Privacy Policy
                            </Typography>
                            <Typography variant="body2" className="font_poppins footer_tagline">
                                Terms & Conditions
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
