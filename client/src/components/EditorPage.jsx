import React from 'react'
import logo from "../assets/logo.png";
import Editor from "./Editor";

export const EditorPage = () => {
  return (
<div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Client panel */}
        <div className="col-md-2 bg-dark text-light d-flex flex-column">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid mx-auto"
            style={{ maxWidth: "150px", marginTop: "-43px" }}
          />
          <hr style={{ marginTop: "-3rem" }} />

          {/* Client list container */}
          <div className="d-flex flex-column flex-grow-1 overflow-auto">
            <span className="mb-2">Members</span>
          </div>

          <hr />
          {/* Buttons */}
          <div className="mt-auto mb-3">
            <button className="btn btn-success w-100 mb-2" >
              Copy Room ID
            </button>
            <button className="btn btn-danger w-100" >
              Leave Room
            </button>
          </div>
        </div>

        {/* Editor panel */}
        <div className="col-md-10 text-light d-flex flex-column">
          {/* Language selector */}
          <div className="bg-dark p-2 d-flex justify-content-end">
            <select
              className="form-select w-auto">
            </select>
          </div>

          <Editor
          />
        </div>
      </div>

      {/* Compiler toggle button */}
      <button
        className="btn btn-primary position-fixed bottom-0 end-0 m-3"
        style={{ zIndex: 1050 }}
      >
      </button>

      {/* Compiler section */}
      <div
        className={`bg-dark text-light p-3 `}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: isCompileWindowOpen ? "30vh" : "0",
          transition: "height 0.3s ease-in-out",
          overflowY: "auto",
          zIndex: 1040,
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="m-0"></h5>
          <div>
            <button
              className="btn btn-success me-2"
            >
            </button>
            <button className="btn btn-secondary" >
              Close
            </button>
          </div>
        </div>
        <pre className="bg-secondary p-3 rounded">
        </pre>
      </div>
    </div>  )
}
