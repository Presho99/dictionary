import React from "react";
import Definition from "./Definition";

function Select({ all, main }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row dark-theme">
          <div className="col-12 text-center text-capitalize fs-1 fw-bold text-decoration-underline">
            {main.word}
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Definition all={all}/>
            </ol>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Select;
