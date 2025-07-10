import React from "react";

const ActionButtons = ({ loading, progress, onExtractText }) => {
  return (
    <div className="mb-3">
      <button
        className="btn btn-primary"
        onClick={onExtractText}
        disabled={loading}
      >
        {loading ? `Processing... (${progress}%)` : "Extract Text from Image"}
      </button>
    </div>
  );
};

export default ActionButtons;
