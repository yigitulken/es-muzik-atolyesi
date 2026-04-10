"use client"

import { createContext, useContext, useState } from "react"
import { PhotoUploadModal } from "@/components/photo-upload-modal"

interface PhotoUploadContextType {
  open: () => void
  close: () => void
}

const PhotoUploadContext = createContext<PhotoUploadContextType>({
  open: () => {},
  close: () => {},
})

export function usePhotoUploadModal() {
  return useContext(PhotoUploadContext)
}

export function PhotoUploadProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PhotoUploadContext.Provider
      value={{
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
      <PhotoUploadModal open={isOpen} onOpenChange={setIsOpen} />
    </PhotoUploadContext.Provider>
  )
}
