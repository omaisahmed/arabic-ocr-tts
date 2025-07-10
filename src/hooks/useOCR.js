import { useState } from "react";
import Tesseract from "tesseract.js";

const useOCR = () => {
    const [imageFile, setImageFile] = useState(null);
    const [ocrText, setOcrText] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleOCR = () => {
        if (!imageFile) {
            alert("Please select an image first.");
            return;
        }

        setLoading(true);
        setProgress(0);

        const reader = new FileReader();
        reader.onload = (e) => {
            Tesseract.recognize(e.target.result, "ara", {
                logger: (m) => {
                    if (m.status === "recognizing text") {
                        setProgress(Math.round(m.progress * 100));
                    }
                },
            })
                .then(({ data: { text } }) => {
                    setOcrText(text);
                })
                .finally(() => setLoading(false));
        };

        reader.readAsDataURL(imageFile);
    };

    const handleSpeak = (text) => {
        if (!text.trim()) {
            console.log("No text to read!");
            return;
        }

        const synth = window.speechSynthesis;
        let voices = synth.getVoices();

        let voice = voices.find((v) => v.lang.startsWith("ar"));

        if (!voice) {
            console.log("Arabic voice missing — falling back to English.");
            voice = voices.find((v) => v.lang.startsWith("en"));
        }

        const utterance = new SpeechSynthesisUtterance(text);

        if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang;
        } else {
            utterance.lang = "en-US";
        }

        utterance.rate = 1;
        synth.speak(utterance);
    };

    return {
        imageFile,
        setImageFile,
        ocrText,
        setOcrText,
        loading,
        progress,
        handleOCR,
        handleSpeak,
    };
};

export default useOCR;
