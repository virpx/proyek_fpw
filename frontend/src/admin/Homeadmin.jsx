import { AppBar, Collapse, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import StyleIcon from '@mui/icons-material/Style';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import "../css/navbar.css";
import { useState } from "react";
export default function Homeadmin() {
    const [openuser, setopenuser] = useState(false)
    return (
        <>
            <div style={{ width: "100%", height: "100vh", background: "white", display: "flex", flexDirection: "column" }}>
                <AppBar position="static" style={{ backgroundColor: "#1A2138" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    color: "inherit",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                <div style={{ color: "#F57C00" }}>INNOSPHERE</div>LEARN
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
                <div style={{ width: "100%", flexGrow: "1", maxHeight: "max-content", background: "blueviolet", display: "flex", alignItems: "" }}>
                    <div style={{ width: "max-content", background: "#343a40" }}>
                        <List sx={{ width: '100%', minWidth: 250 }} aria-label="contacts">
                            <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon style={{ color: 'white' }} ></HomeIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <StyleIcon style={{ color: 'white' }} ></StyleIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Kursus" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }}>
                                <ListItemButton onClick={() => {
                                    setopenuser(!openuser)
                                }}>
                                    <ListItemIcon>
                                        <PersonIcon style={{ color: 'white' }} ></PersonIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="User" />
                                    {openuser ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openuser} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <RemoveIcon style={{ color: 'white' }} ></RemoveIcon>
                                        </ListItemIcon>
                                        <ListItemText primary="Student" style={{marginLeft:"-20px"}}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <RemoveIcon style={{ color: 'white' }} ></RemoveIcon>
                                        </ListItemIcon>
                                        <ListItemText primary="Teacher" style={{marginLeft:"-20px"}}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItem disablePadding style={{ background: "#343a40" }} sx={{ margin: 0 }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LogoutIcon style={{ color: 'white' }} ></LogoutIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                    <div style={{ width: "200px", background: "white", flexGrow: "1" }}>

                    </div>
                </div>
            </div>
        </>
    )
}