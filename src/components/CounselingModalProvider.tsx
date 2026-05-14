"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CounselingModal } from "./CounselingModal";

interface CounselingModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const CounselingModalContext = createContext<CounselingModalContextType | undefined>(undefined);

export function CounselingModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CounselingModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
      <CounselingModal isOpen={isModalOpen} onClose={closeModal} />
    </CounselingModalContext.Provider>
  );
}

export function useCounselingModal() {
  const context = useContext(CounselingModalContext);
  if (context === undefined) {
    throw new Error("useCounselingModal must be used within a CounselingModalProvider");
  }
  return context;
}
