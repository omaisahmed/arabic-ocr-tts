import React from "react";

const TextAreaDisplay = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Extracted Text:</label>
      <textarea
        className="form-control"
        rows="10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextAreaDisplay;
