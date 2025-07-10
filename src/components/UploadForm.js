import React from "react";

const UploadForm = ({ onFileSelect }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Upload an Image:</label>
      <input
        type="file"
        className="form-control"
        accept="image/*"
        onChange={(e) => onFileSelect(e.target.files[0])}
      />
    </div>
  );
};

export default UploadForm;
