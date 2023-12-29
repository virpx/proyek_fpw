import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import TeacherNavbar from "./TeacherNavbar";
import { useNavigate } from "react-router-dom";
const chartsParams = {
    margin: { bottom: 20, left: 25, right: 5 },
    height: 300,
};
export default function Indexteacher() {
    const [color, setColor] = useState("#4e79a7")
    const navigate = useNavigate();
    useEffect(() => {
        document.getElementById("containerutama").style.maxHeight = document.getElementById("containerutama").offsetHeight + "px"
        document.getElementById("containerkanan").style.height = "100%";
    }, [])
    return (
        <>
            <div style={{ width: "100%", height: "100vh", background: "#5840ba", display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                <TeacherNavbar></TeacherNavbar>
                <div id="containerutama" className="container" style={{ flexGrow: "1", width: "100%", background: "white", marginTop: "20px", borderRadius: "20px", display: "flex" }}>
                    <div style={{ width: "500px", height: "100%", background: "" }}>
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
                    <div id="containerkanan" style={{ flexGrow: "1", height: "10px", background: "", overflow: "scroll" }}>
                        <div style={{ width: "100%", height: "330px", background: "", display: "flex" }}>
                            <div style={{ width: "300px", height: "290px", background: "white", borderRadius: "12px", paddingTop: "20px", marginTop: "30px", marginLeft: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                <div style={{ marginLeft: "auto", marginRight: "auto", width: "250px", height: "130px", backgroundImage: "url('https://i.pinimg.com/736x/0e/f0/d8/0ef0d88f468b4d68d8da02e5db11bb96.jpg')", backgroundSize: "100% 100%", borderRadius: "12px" }}>
                                    <img src="https://pbs.twimg.com/media/EGSq_kjWoAcvntn.jpg" width={100} height={100} style={{ filter: "brightness(100%)", borderRadius: "12px", marginTop: "80px", marginLeft: "20px" }}></img>
                                </div>
                                <p style={{ marginTop: "60px", marginLeft: "55px", color: "black" }}><b>Budi Setiadi</b></p>
                                <p style={{ marginTop: "-10px", marginLeft: "55px", color: "grey" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    &nbsp; Surabaya,India
                                </p>
                            </div>
                            <div style={{ flexGrow: "1", height: "290px", marginTop: "30px", background: "white", marginLeft: "20px", marginRight: "20px", borderRadius: "12px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} className="d-flex justify-content-center align-items-center">
                                <div style={{ width: "90%", height: "90%", background: "" }} className="d-flex justify-content-center align-items-center">
                                    <div style={{ width: "70px", height: "100px", background: "", cursor: "pointer" }} onClick={()=>{
                                        navigate("course")
                                    }}>
                                        <div style={{ width: "70px", height: "70px", background: "#a2d2ff", borderRadius: "12px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} className="d-flex justify-content-center align-items-center">
                                            <svg style={{ color: "black" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                            </svg>
                                        </div>
                                        <p align="center" style={{ marginTop: "10px", color: "black" }}>Course</p>
                                    </div>
                                    <div style={{ width: "70px", height: "100px", background: "", marginLeft: "20px", cursor: "pointer" }} onClick={()=>{
                                        navigate("report")
                                    }}>
                                        <div style={{ width: "70px", height: "70px", background: "#ffd6a5", borderRadius: "12px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} className="d-flex justify-content-center align-items-center">
                                            <svg style={{ color: "black" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                                                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                                            </svg>
                                        </div>
                                        <p align="center" style={{ marginTop: "10px", color: "black" }}>Report</p>
                                    </div>
                                    <div style={{ width: "70px", height: "100px", background: "", marginLeft: "20px", cursor: "pointer" }} onClick={()=>{
                                        navigate("forum")
                                    }}>
                                        <div style={{ width: "70px", height: "70px", background: "#ff9770", borderRadius: "12px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} className="d-flex justify-content-center align-items-center">
                                            <svg style={{ color: "black" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chat-right-dots" viewBox="0 0 16 16">
                                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                            </svg>
                                        </div>
                                        <p align="center" style={{ marginTop: "10px", color: "black" }}>Forum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "auto", background: "", display: "flex", marginTop: "30px" }}>
                            <div style={{ width: "50%", height: "80px", background: "rgb(162, 210, 255)", marginLeft: "30px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                <span style={{ fontSize: "20px", color: "black" }}><b>Total Student</b> </span>
                                <span style={{ fontSize: "20px", color: "black", margin: "0px" }}>50</span>
                            </div>
                            <div style={{ width: "50px" }}></div>
                            <div style={{ width: "50%", height: "80px", background: "rgb(255, 151, 112)", marginRight: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                <span style={{ fontSize: "20px", color: "black" }}><b>Total Course</b> </span>
                                <span style={{ fontSize: "20px", color: "black", margin: "0px" }}>50</span>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "auto", background: "", paddingBottom: "20px" }}>
                            <div style={{ flexGrow: "1", height: "380px", paddingBottom: "20px", background: "white", borderRadius: "12px", marginTop: "30px", marginLeft: "30px", marginRight: "20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p className="text-center color-black text-dark" style={{ fontSize: "20px", marginTop: "30px" }}><b>Grafik Penjualan Bulan Ini</b></p>
                                <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '95%' }}>
                                    <LineChart
                                        {...chartsParams}
                                        series={[
                                            {
                                                data: [15, 23, 18, 19, 13],
                                            },
                                        ]}
                                    />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}