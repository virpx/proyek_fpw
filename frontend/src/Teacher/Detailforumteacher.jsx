import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavbar from "./TeacherNavbar";

export default function Detailforumteacher() {
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
                    <div id="containerdalam" style={{ width: "96%", height: "90px", background: "" }}>
                        <button className="btn btn-danger font-white" style={{ width: "100px", marginLeft: "20px" }} onClick={() => {
                            navigate("../")
                        }}>Back</button>
                        <br></br>
                        <br></br>
                        <fieldset style={{ marginLeft: "20px", marginTop: "15px" }}>
                            <p style={{ fontSize: "18px", color: "black", marginLeft: "10px", marginTop: "-20px", background: "white", width: "max-content" }}>Add Answer</p>
                            <textarea className="form-control" rows="3" placeholder="Your answer..."></textarea>
                            <br></br>
                            <button style={{ width: "100%", height: "45px" }} className="btn btn-success">Send</button>
                        </fieldset>
                        <br></br>
                        <br></br>
                        <p className="text-left color-black text-dark" style={{ fontSize: "30px", marginLeft: "20px" }} align='center'><b>List Answer</b></p>
                        <table className="table" style={{ marginLeft: "20px" }}>
                            <thead className="thead-dark">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Answer</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>Apa itu ReactJS</td>
                                    <td className="link-primary link-opacity-100" onClick={() => {
                                        
                                    }}>
                                        <a style={{ cursor: "pointer" }}>Highlight</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:"-4px"}} width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                                        </svg>
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