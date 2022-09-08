import * as React from "react";
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Toolbar, Button, Grid, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Images/Logo.svg";
import "../../Styles/Common/NavBar.scss";

// const drawerWidth = 500;
const navItems = ["About Us", "Careers", "Services", "Blog", "Contact us"];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ my: 2 }}>
            <img src={logo} alt="navbar_logo" />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }} className="hidden">
                <Button variant="outlined" className="font_poppins clone_btn" sx={{ display: { xs: "block", sm: "none" } }}>
                    Clone Project
                </Button>
            </Grid>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header" sx={{ mt: 2 }}>
            <AppBar component="nav" sx={{ boxShadow: "none", backgroundColor: "white", color: "black" }}>
                <Container>
                    <Toolbar className="navbar" style={{ padding: 0 }}>
                        <Grid item xs={2}>
                            <img src={logo} alt="navbar_logo" />
                        </Grid>
                        <Grid item xs={6} sx={{ ml: "auto" }}>
                            <Box className="nav" sx={{ display: { xs: "none", md: "block" } }}>
                                {navItems.map((item) => (
                                    <Button key={item} className="font_poppins nav-items" sx={{ px: { md: 2, lg: 3 } }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" className="font_poppins clone_btn" sx={{ display: { xs: "none", sm: "block" } }}>
                                Clone Project
                            </Button>
                        </Grid>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ ml: 2, display: { md: "none" } }}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "auto",
                            height: "100vh",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;
