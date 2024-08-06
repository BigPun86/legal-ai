import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import * as pdfjs from "pdfjs-dist";
import debounce from "lodash.debounce";
import Select from "react-select";

import apiInstance from "../../api";
import Modal from "../../components/modal";

import "./PDFSummarize.css"; // Ensure to include the custom CSS

type IChoice = {
  message: {
    content: string;
  };
};

const PDFSummarize: React.FC = () => {
  const [pdfText, setPdfText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState<IChoice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [models, setModels] = useState<{ value: string; label: string }[]>([]);
  const [selectedModel, setSelectedModel] = useState<{
    value: string;
    label: string;
  }>({ value: "gpt-3.5-turbo", label: "gpt-3.5-turbo" });

  const debouncedLogHi = debounce(toast, 1500);

  const updateError = (ctx: string, msg: string) =>
    debouncedLogHi(ctx + " | " + msg);

  const fetchModels = async () => {
    try {
      setError("");

      const response = await apiInstance("/models");

      const modelsData = response.data.data.map((model: any) => ({
        value: model.id,
        label: model.id,
      }));
      setModels(modelsData);
    } catch (error: any) {
      console.error("Fehler beim Abrufen der Modelle:", error);
      setError("Fehler beim Abrufen der KI-Modelle: " + error.message);
      updateError("fetchModels", error.message);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const arrayBuffer = e.target?.result as ArrayBuffer;
          const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
          let text = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item: any) => item.str).join(" ");
          }
          setPdfText(text);
          setError("");
        };
        reader.readAsArrayBuffer(file);
      } catch (err) {
        setError(
          "Fehler beim Lesen der PDF-Datei. Bitte versuchen Sie es erneut."
        );
        updateError(
          "handleFileUpload",
          "Fehler beim Lesen der PDF-Datei. Bitte versuchen Sie es erneut."
        );
      }
    }
  };

  const sendToChatGPT = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await apiInstance.post("/chat/completions", {
        model: selectedModel.value || "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "Fasse mir bitte folgendes Urteil zusammen:" + pdfText,
          },
        ],
        // max_tokens: import.meta.env.DEV && 100,
        // max_tokens: 100,
        // temperature: 0.7,
      });
      setChatGPTResponse(response.data.choices);
    } catch (error: any) {
      console.error("Fehler beim Aufrufen der ChatGPT API:", error);
      setError(
        "Fehler: Konnte keine Antwort von ChatGPT erhalten. " +
          (error.response?.data?.error?.message || error.message)
      );
      updateError(
        "sendToChatGPT",
        "Fehler: Konnte keine Antwort von ChatGPT erhalten. " +
          (error.response?.data?.error?.message || error.message)
      );
    }
    setLoading(false);
  };

  function handleOpenModal(): void {
    setIsModalOpen(true);
  }
  function handleCloseModal(): void {
    setIsModalOpen(false);
  }

  return (
    <div className="app">
      <main>
        <h1>
          <span className="highlight">KI-Anwalt:</span> dein persönlicher
          <br />
          KI-Rechtsassistent
        </h1>

        <section>
          <br />
          {import.meta.env.VITE_OPENAI_API_URL}
          <br />
          {import.meta.env.VITE_OPENAI_API_KEY.substring(0, 10) + "..."}
          <br />
          {import.meta.env.VITE_OPENAI_PROJECT_ID}
        </section>

        <button
          onClick={fetchModels}
          disabled={loading}
          className="cta-button"
          style={{ opacity: loading ? 0.5 : 1 }}
        >
          {loading ? "Models werden geladen..." : "Modelle laden"}
        </button>

        {models.length > 0 && (
          <div className="model-select">
            <label htmlFor="model-select">Wähle ein Modell:</label>
            <Select
              id="model-select"
              value={selectedModel}
              onChange={(newValue) =>
                setSelectedModel(newValue as { value: string; label: string })
              }
              options={models}
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
        )}

        <div className="two-column">
          <div className="column">
            <h3>für Verbraucher:</h3>
            <p>
              Schluss mit teurer Rechtsberatung, langen Wartezeiten auf Termine
              und unübersichtlichen Rechtstexten.
            </p>
          </div>
          <div className="column">
            <h3>für Anwälte:</h3>
            <p>
              Verabschieden Sie sich von Routineaufgaben. KI Anwalt
              automatisiert Ihre juristischen Recherchen und Ihren Papierkram
              und verschafft Ihnen so mehr Freizeit.
            </p>
          </div>
        </div>
        <div className="upload-section">
          <label htmlFor="file-upload" className="custom-file-upload">
            PDF-Datei auswählen
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
          />
        </div>

        {error && <p className="error">{error}</p>}

        {pdfText && (
          <div className="response-section">
            <h2>Zu übersetzen: </h2>
            <p>{`${pdfText.slice(0, 480)}...`}</p>
            <button onClick={handleOpenModal} className="cta-button">
              Vorschau
            </button>
          </div>
        )}

        <button
          onClick={sendToChatGPT}
          disabled={!pdfText || loading}
          className="cta-button"
          style={{ opacity: !pdfText || loading ? 0.5 : 1 }}
        >
          {loading ? "Zusammenfassung läuft..." : "Mit KI zusammenfassen"}
        </button>

        {chatGPTResponse &&
          chatGPTResponse.length > 0 &&
          chatGPTResponse.map((response, index) => (
            <div className="response-section" key={index}>
              <h2>Zusammenfassung {index + 1}</h2>
              <p>{response.message.content}</p>
            </div>
          ))}
      </main>

      <Modal show={isModalOpen} handleClose={handleCloseModal}>
        <h2>Vollständiger Text</h2>
        <p>{pdfText}</p>
      </Modal>
    </div>
  );
};

export default PDFSummarize;
