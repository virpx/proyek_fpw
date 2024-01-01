import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/detailcourse.css";
import authHeader from "../services/auth-header";
import { useEffect, useState } from "react";

const DetailCourse = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [course, setCourse] = useState(data.kursus[0]);
  const [teacher, setTeacher] = useState(data.teacher[0]);
  const [profile, setProfile] = useState("");
  const auth = () => {
    var header = authHeader();
    if (header == null) {
      navigate("/login");
    }
  };

  useEffect(() => {
    auth();

    var path = "";
    setProfile(path);
  }, []);
  console.log(profile);
  return (
    <>
      <Navbar />
      <div id="main-container">
        <div id="header-section">
          <h1 id="title-text">Course Detail</h1>
          <p id="subtitle-text">Explore the details of our amazing course</p>
        </div>
        <div className="content-section" id="course-overview-section">
          <h2 id="course-overview-content">Course Overview</h2>
          <p id="course-overview-content">Title: {course.nama_kursus}</p>
          <p id="course-overview-content">Price: Rp. {course.harga},00</p>
          <h3 id="course-overview-content">Material Titles:</h3>
          <ul id="course-overview-content">
            {course.materi.map((c, index) => {
              return (
                <li>
                  Material {index + 1}: {c.path}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="content-section" id="instructor-information-section">
          <h2 id="course-overview-content">Instructor Information</h2>
          <div className="instructor-profile">
            <img
              src=""
              alt="Instructor Profile"
              width={100}
              height={100}
              id="profile-image"
            />
            <div id="instructor-info-container">
              <p className="instructor-info-text">{teacher.name}</p>
              <p className="instructor-info-text">Email: {teacher.email}</p>
            </div>
          </div>
        </div>
        <div className="content-section" id="enrollment-information-section">
          <h2 id="course-overview-content">Enrollment Information</h2>
          <p id="course-overview-content">
            Ready to join?&nbsp;
            <span id="enrollment-link">Enroll now</span>
          </p>
          <p id="course-overview-content">
            Have questions? Contact us at&nbsp;
            <a href="mailto:info@example.com" id="enrollment-link">
              {teacher.email}
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailCourse;
