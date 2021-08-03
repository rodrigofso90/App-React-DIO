import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
          santis. Interagi no mé, cursus quis, vehicula ac nisi. Leite de
          capivaris, leite de mula manquis sem cabeça. Copo furadis é disculpa
          de bebadis, arcu quam euismod magna.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
