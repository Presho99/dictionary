import React from "react";
import Definition from "./Definition";

function Select({ all, main }) {
  return (
    <>
      <div className="container-fluid px-4">
        <div className="row dark-theme">
          <div className="text-3xl font-extrabold mt-9">
            {main.word}
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            Meaning
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
