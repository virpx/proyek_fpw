import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavbar from "../TeacherNavbar";
import { TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
export default function Addtask() {
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
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            sx={{ width: "100%", marginTop: "20px" }}
                        />
                        <Textarea
                            color="neutral"
                            disabled={false}
                            minRows={2}
                            placeholder="Description"
                            size="lg"
                            variant="outlined"
                            sx={{ width: "100%", marginTop: "20px" }}
                        />
                        <button type="button" className="btn btn-success" style={{ width: "100%", marginTop: "20px", height: "50px" }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}