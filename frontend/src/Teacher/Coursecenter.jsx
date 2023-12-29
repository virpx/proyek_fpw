import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavbar from "./TeacherNavbar";

export default function Coursecenter() {
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
                        <p className="text-left color-black text-dark" style={{ fontSize: "30px", marginLeft: "20px" }} align='center'><b>Topics</b>
                            <svg onClick={
                                ()=>{
                                    navigate("addtopic")
                                }
                            } style={{ cursor: "pointer", marginLeft: "10px", marginTop: "-5px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </p>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>No</th>
                                    <th style={{minWidth:"80%"}}>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>
                                        <a style={{ cursor: "pointer" }} className="link-primary link-opacity-100">Edit</a>
                                        <a style={{ cursor: "pointer",marginLeft:"5px" }} className="link-danger link-opacity-100">Remove</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-left color-black text-dark" style={{ fontSize: "30px", marginLeft: "20px" }} align='center'><b>List Quiz</b>
                            <svg onClick={
                                ()=>{
                                    navigate("addquiz")
                                } } style={{ cursor: "pointer", marginLeft: "10px", marginTop: "-5px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </p>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>No</th>
                                    <th style={{minWidth:"80%"}}>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>
                                        <a style={{ cursor: "pointer" }} className="link-primary link-opacity-100">Edit</a>
                                        <a style={{ cursor: "pointer",marginLeft:"5px" }} className="link-danger link-opacity-100">Remove</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-left color-black text-dark" style={{ fontSize: "30px", marginLeft: "20px" }} align='center'><b>List Task</b>
                            <svg onClick={
                                ()=>{
                                    navigate("addtask")
                                } } style={{ cursor: "pointer", marginLeft: "10px", marginTop: "-5px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </p>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>No</th>
                                    <th style={{minWidth:"80%"}}>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>
                                        <a style={{ cursor: "pointer" }} className="link-primary link-opacity-100">Edit</a>
                                        <a style={{ cursor: "pointer",marginLeft:"5px" }} className="link-danger link-opacity-100">Remove</a>
                                        <a style={{ cursor: "pointer",marginLeft:"5px" }} className="link-success link-opacity-100" onClick={()=>{
                                            navigate("task/1")
                                        }}>View Assignment</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}