import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/course.css";

const Courses = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [courses, setCourses] = useState(data.kursus);

  const filteredAndSortedCourses = courses
    .filter((course) =>
      course.nama_kursus.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-highest":
          return b.harga - a.harga;
        case "price-lowest":
          return a.harga - b.harga;
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        default:
          return 0;
      }
    });

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="luarcourse">
      <Navbar />
      <div className="judulpage">Courses</div>

      <div className="search-sort-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>

        <div className="sorting-dropdown">
          <select
            value={sortBy}
            onChange={handleSortChange}
            style={{ height: "49px", width: "125px" }}
          >
            <option>Sort by</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-highest">Highest Price</option>
            <option value="price-lowest">Lowest Price</option>
          </select>
        </div>
      </div>

      <div className="course-container">
        {filteredAndSortedCourses.map((course, index) => (
          <div key={course.nama_kursus} className="course-card">
            <div className="course-card-text">
              <h2>{course.nama_kursus}</h2>
              <p>Price: ${course.harga.toFixed(2)}</p>
              {/* <p>Teacher: {course.teacher}</p> */}
              <p>{course.kategori}</p>
            </div>
            <button
              className="buy-button"
              onClick={() => {
                navigate("/course/detail");
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
