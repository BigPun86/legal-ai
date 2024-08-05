// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as pdfjs from "pdfjs-dist";

import Home from "./screens/home";
import PDFSummarize from "./screens/pdf-summarize";

import Header from "./components/header";
import Footer from "./components/footer";
import Pricing from "./screens/pricing";

import "./App.css";
import ErrorBoundary from "./components/error-boundary";

export function loadPdfJs() {
  const src = new URL("pdfjs-dist/build/pdf.worker.js", import.meta.url);
  pdfjs.GlobalWorkerOptions.workerSrc = src.toString();

  return pdfjs;
}

loadPdfJs();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summarize" element={<PDFSummarize />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </>
    </ErrorBoundary>
  );
};

export default App;
