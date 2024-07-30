// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/home";
import PDFSummarize from "./screens/pdf-summarize";
import * as pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Pricing from "./screens/pricing";

export function loadPdfJs() {
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  return pdfjs;
}

loadPdfJs();

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<PDFSummarize />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
