import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/course.css";

const Courses = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [courses, setCourses] = useState([
    {
      name: "mat",
      price: 49.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-01",
    },
    {
      name: "koding",
      price: 1.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-02",
    },
    {
      name: "koding",
      price: 1.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-02",
    },
    {
      name: "koding",
      price: 1.99,
      teacher: "John Doe",
      description: "Lorem ipsum...",
      date: "2023-01-02",
    },
  ]);

  const filteredAndSortedCourses = courses
    .filter((course) =>
      course.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-highest":
          return b.price - a.price;
        case "price-lowest":
          return a.price - b.price;
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
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
            <option value="">Sort by</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-highest">Highest Price</option>
            <option value="price-lowest">Lowest Price</option>
          </select>
        </div>
      </div>

      <div className="course-container">
        {filteredAndSortedCourses.map((course, index) => (
          <div key={course.name} className="course-card">
            <div className="course-card-text">
              <h2>{course.name}</h2>
              <p>Price: ${course.price.toFixed(2)}</p>
              <p>Teacher: {course.teacher}</p>
              <p>{course.description}</p>
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
