import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CreateQuiz = () => {
  const location = useLocation();
  const props = location.state?.props;
  const Quizid = location.state?.props.id;

  console.log("below");
  console.log(props);

  const [questions, setQuestions] = useState([
    { statement: "", options: ["", "", "", ""], answer: "" },
  ]);

  const navigate = useNavigate();

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { statement: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedQuestions = questions.map((question) => {
      const { statement, options, answer } = question;
      return {
        statement,
        option1: options[0],
        option2: options[1],
        option3: options[2],
        option4: options[3],
        answer,
      };
    });

    const lastQuestion = formattedQuestions[formattedQuestions.length - 1];

    axios
      .post(
        "https://localhost:7089/Que",
        {

          statement: lastQuestion.statement,
          option1: lastQuestion.option1,
          option2: lastQuestion.option2,
          option3: lastQuestion.option3,
          option4: lastQuestion.option4,
          answer: lastQuestion.answer


        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("DONE");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      addQuestion();
    }, 500);
  };

  const handleSub = (event) => {
    event.preventDefault();
    navigate('/Login');
  };


  const handleInputChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "options") {
      updatedQuestions[index][field][value.target.dataset.index] =
        value.target.value;
    } else {
      updatedQuestions[index][field] = value.target.value;
    }
    setQuestions(updatedQuestions);
  };

  return (
    <div
      style={{
        backgroundColor: "#ADD8E6",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {questions.map((question, index) => (
        <div
          key={index}
          style={{
            marginBottom: "30px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        >
          <h3>Question {index + 1}</h3>
          <div style={{ marginBottom: "20px" }}>
            <label>
              Statement:
              <br />
              <input
                type="text"
                value={question.statement}
                onChange={(e) => handleInputChange(index, "statement", e)}
                style={{ padding: "5px", width: "80%" }}
              />
            </label>
          </div>
          <div>
            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                style={{ display: "block", marginBottom: "10px" }}
              >
                Option {optionIndex + 1}:
                <input
                  type="text"
                  data-index={optionIndex}
                  value={option}
                  onChange={(e) => handleInputChange(index, "options", e)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px",
                    width: "80%",
                    borderBottom: "1px solid #000",
                  }}
                />
              </label>
            ))}
          </div>
          <label>
            Answer:
            <input
              type="text"
              value={question.answer}
              onChange={(e) => handleInputChange(index, "answer", e)}
              style={{ marginTop: "10px", padding: "5px", width: "80%" }}
            />
          </label>
          <br />
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px",
            backgroundColor: "#4169E1",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Add Question
        </button>
        <button
          onClick={handleSub}

          style={{
            padding: "10px",
            backgroundColor: "#4169E1",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;