import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavbar from "../TeacherNavbar";
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
export default function Viewtaskupload() {
    const navigate = useNavigate();
    useEffect(() => {
        document.getElementById("containerutama").style.maxHeight = document.getElementById("containerutama").offsetHeight + "px"
        document.getElementById("containerdalam").style.height = "90%";
    }, [])
    return (
        <>
            <div style={{ width: "100%", height: "100vh", background: "#5840ba", display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                <TeacherNavbar></TeacherNavbar>
                <div id="containerutama" className="container d-flex justify-content-center align-items-center" style={{ overflow: "scroll", flexGrow: "1", width: "100%", background: "white", marginTop: "20px", borderRadius: "20px", display: "flex" }}>
                    <div id="containerdalam" className="container" style={{ flexDirection: "column", width: "96%", height: "90px", background: "" }}>
                        <button className="btn btn-danger font-white" style={{ width: "100px" }} onClick={() => {
                            navigate('../')
                        }}>Back</button>
                        <br></br>
                        <br></br>
                        <div className="container d-flex">
                            <div className="card" style={{width: "18rem",marginRight:"20px"}}>
                                <img className="card-img-top" src="https://e1.pxfuel.com/desktop-wallpaper/263/891/desktop-wallpaper-4d-4d-keren-dinding-4d-android-4d.jpg" width={"300px"} height={"300px"} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{cursor:"pointer"}}>Card title</h5>
                                    </div>
                            </div>
                            <div className="card" style={{width: "18rem",marginRight:"20px"}}>
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format&dpr=2" width={"300px"} height={"300px"} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{cursor:"pointer"}}>Card title</h5>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}