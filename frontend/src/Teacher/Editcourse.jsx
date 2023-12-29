import { useEffect } from "react";
import TeacherNavbar from "./TeacherNavbar";
import { TextField } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useNavigate } from "react-router-dom";

export default function Editcourse() {
    const navigate = useNavigate();
    const buttonStyle = {
        width: '200px',
        height: '200px',
        padding: '10px 16px',
        borderRadius: '50%',
        fontSize: '12px',
        textAlign: 'center',
    };
    useEffect(() => {
        document.getElementById("containerutama").style.maxHeight = document.getElementById("containerutama").offsetHeight + "px"
        document.getElementById("containerdalam").style.height = "90%";
    }, [])
    return (
        <>
            <div style={{ width: "100%", height: "100vh", background: "#5840ba", display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                <TeacherNavbar></TeacherNavbar>
                <div id="containerutama" className="container d-flex justify-content-center align-items-center" style={{ overflow: "scroll", flexGrow: "1", width: "100%", background: "white", marginTop: "20px", borderRadius: "20px", display: "flex" }}>
                    <div id="containerdalam" className="container d-flex justify-content-center align-items-left" style={{ flexDirection:"column",width: "96%", height: "90px", background: "" }}>
                        <button className="btn btn-danger font-white" style={{width:"100px"}} onClick={()=>{
                            navigate('../')
                        }}>Back</button>
                        <p className="text-left color-black text-dark" style={{ fontSize: "30px", marginLeft: "20px" }} align="center"><b>Edit Course</b></p>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            sx={{ width: "100%", marginTop: "20px" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Price"
                            sx={{ width: "100%", marginTop: "20px" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Category"
                            sx={{ width: "100%", marginTop: "20px" }}
                        />
                        <p style={{ fontSize: "20px", marginTop: "15px", color: "black" }}>Thumbnail</p>
                        <input type="file" className="form-control" style={{ display: "inline", width: "100%", marginTop: "-10px" }}></input>
                        <Textarea
                            color="neutral"
                            disabled={false}
                            minRows={2}
                            placeholder="Description"
                            size="lg"
                            variant="outlined"
                            sx={{ width: "100%", marginTop: "20px" }}
                        />
                        <button type="button" className="btn btn-success" style={{ width: "100%", marginTop: "20px", height: "50px" }}>Save Course</button>
                    </div>
                </div>
            </div>
        </>
    )
}