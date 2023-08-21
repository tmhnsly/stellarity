import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import "./theme.css";
import { DarkModeProvider } from "./contexts/DarkModeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <TooltipProvider delayDuration={400}>
        <App />
      </TooltipProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
