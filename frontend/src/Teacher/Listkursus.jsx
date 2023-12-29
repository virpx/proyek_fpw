import { useEffect } from "react";
import TeacherNavbar from "./TeacherNavbar";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export default function Listkursus() {
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
                    <div id="containerdalam" style={{ width: "max-content", height: "90px", background: "" }}>
                        <button className="btn btn-danger font-white" style={{ width: "100px",marginLeft: "20px"  }} onClick={() => {
                            navigate("../")
                        }}>Back</button>
                        <p className="text-left color-black text-dark" style={{ fontSize: "30px", marginLeft: "20px" }} align='center'><b>Course List</b></p>
                        <Button variant="contained" startIcon={<AddIcon />} sx={{ width: "100%", marginLeft: "20px" }} onClick={() => {
                            navigate("add")
                        }}>
                            Add New Course
                        </Button>
                        <div style={{ width: "1115px", height: "max-content", background: "", display: "flex", flexWrap: "wrap" }}>
                            <Card sx={{ maxWidth: 345, marginLeft: "20px", marginTop: "20px" }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={()=>{
                                        navigate("edit/1")
                                    }}>Edit</Button>
                                    <Button size="small">Deactive</Button>
                                    <Button size="small" onClick={()=>{
                                        navigate("center/1")
                                    }}>Course Center</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div style={{ width: "100%", height: "50px" }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}