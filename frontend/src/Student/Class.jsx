import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/class.css";

const Class = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    // Handle logic to move to the previous page
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div id="sidebar">
          <div>Material</div>
          <div>Quiz</div>
          <div>Report</div>
          <div
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("storedTime");
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>

        <div id="content">
          <h1>Judul Kursus</h1>
          {currentPage === 1 && <div>Materi pada halaman 1</div>}
          {currentPage === 2 && <div>Materi pada halaman 2</div>}
          {currentPage === 3 && <div>Materi pada halaman 3</div>}

          <div className="button-container">
            <button
              className={`button orange-button`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={`button orange-button`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
