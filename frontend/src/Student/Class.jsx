import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Index/Footer";
import Navbar from "../Navbar";
import "../css/class.css";
import "../css/quiz.css";
import authHeader from "../services/auth-header";
import axios from "axios";
const host = "http://localhost:3000";
const Class = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [course, setCourse] = useState(data.kursus[0]);
  const [courseInfo, setCourseInfo] = useState();
  const materiObjects = course.materi;
  const quizObjects = course.quiz;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentBoard, setCurrentBoard] = useState("material");
  const [currentUser, setUser] = useState();
  const totalPages = materiObjects.length;
  const [quiz, setQuiz] = useState(null);

  const getCurrentCourseInfo = async () => {
    const getData = await axios.get(
      `${host}/currentCourse?id_kursus=${course._id}`,
      {
        headers: {
          "x-auth-token": authHeader()["x-access-token"],
        },
      }
    );
    setCourseInfo(getData.data.specificListKursus);
    setCurrentPage(getData.data.specificListKursus.current_index);
  };

  const getUserInfo = async () => {
    const getData = await axios.get(`${host}/activeUser`, {
      headers: {
        "x-auth-token": authHeader()["x-access-token"],
      },
    });
    setUser(getData.data.user[0]);
  };

  useEffect(() => {
    getCurrentCourseInfo();
    getUserInfo();
  }, []);

  const updateCurrentIndex = async () => {
    const updateData = await axios.put(
      `${host}/currentindex`,
      {
        id_kursus: course._id,
        current_index: currentPage,
      },
      {
        headers: {
          "x-auth-token": authHeader()["x-access-token"],
        },
      }
    );
  };

  const updateLastProgress = async () => {
    const updateData = await axios.put(
      `${host}/lastprogress`,
      {
        id_kursus: course._id,
        last_progress: currentPage,
      },
      {
        headers: {
          "x-auth-token": authHeader()["x-access-token"],
        },
      }
    );
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    updateCurrentIndex();
    updateLastProgress();
  }, [currentPage]);

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <>
      <Navbar />
      {quizObjects !== null && (
        <div>
          <div id="sidebar">
            <div
              onClick={() => {
                setCurrentBoard("material");
              }}
            >
              Material
            </div>
            <div
              onClick={() => {
                setCurrentBoard("quiz");
              }}
            >
              Quiz
            </div>
            <div
              onClick={() => {
                setCurrentBoard("report");
              }}
            >
              Report
            </div>
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

          {currentBoard == "material" && (
            <div id="content">
              <iframe
                src={materiObjects[currentPage - 1].path}
                type="application/pdf"
                width="100%"
                height="1000px"
              />
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
          )}

          {currentBoard == "quiz" && (
            <div id="content">
              {quiz == null && (
                <div>
                  <h1 style={{ marginLeft: "10px" }}>List Quiz</h1>
                  {quizObjects.map((e, index) => {
                    return (
                      <div
                        key={e.name}
                        className="course-cardM"
                        onClick={() => {
                          setQuiz(index);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="course-card-textM">
                          <h2>{e.name}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {quiz !== null && (
                <div>
                  <button
                    id="submit-btn"
                    type="button"
                    onClick={() => {
                      setQuiz(null);
                      setSelectedAnswers([]);
                    }}
                  >
                    Back
                  </button>
                  {currentUser.listkursus.map((l) => {
                    if (l.kursus === course._id) {
                      const quizScore = l.nilai_quiz.find(
                        (n) => n.name === quizObjects[quiz].name
                      );

                      if (quizScore) {
                        return (
                          <div style={{ marginLeft: "10px" }}>
                            <br></br>
                            Your Quiz Score is {quizScore.score}
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <h1 style={{ marginLeft: "10px" }}>
                              {quizObjects[quiz].name}
                            </h1>
                            {quizObjects[quiz].questions.map((q, index) => (
                              <div key={index}>
                                <p id="soal" style={{ marginLeft: "10px" }}>
                                  {index + 1}. {q.question}
                                </p>
                                {quizObjects[quiz].questions[index].answers.map(
                                  (a, answerIndex) => (
                                    <label id="jawaban" key={answerIndex}>
                                      <input
                                        type="radio"
                                        value={a.text}
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                        id="radio"
                                        checked={
                                          selectedAnswers[index] === a.text
                                        }
                                        onChange={() =>
                                          handleAnswerChange(index, a.text)
                                        }
                                      />
                                      {a.text}
                                    </label>
                                  )
                                )}
                              </div>
                            ))}
                            <button
                              id="submit-btn"
                              type="button"
                              onClick={async () => {
                                const updateData = await axios.post(
                                  `${host}/submitquiz`,
                                  {
                                    id_kursus: course._id,
                                    id_quiz: quizObjects[quiz]._id,
                                    jawaban: selectedAnswers,
                                  },
                                  {
                                    headers: {
                                      "x-auth-token":
                                        authHeader()["x-access-token"],
                                    },
                                  }
                                );
                                alert(
                                  "score: " +
                                    updateData.data.score +
                                    "/" +
                                    updateData.data.maxScore
                                );
                                setQuiz(null);
                                setSelectedAnswers([]);
                                getUserInfo();
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        );
                      }
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          )}
          {currentBoard == "report" && <div id="content">ini report</div>}
        </div>
      )}
    </>
  );
};

export default Class;
