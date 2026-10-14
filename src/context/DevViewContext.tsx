"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DevViewContextType {
  isOpen: boolean;
  activeTab: "raw" | "tree" | "ai" | "audit";
  openDevView: (tab?: "raw" | "tree" | "ai" | "audit") => void;
  closeDevView: () => void;
  toggleDevView: () => void;
  setActiveTab: (tab: "raw" | "tree" | "ai" | "audit") => void;
}

const DevViewContext = createContext<DevViewContextType | undefined>(undefined);

export function DevViewProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"raw" | "tree" | "ai" | "audit">("raw");

  const openDevView = (tab?: "raw" | "tree" | "ai" | "audit") => {
    if (tab) setActiveTab(tab);
    setIsOpen(true);
  };

  const closeDevView = () => setIsOpen(false);
  const toggleDevView = () => setIsOpen((prev) => !prev);

  // Global keyboard shortcut: Alt + S or Cmd + J
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key.toLowerCase() === "s") || (e.ctrlKey && e.key.toLowerCase() === "j")) {
        e.preventDefault();
        toggleDevView();
      }
      if (e.key === "Escape" && isOpen) {
        closeDevView();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <DevViewContext.Provider
      value={{
        isOpen,
        activeTab,
        openDevView,
        closeDevView,
        toggleDevView,
        setActiveTab,
      }}
    >
      {children}
    </DevViewContext.Provider>
  );
}

export function useDevView() {
  const context = useContext(DevViewContext);
  if (!context) {
    throw new Error("useDevView must be used within a DevViewProvider");
  }
  return context;
}
