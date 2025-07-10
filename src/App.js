import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadForm from "./components/UploadForm";
import TextAreaDisplay from "./components/TextAreaDisplay";
import ActionButtons from "./components/ActionButtons";
import useOCR from "./hooks/useOCR";

function App() {
  const {
    setImageFile,
    ocrText,
    setOcrText,
    loading,
    progress,
    handleOCR,
    handleSpeak,
  } = useOCR();

  return (
    <div className="container mt-3 mb-3">
      <div className="text-center mb-4">
        <img
          src="/logo.png"
          alt="Arabic OCR & TTS Reader"
          style={{ maxWidth: "300px", height: "auto" }}
        />
      </div>

      <UploadForm onFileSelect={setImageFile} />
      <ActionButtons
        loading={loading}
        progress={progress}
        onExtractText={handleOCR}
      />
      <TextAreaDisplay value={ocrText} onChange={setOcrText} />
      <div className="text-end">
        <button
          className="btn btn-success"
          onClick={() => handleSpeak(ocrText)}
        >
          🔊 Read Aloud
        </button>
      </div>
    </div>
  );
}

export default App;
