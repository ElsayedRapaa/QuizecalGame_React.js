import { createRoot } from "react-dom/client";
import App from "./App";
import { QuizProvider } from "./components/QuizProvider";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
