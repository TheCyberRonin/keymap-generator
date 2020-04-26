import React, { useState, useRef, useEffect } from "react";
import "./Upload.css";

const Upload = (props) => {
  const input = useRef(null);
  const [files, setFiles] = useState([]);
  const handleChange = e => {
    const inputFiles = e.target.files;
    const numFiles = inputFiles.length;
    let fileList = [];
    for (let i = 0; i < numFiles; i++) {
      fileList.push(inputFiles[i]);
    }
    setFiles(fileList);
  };
  const handleButton = () => {
    input.current.click();
  };
  const handleDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    input.current.onDrop(e);
  };
  useEffect(() => {
    // should probably use a prop to call stuff back from the upload
    if(files.length > 0) {
      files[0].text().then((text) => {
        props.handleJSON(text);
      });
    }
  });
  
  return (
    <>
      <div className="file-upload-wrapper">
        <button
          className="file-upload-button"
          onClick={() => handleButton()}
          onDrop={e => handleDrop(e)}
        >
          {props.text}
        </button>
        <input
          accept={props.accept}
          ref={input}
          type="file"
          multiple={props.multiple}
          name={props.name}
          onChange={e => handleChange(e)}
        />
      </div>
    </>
  );
}

export default Upload;