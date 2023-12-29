import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export default function TeacherNavbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#1A2138" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        height: "50px"
                    }}>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: "auto",
                                ml: "auto",
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
        </>
    )
}