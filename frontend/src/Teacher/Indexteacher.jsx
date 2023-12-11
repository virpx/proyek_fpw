import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export default function Indexteacher() {
    return (
        <>
            <div style={{ width: "100%", height: "100vh", background: "#5840ba", display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
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
                <div className="container" style={{ flexGrow: "1", width: "100%", background: "white", marginTop: "20px", borderRadius: "20px",display:"flex" }}>
                    <div style={{ width: "500px",height:"100%", background: "red" }}>
                        <div style={{ width: "100%", height: "max-content", background: "", paddingTop: "30px", marginLeft: "30px" }}>
                            <p style={{ fontFamily: "arial", fontSize: "30px", color: "black" }}><b>Hello,</b> IniBudi👋</p>
                            <p style={{ fontFamily: "arial", fontSize: "15px", color: "rgb(146, 146, 146)" }}>Selamat datang, senang bertemu anda kembali!</p>
                            <div style={{ width: "100%", height: "auto", background: "" }}>
                                <p style={{ fontFamily: "arial", fontSize: "30px", color: "black" }}><b>Kursus Anda</b></p>
                                <div className="container_kategori_select" style={{ width: "90%", height: "30px", background: "", display: "flex" }}>
                                    <div className="d-flex justify-content-center align-items-center" style={{ width: "max-content", paddingLeft: "5px", cursor: "pointer", borderBottom: "2px solid #5840ba", paddingRight: "5px", height: "100%", color: "black", fontFamily: "arial", fontSize: "15px" }}>
                                        All
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center" style={{ width: "max-content", paddingLeft: "5px", cursor: "pointer", borderBottom: "2px solid white", paddingRight: "5px", height: "100%", color: "black", fontFamily: "arial", fontSize: "15px", marginLeft: "20px" }}>
                                        Design
                                    </div>
                                </div>
                                <div className="container_hasil_kategori" style={{ width: "90%", height: "max-content", background: "", marginTop: "10px" }}>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-center align-items-center" style={{ marginTop: "10px", cursor: "pointer", background: "#fef5e6", border: "none" }}>
                                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg" className="img-fluid" width={50} height={50}></img>
                                            <div style={{ flexGrow: "1", marginLeft: "20px" }}>Don Quixote</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{flexGrow:"1",height:"100%",background:"blue"}}>
                        <div style={{width:"300px",height:"400px",background:"white",borderRadius:"12px",paddingTop:"20px",marginTop:"30px",marginLeft:"30px"}}>
                            <div style={{marginLeft:"auto",marginRight:"auto",width:"250px",height:"150px",backgroundImage:"url('https://i.pinimg.com/736x/0e/f0/d8/0ef0d88f468b4d68d8da02e5db11bb96.jpg')",backgroundSize:"100% 100%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}